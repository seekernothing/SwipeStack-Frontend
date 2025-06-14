import { Outlet, useLocation, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { BASE_URL } from "../utils/Constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useEffect } from "react";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);
  const location = useLocation();

  // Defining routes where Footer should be visible
  const showFooterRoutes = ["/login", "/signup"];
  const showFooter = showFooterRoutes.includes(location.pathname);

  const fetchUser = async () => {
    if (userData) return;
    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(res.data));
    } catch (error) {
      if (error.response.status === 401) {
        // Redirect to login instead of /login when not authenticated
        navigate("/login");
      }
      console.error(error);
    }
  };

  // useEffect(() => {
  //   // Only fetch user for authenticated routes (under /app)
  //   if (location.pathname.startsWith("/app")) {
  //     fetchUser();
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [location.pathname]);

  // Existing code...

  useEffect(() => {
    // FIX: Condition update karo
    const protectedRoutes = [
      "/feed",
      "/profile",
      "/connections",
      "/requests",
      "/chat",
    ];

    if (protectedRoutes.some((route) => location.pathname.startsWith(route))) {
      fetchUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // Existing code...
  return (
    <div className="min-h-screen flex flex-col font font-swipestack">
      <NavBar />

      {/* Any children routes of the body will render in the outlet */}
      <Outlet />

      {showFooter && <Footer />}
    </div>
  );
};

export default Body;
