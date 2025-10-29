import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Body from "./components/Body";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./components/Feed";
import Connections from "./components/Connections";
import Request from "./components/Request";
import Chat from "./components/Chat";
import PrivacyPolicy from "./components/PrivacyPolicy"
import RefundPolicy from "./components/RefundPolicy";
import TermsOfService from "./components/TermsOfService"

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            {/* Landing Page as the main route */}
            <Route path="/" element={<LandingPage />} />

            {/* Login page separate from Body */}
            <Route path="/login" element={<Login />}></Route>

            <Route path="/privacy-policy" element={<PrivacyPolicy />} />

            <Route path="/refund-policy" element={<RefundPolicy />} />

            <Route path="/terms-of-service" element={<TermsOfService />} />

            {/* All authenticated routes under Body - same as before */}
            <Route path="/feed" element={<Body />}>
              <Route path="/feed" element={<Feed />}></Route>
            </Route>
            <Route path="/profile" element={<Body />}>
              <Route path="/profile" element={<Profile />}></Route>
            </Route>
            <Route path="/connections" element={<Body />}>
              <Route path="/connections" element={<Connections />}></Route>
            </Route>
            <Route path="/requests" element={<Body />}>
              <Route path="/requests" element={<Request />}></Route>
            </Route>
            <Route path="/chat/:targetUserId" element={<Body />}>
              <Route path="/chat/:targetUserId" element={<Chat />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
