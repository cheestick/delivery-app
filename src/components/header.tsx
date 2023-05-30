import React from "react";
import Navigation from "./navigation";

export default function Header() {
  return (
    <header className="sticky top-0 shadow-xl px-2 py-4">
      <div className="container mx-auto">
        <Navigation />
      </div>
    </header>
  );
}
