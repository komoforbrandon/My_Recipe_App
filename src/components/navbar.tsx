import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { ChefHat } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/favorites", label: "Favorite" },
    { to: "/about", label: "About" },
  ];

  return (
    <nav className="bg-amber-800/20 px-4 py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <Link to="/" className="shrink-0">
          <h1 className="flex items-center text-xl font-bold text-amber-950 sm:text-2xl">
            <ChefHat className="mr-2" size={28} />
            237Recipe App
          </h1>
        </Link>

        <div className="hidden items-center gap-6 text-amber-950 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="transition-colors hover:text-amber-700"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-amber-950 transition-colors hover:bg-amber-900/10 md:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen ? (
        <div className="mx-auto mt-4 flex max-w-6xl flex-col rounded-xl bg-white/70 p-4 text-amber-950 shadow-sm backdrop-blur-sm md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="rounded-md px-3 py-2 transition-colors hover:bg-amber-900/10"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      ) : null}
    </nav>
  );
}
