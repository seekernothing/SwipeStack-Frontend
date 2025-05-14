import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import Footer from "./Footer";


const Body = () => {
  return (
    <div className="min-h-screen flex flex-col">
    
      <NavBar />
      {/* // Any children routes of the body will render in the outlet */}
      <Outlet />
      <Footer />
    </div>
  );
}

export default Body