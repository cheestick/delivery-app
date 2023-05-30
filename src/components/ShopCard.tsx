import React, { ReactNode } from "react";

type ShopCardProps = {
  shopname?: string;
  children?: ReactNode;
};

export default function ShopCard({ shopname, children }: ShopCardProps) {
  return (
    <div className="px-4 py-4 border-2 border-sky-800/10 hover:bg-sky-800/20 active:bg-sky-800/30 cursor-pointer text-center align-middle">
      {shopname}
    </div>
  );
}
