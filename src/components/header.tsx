import React from "react";
import Navigation from "./navigation";

export default function Header() {
  return (
    <header className="sticky top-0 shadow-xl px-2 py-4 bg-white/70 backdrop-blur-xl">
      <div className="container mx-auto">
        <Navigation />
      </div>
    </header>
  );
}
