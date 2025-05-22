import axios from "axios";
import { BASE_URL } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    if (feed) return;

    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });

      dispatch(addFeed(res.data.data));
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getFeed();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!feed) return null;
  if (feed.length === 0) return <h1>No new users found</h1>;

  return (
    <div className="flex justify-center items-center my-8 relative w-full max-w-80 sm:max-w-sm h-[30rem] sm:h-[35rem] mx-auto">
      {feed.slice(0, 3).map((user, idx) => (
        <div
          key={user._id}
          className="absolute w-full h-full flex justify-center items-center"
          style={{ zIndex: 3 - idx }}
        >
          <UserCard user={user} />
        </div>
      ))}
    </div>
  );
};

export default Feed;
