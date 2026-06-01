import { useState } from "react";
import { useNavigate } from "react-router-dom";

const items = [
  { id: "vfx", title: "VFX", subtitle: "Movies & Ads", href: "/vfx" },
  { id: "real-estate", title: "Real Estate", subtitle: "Mar-tech", href: "/real-estate" },
  { id: "brand", title: "Brand Solutions", subtitle: "", href: "/brandSolutions" },
  { id: "motion", title: "Motion Pictures", subtitle: "", href: "/motion-pictures" },
];

const HorizontalSelector = () => {
  const [activeId, setActiveId] = useState(items[0].id);
  const navigate = useNavigate();

  return (
    <section id="our-verticals" className="w-full bg-[#f6f4ef] py-16">
      <div className="w-full">
        <div className="mb-10 px-16 max-w-7xl mx-auto">
          <h2 className="font-display text-[56px] leading-[1.05] text-gray-400">
            What<br />we do
          </h2>
        </div>

        <div className="border-t border-b border-gray-300 w-full">
          {items.map((item) => {
            const isActive = activeId === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setActiveId(item.id);
                  if (item.href) navigate(item.href);
                }}
                onMouseEnter={() => setActiveId(item.id)}
                className="w-full text-left focus:outline-none"
              >
                <div
                  className={
                    "relative flex items-center h-[96px] px-16 transition-colors duration-300 border-b border-gray-300 " +
                    (isActive ? "bg-[#4a97d3]" : "bg-transparent")
                  }
                >
                  <div className="flex items-baseline gap-4">
                    <span
                      className={
                        "font-display text-[28px] transition-colors duration-300 " +
                        (isActive ? "text-white" : "text-gray-600")
                      }
                    >
                      {item.title}
                    </span>

                    {item.subtitle && (
                      <span
                        className={
                          "text-[16px] uppercase tracking-wide transition-colors duration-300 " +
                          (isActive ? "text-white/80" : "text-gray-400")
                        }
                      >
                        {item.subtitle}
                      </span>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HorizontalSelector;
