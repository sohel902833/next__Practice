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
    "https://jsonplaceholder.typicode.com/posts/" + params.postId
  );
  const data = await res.json();

  return {
    props: {
      post: data,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const data = await res.json();
  const paths = data.map((post) => {
    return {
      params: { postId: `${post.id}` },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
