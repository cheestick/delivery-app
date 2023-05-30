import PageLink from "./ui/PageLink";

export default function Navigation() {
  return (
    <nav className="flex gap-8">
      <PageLink href="/">Shop</PageLink>
      <PageLink href="/cart">Shopping Cart</PageLink>
    </nav>
  );
}
