import { useState } from "react";
import UserCard from "./UserCard";
import { BASE_URL } from "../utils/Constants";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl || "");
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
      // console.log(res);
      dispatch(addUser(res?.data?.data));
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 1500);
    } catch (error) {
      setError(error?.response?.data);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full justify-center items-center md:items-start p-4 sm:p-6 md:p-8 bg-base-100 min-h-screen">
      {showToast && (
        <div className="toast toast-top toast-center z-50">
          <div className="alert alert-success text-sm sm:text-base">
            <span>Saved profile successfully.</span>
          </div>
        </div>
      )}

      {/* Profile Edit Card */}
      <div className="w-full md:flex-1 flex justify-center">
        <div className="card bg-base-100 shadow-xl w-full max-w-[95vw] sm:max-w-[440px]">
          <div className="card-body p-4 sm:p-6 md:p-8">
            <h2 className="card-title justify-center text-xl sm:text-2xl md:text-3xl font-bold mb-2 md:mb-4">
              Edit Profile
            </h2>
            <form
              className="flex flex-col gap-4 sm:gap-5 md:gap-6"
              onSubmit={(e) => {
                e.preventDefault();
                saveProfile();
              }}
            >
              <div className="form-control flex gap-2 sm:gap-3">
                <label className="label py-1">
                  <span className="label-text font-semibold text-sm sm:text-base">
                    First Name
                  </span>
                </label>
                <input
                  type="text"
                  className="input input-bordered h-10 sm:h-12 text-sm sm:text-base"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="form-control flex gap-2 sm:gap-3">
                <label className="label py-1">
                  <span className="label-text font-semibold text-sm sm:text-base">
                    Last Name
                  </span>
                </label>
                <input
                  type="text"
                  className="input input-bordered h-10 sm:h-12 text-sm sm:text-base"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="form-control flex gap-2 sm:gap-3">
                <label className="label py-1">
                  <span className="label-text font-semibold text-sm sm:text-base">
                    Photo URL
                  </span>
                </label>
                <input
                  type="text"
                  className="input input-bordered h-10 sm:h-12 text-sm sm:text-base"
                  placeholder="Photo URL"
                  value={photoUrl}
                  onChange={(e) => setPhotoUrl(e.target.value)}
                />
              </div>
              <div className="form-control flex gap-2 sm:gap-3">
                <label className="label py-1">
                  <span className="label-text font-semibold text-sm sm:text-base mr-4 sm:mr-10">
                    Age
                  </span>
                </label>
                <input
                  type="number"
                  className="input input-bordered h-10 sm:h-12 text-sm sm:text-base"
                  placeholder="Age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  min="18"
                  max="100"
                />
              </div>
              <div className="form-control flex gap-2 sm:gap-3">
                <label className="label py-1">
                  <span className="label-text font-semibold text-sm sm:text-base mr-4 sm:mr-5">
                    Gender
                  </span>
                </label>
                <select
                  className="select select-bordered h-10 sm:h-12 text-sm sm:text-base"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="">Select Gender</option>
                  <option value="male">male</option>
                  <option value="female">female</option>
                  <option value="others">others</option>
                </select>
              </div>
              <div className="form-control flex gap-2 sm:gap-3">
                <label className="label py-1">
                  <span className="label-text font-semibold text-sm sm:text-base mr-4 sm:mr-6">
                    About
                  </span>
                </label>
                <textarea
                  className="textarea textarea-bordered min-h-[60px] sm:min-h-[80px] text-sm sm:text-base"
                  placeholder="Tell us about yourself..."
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                />
              </div>
              <div className="card-actions justify-center mt-2 sm:mt-4">
                <button
                  className="btn btn-primary w-full h-10 sm:h-12 text-sm sm:text-base"
                  type="submit"
                >
                  Save Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Live Preview Card */}
      <div className="w-full md:flex-1 flex justify-center mt-6 md:mt-0">
        <div className="card bg-base-100 shadow-xl w-full max-w-[95vw] sm:max-w-[440px]">
          <div className="card-body p-4 sm:p-6 md:p-8">
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
