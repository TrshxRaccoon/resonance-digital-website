import { Link } from "react-router-dom";
import DynamicText from "./DynamicText";

const HeroSection = () => {
  return (
    <section id="our-verticals" className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/assets/videos/hero-showreel.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay */}
        <div className="hero-overlay absolute inset-0 z-10" />
      </div>
      {/* Content */}
      <div className="absolute left-6 md:left-12 lg:left-24 top-1/2 -translate-y-1/2 z-20">
          {/* Headline */}
          <h1 className="text-display">
            <span className="block text-3xl md:text-5xl lg:text-7xl">
              We are a team of
            </span>
            <span className="block text-4xl md:text-6xl lg:text-8xl my-2 md:my-4">
              <DynamicText />
            </span>
            <span className="block text-3xl md:text-5xl lg:text-7xl">
              experts.
            </span>
          </h1>

          {/* CTA Buttons
          <div className="mt-12 md:mt-16 flex flex-col sm:flex-row gap-4">
            <Link to="/vfx" className="btn-primary">
              SHOWCASE
            </Link>
            <Link to="/contact" className="btn-minimal">
              CONTACT US
            </Link>
          </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
