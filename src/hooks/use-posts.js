import { useEffect, useState } from "react";
import useAxios from "./use-axios";
import _ from "lodash";

let cache = {};

const usePosts = (uid, { listen } = { listen: true }) => {
  const [data, fetchPosts] = useAxios();
  const cached = cache[uid];
  const [posts, setPosts] = useState(cached);
  cache[uid] = posts;

  useEffect(() => {
    if (listen) {
      fetchPosts("https://jsonplaceholder.typicode.com/posts");
    }
  }, [uid, listen]);

  useEffect(() => {
    if (data) {
      const userPosts = data.filter((user) => uid === user.userId);
      setPosts(userPosts);
    }
  }, [data]);

  console.log("cached", cached);
  return posts;
};

export default usePosts;
