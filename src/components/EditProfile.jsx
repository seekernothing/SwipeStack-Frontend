import { useState } from "react";
import UserCard from "./userCard";
import { BASE_URL } from "../utils/Constants";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl||"");
  const [age, setAge] = useState(user.age || "");
  const [gender, setGender] = useState(user.gender);
  const [about, setAbout] = useState(user.about);

  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);
  const dispatch = useDispatch();

  const saveProfile = async () => {
    setError("");
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        { firstName, lastName, photoUrl, age, gender, about },
        { withCredentials: true }
      );
      console.log(res);
      dispatch(addUser(res?.data?.data));
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 1500);
    } catch (error) {
      setError(error.response.data);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-10 w-full justify-center items-start p-8 bg-base-100 min-h-screen">
      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Saved profile successfully.</span>
          </div>
        </div>
      )}

      {/* Profile Edit Card */}
      <div className="flex-1 flex justify-center">
        <div className="card bg-base-100 shadow-xl  w-full max-w-md">
          <div className="card-body">
            <h2 className="card-title justify-center text-3xl font-bold mb-2 ">
              Edit Profile
            </h2>
            <form
              className="flex flex-col gap-7"
              onSubmit={(e) => {
                e.preventDefault();
                saveProfile();
              }}
            >
              <div className=" form-control flex gap-4">
                <label className="label">
                  <span className="label-text font-semibold">First Name</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className=" form-control flex gap-4">
                <label className="label">
                  <span className="label-text font-semibold">Last Name</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className=" form-control flex gap-4">
                <label className="label">
                  <span className="label-text font-semibold">Photo URL</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered"
                  placeholder="Photo URL"
                  value={photoUrl}
                  onChange={(e) => setPhotoUrl(e.target.value)}
                />
              </div>
              <div className=" form-control flex gap-4">
                <label className="label">
                  <span className="label-text font-semibold mr-10">Age</span>
                </label>
                <input
                  type="number"
                  className="input input-bordered"
                  placeholder="Age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  min="18"
                  max="100"
                />
              </div>
              <div className=" form-control flex gap-4">
                <label className="label">
                  <span className="label-text font-semibold mr-5">Gender</span>
                </label>
                <select
                  className="select select-bordered"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="">Select Gender</option>
                  <option value="male">male</option>
                  <option value="female">female</option>
                  <option value="others">others</option>
                </select>
              </div>
              <div className=" form-control flex gap-4">
                <label className="label">
                  <span className="label-text font-semibold mr-6">About</span>
                </label>
                <textarea
                  className="textarea textarea-bordered min-h-[80px]"
                  placeholder="Tell us about yourself..."
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                />
              </div>
              <div className="card-actions justify-center mt-4">
                <button className="btn btn-primary w-full" type="submit">
                  Save Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Live Preview Card */}
      <div className="flex-1 flex justify-center items-start">
        <div className="card bg-base-100 shadow-xl  w-full max-w-md">
          <div className="card-body">
            {/* <h2 className="card-title justify-center text-2xl font-semibold mb-2 text-primary">
              Live Preview
            </h2> */}
            <UserCard
              user={{ firstName, lastName, photoUrl, age, gender, about }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
