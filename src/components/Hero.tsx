import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import DynamicText from "./DynamicText";

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Track scroll progress relative to the hero section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Transform values based on scroll - text fades out early to show clean video
    const contentY = useTransform(scrollYProgress, [0, 0.4], [0, -150]);
    const contentOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

    return (
        <section ref={containerRef} id="hero" className="relative h-[200vh] w-full">
            {/* Sticky Viewport Container */}
            <div className="sticky top-0 left-0 w-full h-screen z-0 overflow-hidden">
                {/* Video Background */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                >
                    <source src="/assets/images/hero-showreel.webm" type="video/webm" />
                </video>

                {/* Dark Overlay */}
                <div className="absolute inset-0 hero-overlay z-10" />

                <div
                    className="
    absolute
    inset-x-0
    top-0
    h-32
    bg-gradient-to-b
    from-black/80
    via-black/30
    to-transparent
    z-10
  "
                />

                {/* Content - Animated */}
                <motion.div
                    className="
    absolute
    left-6
    right-6
    md:left-12
    md:right-auto
    lg:left-24
    max-w-[85vw]
    md:max-w-none
    top-[58%]
    md:top-auto
    md:bottom-14
    lg:bottom-16
    -translate-y-1/2
    md:translate-y-0
    z-20
  "
                    style={{
                        y: contentY,
                        opacity: contentOpacity,
                    }}
                >
                    {/* Headline */}
                    <h1
                        style={{
                            fontFamily: '"Gotham-Bold", "Gotham", sans-serif',
                            fontWeight: 700,

                            /* Reduced hero headline size */
                            fontSize: "clamp(40px, 10vw, 55pt)",

                            /* Kill browser-added line gap */
                            lineHeight: "0.88",

                            /* Tighten tracking to match Illustrator optical kerning */
                            letterSpacing: "-0.06em",

                            /* Force real kerning + no extra spacing */
                            fontKerning: "normal",
                            fontFeatureSettings: '"kern" 1, "liga" 0',

                            /* Prevent subpixel rounding expansion */
                            textRendering: "geometricPrecision",
                        }}
                    >
                        <span
                            style={{
                                display: "block",
                                color: "#ffffff",
                            }}
                        >
                            We are a team of
                        </span>

                        <span
                            style={{
                                display: "block",
                                color: "#C8D46A", // Brand Solution green from PPT
                                letterSpacing: "-0.065em",
                                lineHeight: "0.88",
                            }}
                        >
                            <div
                                style={{
                                    minHeight: "1.1em",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <DynamicText />
                            </div>
                        </span>

                        <span
                            style={{
                                display: "block",
                                color: "#ffffff",
                            }}
                        >
                            experts.
                        </span>
                    </h1>

                    {/* CTA Buttons
        <div className="mt-12 flex flex-row items-center gap-4">
          <a href="/vfx" className="btn-primary-custom">
            SHOWCASE
          </a>
          <a href="/contact" className="btn-minimal">
            CONTACT US
          </a>
        </div> */}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
