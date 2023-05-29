import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex gap-8">
      <Link
        href="/"
        className="bg-black/5 px-4 py-2 active:bg-black/10 hover:underline underline-offset-8"
      >
        Shop
      </Link>
      <Link
        href="cart"
        className="bg-black/5 px-4 py-2 active:bg-black/10 hover:underline underline-offset-8"
      >
        Shopping Cart
      </Link>
    </nav>
  );
}
