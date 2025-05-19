import axios from "axios";
import { BASE_URL } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import UserCard from "./userCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    if (feed) return;

    try {
      const res = await axios.get(BASE_URL + "/feed", { withCredentials: true });
      
      dispatch(addFeed(res.data.data));
      console.log(res)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(()=>{
    getFeed()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  return feed && (
    <div className="flex justify-center my-8">
      <UserCard user={feed[0]} />
    </div>
  );
};

export default Feed;
