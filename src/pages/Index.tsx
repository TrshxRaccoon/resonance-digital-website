import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import BrandStatement from "@/components/BrandStatement";
import VerticalSelector from "@/components/VerticalSelector";
// import HorizontalSelector from "@/components/HorizontalSelector";

const ScrollIndicator = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY < 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "36px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 99999,
        pointerEvents: "none",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.7s ease",
      }}
    >
      {/* SCROLL label — matches brand's monospaced tracking style */}
      <span
        style={{
          fontSize: "9px",
          letterSpacing: "0.35em",
          textTransform: "uppercase",
          // Sky blue from the brand palette, slightly dimmed
          color: "white",//"rgba(74, 182, 255, 0.6)",
          fontWeight: 400,
        }}
      >
        scroll
      </span>

      {/* Thin line with traveling highlight */}
      <div
        style={{
          width: "1px",
          height: "52px",
          // Deep navy tint as the track
          background: "rgba(8, 0, 50, 0.25)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Traveling highlight */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "45%",
            background:
              "linear-gradient(to bottom, rgba(74,182,255,0), rgb(255, 255, 255), rgba(74,182,255,0))", //rgba(74,182,255,0.9)
            animation: "scrollLine 1.7s cubic-bezier(0.4,0,0.6,1) infinite",
          }}
        />
      </div>

      <style>{`
        @keyframes scrollLine {
          0%   { transform: translateY(-100%); opacity: 0;   }
          20%  { opacity: 1; }
          80%  { opacity: 1; }
          100% { transform: translateY(280%);  opacity: 0;   }
        }
      `}</style>
    </div>
  );
};

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Resonance Digital | VFX & Creative Studio</title>
        <meta
          name="description"
          content="Resonance Digital is a premium VFX and creative studio specializing in visual effects, brand content, real estate visualization, and immersive experiences."
        />
        <meta name="keywords" content="VFX, visual effects, animation, creative studio, brand content, real estate visualization" />
        <link rel="canonical" href="https://resonancedigital.in" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <section className="relative">
            <Hero />
          </section>
          <BrandStatement />
          {/* <HorizontalSelector /> */}
          <VerticalSelector />
        </main>
        <Footer />
      </div>

      {/* Rendered at root level — never clipped by any stacking context */}
      <ScrollIndicator />
    </>
  );
};

export default Index;