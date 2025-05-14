const Login = () => {
  return (
    <div className="flex justify-center items-center p-15">
      <div className="card card-border bg-base-300 w-90">
        <div className="card-body">
          <h2 className="card-title justify-center text-4xl "> Welcome Back</h2>
          <p className=" flex justify-center">Login to continue</p>

          <div>
            <fieldset className="fieldset ">
              <legend className="fieldset-legend underline ">Email ID</legend>
              <input type="text" className="input" placeholder="" />
            </fieldset>

            <fieldset className="fieldset ">
              <legend className="fieldset-legend underline ">Password</legend>
              <input type="text" className="input" placeholder="" />
            </fieldset>
          </div>

          <div className="flex w-full mt-4">
            <div className="flex justify-between items-center w-full">
              <label className="label cursor-pointer flex items-center gap-2">
                <input type="checkbox" className="checkbox" />
                Remember me
              </label>
              <a href="#" className="text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>
          </div>

          <div className="card-actions justify-center mt-3">
            <button className="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
