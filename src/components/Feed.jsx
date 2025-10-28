import axios from "axios";
import { BASE_URL } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import NoUserFound from "../fallback/NoUserFound";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const getFeed = async (pageNum) => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    try {
      const res = await axios.get(BASE_URL + `/feed?page=${pageNum}&limit=10`, {
        withCredentials: true,
      });

      const newUsers = res.data.data;

      // Agar koi naye users nahi mile
      if (newUsers.length === 0) {
        setHasMore(false);
      } else {
        dispatch(addFeed(newUsers));
        setPage(pageNum + 1);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Initial load - pehli baar jab component mount ho
  useEffect(() => {
    if (!feed) {
      getFeed(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Auto-reload jab feed kam ho jaye
  useEffect(() => {
    // Jab sirf 2 ya usse kam users bache ho
    if (feed && feed.length <= 2 && feed.length > 0 && !isLoading && hasMore) {
      getFeed(page);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [feed?.length]);

  if (!feed) return null;

  if (feed.length === 0 && !hasMore) {
    return <NoUserFound />;
  }

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

      {/* Loading indicator - optional */}
      {isLoading && feed.length > 0 && (
        <div className="absolute -bottom-8 text-gray-500 text-sm animate-pulse">
          Loading more users...
        </div>
      )}
    </div>
  );
};

export default Feed;
