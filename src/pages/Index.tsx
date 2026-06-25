import { Helmet } from "react-helmet-async";
import { useEffect, useState, useRef } from "react";
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

const CountUp = ({ end, suffix = "" }: { end: number; suffix?: string }) => {
    const [count, setCount] = useState(0);
    const [started, setStarted] = useState(false);
    const ref = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started) {
                    setStarted(true);
                }
            },
            { threshold: 0.4 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [started]);

    useEffect(() => {
        if (!started) return;

        const duration = 1500;
        const start = performance.now();

        const animate = (time: number) => {
            const progress = Math.min((time - start) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [started, end]);

    return <span ref={ref}>{count}{suffix}</span>;
};

const Index = () => {
    return (
        <>
            <Helmet>
                <title>Resonance Digital | India's most diversified Creative Technology Company</title>
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
                    <section className="w-full bg-theme-primaryText py-24 md:py-32">
                      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-y-0">
                        <div className="flex flex-col items-center">
                          <span className="relative inline-block text-6xl md:text-8xl font-extralight tracking-tight text-theme-secondaryText leading-none">
                            <CountUp end={50} />
                            <span className="absolute -top-1 font-bold md:-top-2 -right-3 md:-right-5 text-2xl md:text-4xl">+</span>
                          </span>
                          <span className="mt-2 text-sm md:text-base text-gray-500">Projects Delivered</span>
                        </div>

                        <div className="flex flex-col items-center">
                          <span className="text-6xl md:text-8xl font-extralight tracking-tight text-theme-secondaryText"><CountUp end={8} suffix="x" /></span>
                          <span className="mt-2 text-sm md:text-base text-gray-500">Average Campaign</span>
                        </div>

                        <div className="flex flex-col items-center">
                          <span className="text-6xl md:text-8xl font-extralight tracking-tight text-theme-secondaryText"><><CountUp end={4} /></></span>
                          <span className="mt-2 text-sm md:text-base text-gray-500">Specialist Divisions</span>
                        </div>

                        <div className="flex flex-col items-center">
                          <span className="text-6xl md:text-8xl font-extralight tracking-tight text-theme-secondaryText"><CountUp end={10} /></span>
                          <span className="mt-2 text-sm md:text-base text-gray-500">Years In the Industry</span>
                        </div>
                      </div>
                    </section>
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