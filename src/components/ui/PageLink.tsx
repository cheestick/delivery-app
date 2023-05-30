"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface PageLinkProps {
  children: ReactNode;
  href: string;
}

type LinkProps = typeof Link;

export default function PageLink({
  href,
  children,
  ...attributes
}: LinkProps & PageLinkProps) {
  const pathname = usePathname();
  const isActivePage = href === pathname;

  return (
    <Link
      href={href}
      className={`page-nav ${isActivePage ? "page--current" : ""}`}
      {...attributes}
    >
      {children}
    </Link>
  );
}
