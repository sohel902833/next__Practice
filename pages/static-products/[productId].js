import { useRouter } from "next/router";

const ProductDetails = ({ product }) => {
  console.log({
    product,
  });
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading..</h1>;
  }
  return (
    <div key={product?.id}>
      <h1>Id: {product?.id}</h1>
      <h4>Title: {product?.title}</h4>
      <h4>Price: {product?.price}</h4>
      <h4>{product?.description}</h4>
    </div>
  );
};

export default ProductDetails;

export async function getStaticProps(context) {
  const { params } = context;
  const url = "http://localhost:4000/products/" + params?.productId;
  const res = await fetch(url);
  const data = await res.json();
  if (!data.id) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      product: data,
    },
    revalidate: 10,
  };
}
export async function getStaticPaths() {
  return {
    paths: [{ params: { productId: "1" } }],
    fallback: true,
  };
}
