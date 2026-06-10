import { ReactNode, useEffect, useRef, useState } from "react";

type FixedHeroProps = {
    backgroundImage: string;
    title: string;
    description?: ReactNode;
    overlayStrength?: number;
    mirrored?: boolean;
    heroHeight?: string;
};

const FixedHero = ({
    backgroundImage,
    title,
    description,
    overlayStrength = 0.55,
    mirrored = false,
    heroHeight = "250vh",
}: FixedHeroProps) => {
    const heroRef = useRef<HTMLElement>(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!heroRef.current) return;

            const rect = heroRef.current.getBoundingClientRect();

            const scrollProgress = Math.min(
                Math.max(-rect.top / (window.innerHeight * 0.7), 0),
                1,
            );

            setProgress(scrollProgress);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative"
            style={{
                height: heroHeight,
            }}
        >
            {/* Fixed Background */}
            <div
                className="fixed inset-0 -z-10"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    transform: mirrored ? "scaleX(-1)" : undefined,
                }}
            />

            {/* Overlay */}
            <div
                className="fixed inset-0 pointer-events-none"
                style={{
                    backgroundColor: `rgba(0,0,0,${overlayStrength * (1 - progress)})`,
                    zIndex: -5,
                }}
            />

            {/* Hero Content */}
            <div
                className="sticky top-0 h-screen flex items-center px-6 md:px-12 lg:px-24"
                style={{
                    opacity: Math.max(1 - progress * 2, 0),
                }}
            >
                <div className="max-w-6xl">
                    <h1 className="font-display text-[65px] md:text-[75px] lg:text-[85px] font-bold text-[#4ab6ff] mb-10 leading-tight">
                        {title}
                    </h1>

                    {description}
                </div>
            </div>
        </section>
    );
};

export default FixedHero;
