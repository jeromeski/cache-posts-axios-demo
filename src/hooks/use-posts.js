import { useEffect, useState } from "react";
import useAxios from "./use-axios";

let cache = {};

const usePosts = (uid, { listen } = { listen: true }) => {
  const [data, fetchPosts] = useAxios();
  const cached = cache[uid];
  const [posts, setPosts] = useState(cached);
  console.log(data);
  console.log("cache", cache);

  useEffect(() => {
    if (listen) {
      fetchPosts("https://jsonplaceholder.typicode.com/posts");
    }
  }, [uid, listen]);

  useEffect(() => {
    if (data) {
      const userPosts = data.filter((user) => uid === user.userId);
      setPosts(userPosts);
      cache[uid] = posts;
    }
  }, [data]);

  return posts;
};

export default usePosts;
