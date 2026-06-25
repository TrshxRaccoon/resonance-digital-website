import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [verticalsReached, setVerticalsReached] = useState(false);
  const { pathname } = useLocation();

  const isLightThemePage = [
    "/",
    "/brand-solutions",
    "/motion-pictures",
  ].includes(pathname);

  const isHomePage = pathname === "/";
  const visible = !isHomePage || verticalsReached || isMenuOpen;

  useEffect(() => {
    if (!isHomePage) return;

    const checkPosition = () => {
      const target = document.getElementById("verticals");
      if (!target) return;

      const rect = target.getBoundingClientRect();
      // Show navbar once the top of #verticals is at or above 80% down the viewport
      // i.e. it's clearly sliding into view from the bottom
      setVerticalsReached(rect.top <= window.innerHeight * 0.8);
    };

    // Run once on mount in case the user is already scrolled
    checkPosition();

    window.addEventListener("scroll", checkPosition, { passive: true });
    return () => window.removeEventListener("scroll", checkPosition);
  }, [isHomePage]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex items-center justify-between`}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(-12px)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
          pointerEvents: visible ? "auto" : "none",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          className="relative z-50 font-display text-xl md:text-2xl font-bold tracking-tight text-foreground flex items-center gap-1"
        >
          <img
            src="/assets/images/RDL_logo.png"
            alt="Resonance"
            className="h-10 md:h-12"
          />
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative z-50 w-12 h-12 flex items-center justify-center text-gray-500 hover:text-primary transition-colors duration-300"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header;
