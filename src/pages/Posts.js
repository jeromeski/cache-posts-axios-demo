import { Link } from "react-router-dom";
import usePosts from "../hooks/use-posts";

const Posts = () => {
  const posts = usePosts(5, true);
  return (
    <div>
      <Link to="/">Home</Link>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </div>
  );
};

export default Posts;
