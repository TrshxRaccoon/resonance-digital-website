import { Link } from "react-router-dom";


type FooterTheme = "light" | "dark";

interface FooterProps {
  theme?: FooterTheme;
}

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15 15 0 0 1 0 20" />
    <path d="M12 2a15 15 0 0 0 0 20" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.5 1.6-1.5H16.7V5c-.3 0-1.4-.1-2.7-.1-2.6 0-4.4 1.6-4.4 4.6V11H7v3h2.6v8h3.9Z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M23 12s0-3.5-.4-5.2a2.9 2.9 0 0 0-2-2C18.8 4.3 12 4.3 12 4.3s-6.8 0-8.6.5a2.9 2.9 0 0 0-2 2C1 8.5 1 12 1 12s0 3.5.4 5.2a2.9 2.9 0 0 0 2 2c1.8.5 8.6.5 8.6.5s6.8 0 8.6-.5a2.9 2.9 0 0 0 2-2C23 15.5 23 12 23 12ZM10 15.5v-7l6 3.5-6 3.5Z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M4.98 3.5A2.48 2.48 0 1 0 5 8.46a2.48 2.48 0 0 0-.02-4.96ZM3 9h4v12H3Zm7 0h3.8v1.7h.1c.5-.9 1.8-1.9 3.8-1.9 4 0 4.7 2.6 4.7 6V21h-4v-5.5c0-1.3 0-3-1.9-3s-2.2 1.5-2.2 2.9V21h-4Z"/>
  </svg>
);

const Footer = ({ theme = "light" }: FooterProps) => {
  const isDark = theme === "dark";
  const backgroundClass = isDark ? "bg-[#080032]" : "bg-[#f6f5ee]";
  const textClass = isDark ? "text-[#f2eee2]" : "text-black";
  const mutedTextClass = isDark ? "text-[#f2eee2]/70" : "text-black/70";
  const subtleTextClass = isDark ? "text-[#f2eee2]/50" : "text-black/50";
  const bodyTextClass = isDark ? "text-[#f2eee2]/90" : "text-black/90";
  const borderClass = isDark ? "border-[#f2eee2]/20" : "border-black/20";
  const topCtaClass = isDark
    ? "bg-[#f2eee2]/20 hover:bg-[#f2eee2]/30"
    : "bg-[#080032] hover:bg-[#080032]/90";
  const topCtaTextClass = isDark ? "text-[#f2eee2]" : "text-white";

  return (
    <footer className={`${backgroundClass} ${textClass}`}>
      <div className="max-w-[1400px] mx-auto px-16 pt-24 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-28 items-start">

        {/* LEFT COLUMN */}
        <div className="flex flex-col items-start">

          <h2 className="text-3xl font-semibold mb-3">Art Comes First</h2>
          <p className={`text-sm max-w-md mb-8 ${mutedTextClass}`}>
            We shape distinctive success stories with breakthrough ideas and
            creative mastery, elevating you ahead of the competition.
          </p>

          <div className="w-full max-w-xl">
            <Link
              to="/contact"
              className={`${topCtaClass} flex items-center justify-between px-8 py-6 w-full mb-10 cursor-pointer transition`}
            >
              <span className={`font-semibold text-base ${topCtaTextClass}`}>
                Got A Project? let’s Talk
              </span>
              <span className={`text-xl ${topCtaTextClass}`}>↗</span>
            </Link>

            {/* GOOGLE MAP - CLICKABLE */}
            <a
              href="https://maps.app.goo.gl/mkXCTnNfDQbu8xVHA"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-64 mb-10 rounded-lg overflow-hidden shadow-lg relative group"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.835056494968!2d72.8661467!3d19.1557888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b71e5a5c5c5d%3A0x5c5c5c5c5c5c5c5c!2sLotus%20Corporate%20Park%2C%20Jay%20Coach%20Junction%2C%20Graham%20Firth%20Compound%2C%20Goregaon%2C%20Mumbai%2C%20Maharashtra%20400063!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, pointerEvents: 'none' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Resonance Digital Office Location"
              />
              
              {/* Overlay with "Open in Maps" button */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center pointer-events-none">
                <div className="bg-sky-400 text-white px-6 py-3 rounded-full font-semibold opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300 shadow-xl">
                  Open in Maps →
                </div>
              </div>
            </a>
          </div>

          {/* ADDRESS + PHONE */}
          <div className={`border-t mt-4 pt-8 grid grid-cols-1 sm:grid-cols-2 gap-16 text-sm ${borderClass}`}>
            <div>
              <p className={`text-xs uppercase mb-3 ${subtleTextClass}`}>Address</p>
              <a
                href="https://maps.app.goo.gl/mkXCTnNfDQbu8xVHA"
                target="_blank"
                rel="noopener noreferrer"
                className={`block leading-relaxed hover:text-sky-600 transition-colors duration-300 cursor-pointer group ${bodyTextClass}`}
              >
                <span className="group-hover:underline">
                  F-802, Lotus Corporate Park, W.E.H,<br/>
                  Goregaon East, Near Jai Coach Signal,<br/>
                  Mumbai, Maharashtra - 400060 (INDIA)
                </span>
                <span className="block text-xs text-sky-600/80 group-hover:text-sky-600 mt-2">
                  Click for directions →
                </span>
              </a>
            </div>

            <div>
              <p className={`text-xs uppercase mb-3 ${subtleTextClass}`}>Phone Number</p>
              <p className={bodyTextClass}>+91 9769 39 2002</p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col pt-28">

          {/* LINKS */}
          <div className="space-y-16 mb-8">
            {[
              { label: "Works", path: "/vfx" },
              { label: "Verticals", path: "/#our-verticals" },
              { label: "About us", path: "/about" },
              { label: "Awards", path: "/awards" },
            ].map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`flex items-center justify-between border-b pb-6 text-base cursor-pointer ${borderClass}`}
              >
                <span>{item.label}</span>
                <span>↗</span>
              </Link>
            ))}
          </div>

         {/* SOCIAL ICONS */}
          <div className="flex gap-8 mt-0 mb-6">
            {[
              { icon: <GlobeIcon />, href: "https://resonancedigital.in" },
              { icon: <FacebookIcon />, href: "https://www.facebook.com/share/1D13tnZctJ/" },
              { icon: <YoutubeIcon />, href: "https://www.youtube.com/@Resonance2016" },
              { icon: <InstagramIcon />, href: "https://www.instagram.com/resonancedigital/" },
              { icon: <LinkedInIcon />, href: "https://www.linkedin.com/company/resonance-digital/" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-[64px] h-[64px] border flex items-center justify-center rounded-full text-[24px] transition-all duration-300 hover:scale-105 ${isDark ? "border-[#f2eee2]/40" : "border-black/30"}`}
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* CONTACT BLOCK */}
          <div className={`border-t pt-8 mt-2 ${borderClass}`}>
            <p className={`text-xs uppercase mb-8 ${subtleTextClass}`}>Contact with us</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 text-sm">
              <div>
                <p className="font-medium mb-3">For Business Enquiries</p>
                <p className={bodyTextClass}>+91-7800-90-8000</p>
                <p className={bodyTextClass}>abhyuday@resonancedigital.in</p>
              </div>

              <div>
                <p className="font-medium mb-3">For Hiring Enquiries</p>
                <p className={bodyTextClass}>+91-9769-39-2002</p>
                <p className={bodyTextClass}>hr@resonancedigital.in</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className={`border-t py-8 text-center text-xs ${borderClass} ${isDark ? "text-[#f2eee2]/60" : "text-black/60"}`}>
        © {new Date().getFullYear()} Resonance Digital LLP. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
