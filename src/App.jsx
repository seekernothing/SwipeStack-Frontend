import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";

function App() {
  

  return (
    <>
    <BrowserRouter basename="/">

<Routes>
  <Route path="/" element={<div>Base page</div>}></Route>
  <Route path="/login" element={<div>Login page</div>}></Route>
  <Route path="/test" element={<div>Test page</div>}></Route>
</Routes>

    </BrowserRouter>
     <NavBar/>
      <h1 className="text-4xl font-extrabold">Hello World</h1>
    </>
  );
}

export default App
