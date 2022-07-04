import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import usePosts from "../hooks/use-posts";
import { useLogger } from "react-use";

const Posts = () => {
  useLogger("Posts");
  const posts = usePosts(5, { listen: true });
  const [display, setDisplay] = useState();

  const loadMore = (limit) => {
    setDisplay((prev) => [
      ...prev,
      ...posts.slice(prev.length, prev.length + 3)
    ]);
  };

  useEffect(() => {
    if (posts) {
      setDisplay(posts.slice(0, 3));
    }
  }, [posts]);

  if (posts && posts?.length) {
    return (
      <div>
        <Link to="/">Home</Link>
        <pre>{JSON.stringify(display, null, 2)}</pre>
        {!posts.length ? (
          <span></span>
        ) : (
          posts.length !== display?.length && (
            <button onClick={loadMore}>Load More</button>
          )
        )}
      </div>
    );
  }
  return <h1>Loading...</h1>;
};

export default Posts;
