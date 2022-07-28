import Link from "next/link";

export default function Products({ products }) {
  return (
    <div>
      <h1>Product List</h1>
      {products?.map((product) => {
        return (
          <>
            <div key={product?.id}>
              <h1>Id: {product?.id}</h1>
              <Link href={`/products/${product?.id}`} passHref>
                <h4>Title: {product?.title}</h4>
              </Link>
              <h4>Price: {product?.price}</h4>
              <h4>{product?.description}</h4>
            </div>
            <br />
            <hr />
            <br />
          </>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/products/");
  const data = await res.json();
  console.log("Re generating product list");

  return {
    props: {
      products: data,
    },
    revalidate: 10,
  };
}
