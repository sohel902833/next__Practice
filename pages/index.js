import Link from "next/link";
import { useRouter } from "next/router";
const Home = () => {
  const router = useRouter();
  const goToProductPage = () => {
    router.push("/product");
  };

  return (
    <div>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <div onClick={() => goToProductPage()}>
        <h1>Products</h1>
      </div>
      <h1>Hello World</h1>
    </div>
  );
};

export default Home;
