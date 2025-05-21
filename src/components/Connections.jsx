import axios from "axios";
import { BASE_URL } from "../utils/Constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";

const Connections = () => {
  const connections = useSelector((store) => store.connections);

  const dispatch = useDispatch();

  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });

      console.log(res?.data?.data);

      dispatch(addConnections(res?.data?.data));
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchConnections();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!connections) return;

  if (connections.length === 0) return <>No coonections Found</>;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-100 py-10">
      <h1 className="font-bold text-4xl mb-8 text-primary">Connections</h1>
      <div className="flex flex-col gap-8 items-center w-full">
        {connections.map((connection, idx) => {
          const { firstName, lastName, photoUrl, age, gender, about } =
            connection;
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

                {/* <div className="card-actions flex justify-between items-center w-full mt-5 ">
                  <button className="btn bg-red-500 text-amber-50">
                    Ignore
                  </button>
                  <button className="btn bg-pink-500 text-amber-50">
                    Interested
                  </button>
                </div> */}


              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Connections;
