import { Helmet } from "react-helmet-async";
import { useEffect, useState, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import BrandStatement from "@/components/BrandStatement";
import VerticalSelector from "@/components/VerticalSelector";
// import HorizontalSelector from "@/components/HorizontalSelector";
import AnimatedCounter from "@/components/AnimatedCounter";

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
                <link rel="preload" href="/assets/videos/hero-showreel.webm" as="video" type="video/webm" {...({ fetchpriority: "high" } as any)} />
            </Helmet>

            <div className="min-h-screen bg-background">
                <Header />
                <main>
                    <section className="relative">
                        <Hero />
                    </section>
                    <BrandStatement />
                    {/* Stats and Services Section */}
                    <section className="w-full bg-[#f2eee2] px-6 md:px-12 lg:px-24 border-b border-black/[0.06] flex items-center py-20">
                        <div className="w-full max-w-[1700px] mx-auto flex flex-col justify-center">

                            {/* Stats Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.05fr_1.2fr_0.9fr_0.85fr] gap-12 lg:gap-16 xl:gap-20 justify-items-center mb-14">
                                {/* Stat 1 */}
                                <div className="w-full max-w-[340px] mx-auto text-center flex flex-col items-center">
                                    <div className="flex items-center justify-center -mb-3">
                                        <span className="relative inline-block text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold text-[#8e8e8e] leading-none ml-2">
                                            <AnimatedCounter value={200} />
                                            <span className="absolute -top-1 md:-top-2 lg:-top-3 -right-6 md:-right-8 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#8e8e8e] leading-none">+</span>
                                        </span>
                                    </div>
                                    <p className="text-[#58595b] text-sm md:text-base lg:text-lg font-sans font-bold tracking-wide">
                                        Experts in our team
                                    </p>
                                </div>

                                {/* Stat 2 */}
                                <div className="w-full max-w-[340px] mx-auto text-center flex flex-col items-center">
                                    <div className="flex items-center justify-center -mb-3">
                                        <span className="relative inline-block text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold text-[#8e8e8e] tracking-tight leading-none ml-2">
                                            <AnimatedCounter value={1000} />
                                            <span className="absolute -top-1 md:-top-2 lg:-top-3 -right-6 md:-right-8 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#8e8e8e] leading-none">+</span>
                                        </span>
                                    </div>
                                    <p className="text-[#58595b] text-sm md:text-base lg:text-lg font-sans font-bold tracking-wide">
                                        Projects Delivered
                                    </p>
                                </div>

                                {/* Stat 3 */}
                                <div className="w-full max-w-[340px] mx-auto text-center flex flex-col items-center">
                                    <div className="flex items-center justify-center -mb-3">
                                        <span className="relative inline-block text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold text-[#8e8e8e] leading-none ml-2">
                                            <AnimatedCounter value={20} />
                                            <span className="absolute -top-1 md:-top-2 lg:-top-3 -right-6 md:-right-8 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#8e8e8e] leading-none">+</span>
                                        </span>
                                    </div>
                                    <p className="text-[#58595b] text-sm md:text-base lg:text-lg font-sans font-bold tracking-wide">
                                        Countries served
                                    </p>
                                </div>

                                {/* Stat 4 */}
                                <div className="w-full max-w-[340px] mx-auto text-center flex flex-col items-center">
                                    <div className="flex items-center justify-center -mb-3">
                                        <span className="relative inline-block text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold text-[#8e8e8e] leading-none ml-2">
                                            <AnimatedCounter value={10} />
                                            <span className="absolute -top-1 md:-top-2 lg:-top-3 -right-6 md:-right-8 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#8e8e8e] leading-none">+</span>
                                        </span>
                                    </div>
                                    <p className="text-[#58595b] text-sm md:text-base lg:text-lg font-sans font-bold tracking-wide">
                                        Years of legacy
                                    </p>
                                </div>
                            </div>

                            {/* Divider and Text Statement */}
                            <div className="w-full border-t border-black/[0.15] pt-12">
                                <p className="font-display text-[32px] sm:text-[40px] md:text-[54px] lg:text-[68px] xl:text-[76px] font-bold text-[#58595b] leading-[0.9] tracking-tight max-w-[1400px]">
                                    Where Creativity Meets Intelligence.
                                    <br />
                                    AI. VFX. Immersive. Brand Experiences. One Creative Technology Partner.
                                </p>
                            </div>
                        </div>
                    </section>
                    <VerticalSelector />
                </main>
                <Footer />
            </div>

            <ScrollIndicator />
        </>
    );
};

export default Index;