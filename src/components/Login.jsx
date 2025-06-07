import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/Constants";

const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  //switch for login & signup form
  const [isLoginForm, setIsLoginForm] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handelLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          email: emailId,
          password,
        },
        { withCredentials: true }
      );

      dispatch(addUser(res.data));
      return navigate("/feed");
    } catch (error) {
      setError(error?.response?.data || "Something went wrong");
      console.error();
      // Optionally, set an error state here to display a message to the user
    }
  };

  const handelSignup = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        { firstName, lastName, email: emailId, password },
        { withCredentials: true }
      );
      dispatch(addUser(res.data.data));
      return navigate("/profile");
    } catch (error) {
      setError(error?.response?.data || "Something went wrong");
      console.error();
    }
  };

  return (
    <div className="flex justify-center items-center p-10 mt-10 sm:mt-0 ">
      <div className="card card-border bg-base-300 w-90">
        <div className="card-body">
          {isLoginForm ? (
            <>
              <h2 className="card-title justify-center text-4xl ">
                {" "}
                Welcome Back
              </h2>
              <p className="flex justify-center">Login to continue</p>
              <div>
                <fieldset className="fieldset ">
                  <legend className="fieldset-legend underline ">
                    Email ID
                  </legend>
                  <input
                    type="text"
                    className="input"
                    placeholder=""
                    value={emailId}
                    onChange={(e) => setEmailId(e.target.value)}
                  />
                </fieldset>
                <fieldset className="fieldset ">
                  <legend className="fieldset-legend underline ">
                    Password
                  </legend>
                  <input
                    type="password"
                    className="input"
                    placeholder=""
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </fieldset>
              </div>
              <div className="flex w-full mt-4">
                <div className="flex justify-between items-center w-full">
                  <label className="label cursor-pointer flex items-center gap-2">
                    <input type="checkbox" className="checkbox " />
                    Remember me
                  </label>
                  <a href="#" className="text-blue-600 hover:underline">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="card-actions justify-center mt-3">
                <button onClick={handelLogin} className="btn btn-primary">
                  Login
                </button>
              </div>
              <div className="flex justify-center mt-2">
                <span>Don't have an account? </span>
                <button
                  className="btn btn-link  ml-1 p-0 min-h-0 h-auto text-green-500"
                  onClick={() => setIsLoginForm(false)}
                >
                  Sign Up
                </button>
              </div>
            </>
          ) : (
            <>
              <h2 className="card-title justify-center text-4xl ">Sign Up</h2>
              <p className="flex justify-center">Create your account</p>
              <div>
                <fieldset className="fieldset ">
                  <legend className="fieldset-legend underline ">
                    First Name
                  </legend>
                  <input
                    type="text"
                    className="input"
                    placeholder=""
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </fieldset>
                <fieldset className="fieldset ">
                  <legend className="fieldset-legend underline ">
                    Last Name
                  </legend>
                  <input
                    type="text"
                    className="input"
                    placeholder=""
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </fieldset>
                <fieldset className="fieldset ">
                  <legend className="fieldset-legend underline ">
                    Email ID
                  </legend>
                  <input
                    type="text"
                    className="input"
                    placeholder=""
                    value={emailId}
                    onChange={(e) => setEmailId(e.target.value)}
                  />
                </fieldset>
                <fieldset className="fieldset ">
                  <legend className="fieldset-legend underline ">
                    Password
                  </legend>
                  <input
                    type="password"
                    className="input"
                    placeholder=""
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </fieldset>
              </div>
              <div className="card-actions justify-center mt-3">
                <button onClick={handelSignup} className="btn btn-primary">
                  Sign Up
                </button>
              </div>
              <div className="flex justify-center mt-2">
                <span>Already have an account? </span>
                <button
                  className="btn btn-link  ml-1 p-0 min-h-0 h-auto text-green-500"
                  onClick={() => setIsLoginForm(true)}
                >
                  Login
                </button>
              </div>
            </>
          )}

          <p className="text-red-500">{error}</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
