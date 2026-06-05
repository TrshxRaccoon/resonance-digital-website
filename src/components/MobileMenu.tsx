import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { label: "Home", href: "/" },
  { label: "VFX", href: "/vfx" },
  { label: "Brand Solutions", href: "/brandSolutions" },
  { label: "Real Estate", href: "/real-estate" },
  { label: "Motion Pictures", href: "/motion-pictures" },
  { label: "About", href: "/about" },
  { label: "Awards", href: "/awards" },
  { label: "Contact", href: "/contact" },
];

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const location = useLocation();
  const isLightMenuTheme = [
    "/",
    "/brandSolutions",
    "/motion-pictures",
  ].includes(location.pathname);

  return (
    <>
      {/* Backdrop Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
        style={{ willChange: 'opacity' }}
      />

      {/* Side Menu Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[70] w-full md:w-[450px] ${
          isLightMenuTheme
            ? "bg-theme-secondaryBg2"
            : "bg-theme-secondaryBg1"
        } transition-transform duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          willChange: 'transform',
          backfaceVisibility: 'hidden'
        }}
      >
        {/* Close Button - Top Right */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className={`absolute top-8 right-8 flex items-center gap-2 transition-colors duration-300 group z-10 ${
            isLightMenuTheme
              ? "text-black hover:text-theme-primaryText"
              : "text-white hover:text-theme-primaryText"
          }`}
        >
          <X className="w-5 h-5" strokeWidth={1.5} />
          <span className="text-xs uppercase tracking-wider font-light">Close</span>
        </button>

        {/* Menu Items - Centered with Padding */}
        <nav className="h-full flex flex-col items-center justify-center gap-3 px-12 py-20">
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.href;
            
            return (
              <Link
                key={item.href}
                to={item.href}
                onClick={onClose}
                className="group relative py-1 text-center"
                style={{
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? "translateX(0)" : "translateX(30px)",
                  transition: `all 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.05}s`,
                  willChange: 'opacity, transform'
                }}
              >
                <span
                  className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight transition-colors duration-300 ${
                    isActive
                      ? "text-theme-primaryText"
                      : isLightMenuTheme
                        ? "text-theme-secondaryText group-hover:text-theme-primaryText"
                        : "text-white group-hover:text-theme-primaryText"
                  }`}
                  style={{ willChange: 'color' }}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Email at Bottom */}
        <div
          className={`absolute bottom-12 left-0 right-0 flex justify-center text-xs px-8 ${
            isLightMenuTheme ? "text-theme-secondaryText" : "text-white"
          }`}
          style={{
            opacity: isOpen ? 1 : 0,
            transition: "opacity 0.8s ease 0.5s",
          }}
        >
          <a
            href="mailto:hello@resonancedigital.com"
            className="hover:text-theme-primaryText transition-colors duration-300"
          >
            hello@resonancedigital.com
          </a>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
