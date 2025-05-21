import axios from "axios";
import { BASE_URL } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  const { _id, firstName, lastName, photoUrl, age, gender, about } = user;

  const handelRequest = async (status, userId) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true }
      );

      dispatch(removeUserFromFeed(userId));
      console.log(res);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm border border-amber-400">
        <div className="w-full h-64 overflow-hidden flex items-start justify-center p-3 rounded-lg ">
          <img
            className="w-full h-full object-contain object-top rounded"
            src={photoUrl}
            alt="photo"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
          />
        </div>
        <div className="card-body">
          <h2 className="card-title">{`${firstName} ${lastName}, ${age}`}</h2>
          <p>{`${gender}`}</p>
          <p>{about}</p>
          <div className="card-actions flex justify-between items-center w-full mt-5 ">
            <button
              className="btn bg-red-500 text-amber-50"
              onClick={() => handelRequest("ignored", _id)}
            >
              Ignore
            </button>
            <button
              className="btn bg-pink-500 text-amber-50"
              onClick={() => handelRequest("interested", _id)}
            >
              Interested
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
