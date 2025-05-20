import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/Constants";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
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
      return navigate("/");
    } catch (error) {
      setError(error?.response?.data || "Something went wrong");
      console.error();
      // Optionally, set an error state here to display a message to the user
    }
  };

  return (
    <div className="flex justify-center items-center p-10">
      <div className="card card-border bg-base-300 w-90">
        <div className="card-body">
          <h2 className="card-title justify-center text-4xl "> Welcome Back</h2>
          <p className=" flex justify-center">Login to continue</p>

          <div>
            <fieldset className="fieldset ">
              <legend className="fieldset-legend underline ">Email ID</legend>
              <input
                type="text"
                className="input"
                placeholder=""
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
              />
            </fieldset>

            <fieldset className="fieldset ">
              <legend className="fieldset-legend underline ">Password</legend>
              <input
                type="text"
                className="input"
                placeholder=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </fieldset>
          </div>

          <p className="text-red-500">{error}</p>

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
        </div>
      </div>
    </div>
  );
};

export default Login;
