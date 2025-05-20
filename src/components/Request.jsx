import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/Constants";
import { addRequests, removeRequest } from "../utils/requestSlice";
import { useEffect } from "react";

const Request = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.request);

  const reviewRequest = async (status, _id) => {
    try {
      const res = axios.post(
        BASE_URL + "/request/review/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );
      dispatch(removeRequest(_id));
    } catch (error) {
      console.error(error.message);
    }
  };

  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });

      console.log(res);

      dispatch(addRequests(res.data.data));
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (!requests) return;

  if (requests.length === 0) return <>No request Found</>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-100 my-5 ">
      <h1 className="font-bold text-4xl mb-8 text-primary">Requests</h1>
      <div className="flex flex-col gap-8 items-center w-full">
        {requests.map((request, idx) => {
          const { firstName, lastName, photoUrl, age, gender, about, _id } =
            request.fromUserId;
          return (
            <div
              key={idx}
              className="card bg-base-100 w-96 shadow-sm border border-amber-400"
            >
              <div className="w-full h-64 overflow-hidden flex items-center justify-center p-3 ">
                <img
                  className="w-full h-full object-contain object-top rounded-lg"
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
                    onClick={() => reviewRequest("rejected", request._id)}
                  >
                    Ignore
                  </button>
                  <button
                    className="btn bg-pink-500 text-amber-50"
                    onClick={() => reviewRequest("accepted", request._id)}
                  >
                    Interested
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Request;
