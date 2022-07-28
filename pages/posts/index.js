import Link from "next/link";

export default function Posts({ posts }) {
  return (
    <div>
      <h1>Post List</h1>
      {posts?.map((post) => {
        return (
          <div key={post?.id}>
            <h1>Id: {post?.id}</h1>
            <Link href={`/posts/${post?.id}`} passHref>
              <h4>Title: {post?.title}</h4>
            </Link>
            <h4>{post?.body}</h4>
          </div>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const data = await res.json();

  return {
    props: {
      posts: data,
    },
  };
}
