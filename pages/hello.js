import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HELLO(props) {
  const { data, error } = useSWR("/api/posts", fetcher);

  console.log(data);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <div>
      <h1>Welcome to the Hello page.....</h1>
      {data.map((post, i) => {
        return <p>{post.title}</p>
      })}
    </div>
  );
}
