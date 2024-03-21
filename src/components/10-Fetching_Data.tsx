import { useEffect, useRef, useState } from "react";

const BASE_URL = "https://jsonplaceholder.typicode.com";

interface Post {
  id: number;
  title: string;
}

export default function Demo() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [page, setPage] = useState(0);

  //Abort controller is something that allows you to call the abort function on it and then cancel a request
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();

      setIsLoading(true);


      try {
        const response = await fetch(`${BASE_URL}/posts?page=${page}`, {
            signal: abortControllerRef.current?.signal,
        });
        const posts = (await response.json()) as Post[];
        setPosts(posts);
      } catch (e: any) {
        if(e.name === "AbortError"){
            console.log("Aborted");
            return;
        }
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, [page]);

  if (error) {
    return <div>Something went wrong, please try again....</div>;
  }

  return (
    <div className="tutorial">
      <h1 className="mb-4 text-2xl">Data Fething in React</h1>
      <button onClick={() => setPage(page + 1)}>Increase Page {page}</button>
      {isLoading && <div>Loading....</div>}
      {!isLoading && (
        <ul>
          {posts.map((post) => {
            return <li key={post.id}>{post.title}</li>;
          })}
        </ul>
      )}
    </div>
  );
}
