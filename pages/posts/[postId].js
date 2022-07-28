import { useRouter } from "next/router";

export default function PostDetails({ post }) {
  return (
    <div>
      <h1>Post Details</h1>
      <h3>Id: {post?.id}</h3>
      <h4>Title: {post?.title}</h4>
      <h4>{post?.body}</h4>
    </div>
  );
}

export async function getStaticProps(context) {
  const { params } = context;

  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + params?.postId
  );
  const data = await res.json();
  if (!data.id) {
    return {
      notFound: true,
    };
  }
  console.log("Generating page for /posts/" + params?.postId);
  return {
    props: {
      post: data,
    },
  };
}

export async function getStaticPaths() {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
  //   const data = await res.json();
  //   const paths = data.map((post) => {
  //     return {
  //       params: { postId: `${post.id}` },
  //     };
  //   });
  return {
    paths: [
      {
        params: { postId: "1" },
      },
      {
        params: { postId: "2" },
      },
      {
        params: { postId: "3" },
      },
    ],
    fallback: "blocking",
  };
}
