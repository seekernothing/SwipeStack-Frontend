import TinderCard from "react-tinder-card";
import axios from "axios";
import { BASE_URL } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";
import { useCallback } from "react";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  const { _id, firstName, lastName, photoUrl, age, gender, about } = user;

  // Use useCallback to avoid unnecessary re-renders
  const handleRequest = useCallback(
    async (status, userId) => {
      try {
        await axios.post(
          BASE_URL + "/request/send/" + status + "/" + userId,
          {},
          { withCredentials: true }
        );
        dispatch(removeUserFromFeed(userId));
      } catch (error) {
        console.error(error.message);
      }
    },
    [dispatch]
  );

  // For swipe, use a stable callback
  const onSwipe = useCallback(
    (direction) => {
      if (direction === "right") {
        handleRequest("interested", _id);
      } else if (direction === "left") {
        handleRequest("ignored", _id);
      }
    },
    [handleRequest, _id]
  );

  // Card UI
  return (
    <TinderCard
      onSwipe={onSwipe}
      preventSwipe={["up", "down"]}
      className="absolute swipe-card"
      swipeRequirementType="position"
      swipeThreshold={100}
    >
      <div
        className="card bg-base-100 w-full sm:w-96 h-[30rem] sm:h-[35rem] shadow-sm border border-amber-400 cursor-pointer select-none rounded-lg overflow-hidden transition-transform duration-300 ease-in-out   "
        style={{ touchAction: "pan-y" }}
      >
        <div className="w-full h-[67%] bg-gray-200 flex items-center justify-center overflow-hidden">
          <img
            className="object-cover w-full h-full pointer-events-none"
            src={photoUrl}
            alt={firstName}
            draggable={false}
          />
        </div>
        <div className="card-body bg-base-200 p-4">
          <div className="mb-3">
            <h2 className="text-lg sm:text-xl font-semibold">{`${firstName} ${lastName}`}</h2>
            <p className="text-sm sm:text-base text-gray-600 sm:mt-1 mb-2">{`${age}, ${gender}`}</p>
            <p className="text-gray-300 text-sm sm:text-base">
              {about || "No description available"}
            </p>
          </div>
          <div className="card-actions flex justify-between space-x-2">
            <button
              onClick={() => handleRequest("ignored", _id)}
              className="btn btn-error btn-sm sm:btn-md flex-1 bg-red-500"
            >
              Ignore
            </button>
            <button
              onClick={() => handleRequest("interested", _id)}
              className="btn btn-primary btn-sm sm:btn-md flex-1 bg-green-500"
            >
              Interested
            </button>
          </div>
        </div>
      </div>
    </TinderCard>
  );
};

export default UserCard;
