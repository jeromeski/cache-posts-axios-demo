import usePosts from "./hooks/use-posts";
import "./styles.css";

export default function App() {
  const posts = usePosts(5)
  return (
    <div className="App">
      <pre>{JSON.stringify(posts, null, 2)}</pre>

    </div>
  );
}
