import Link from "next/link";
export default function Products() {
  return (
    <div>
      <Link href="/product/product1">
        <a>Product 1</a>
      </Link>
      <Link href="/product/product2">
        <a>Product 2</a>
      </Link>
      <Link href="/product/product3">
        <a>Product 3</a>
      </Link>
    </div>
  );
}
