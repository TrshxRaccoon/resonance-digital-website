"use client";

import { useRef, useState, useEffect } from "react";

const BrandStatement = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const scrollDeltaRef = useRef(0);
    const isLockedRef = useRef(false);
    const hasCompletedRef = useRef(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isInView, setIsInView] = useState(false);
    const isMobile =
        typeof window !== "undefined" &&
        (window.innerWidth < 768 || "ontouchstart" in window);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsInView(entry.isIntersecting);
                });
            },
            { threshold: 0.2 },
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    // Handle wheel/touch scroll attempts during animation
    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            if (isMobile) {
                return;
            }
            if (hasCompletedRef.current) {
                return;
            }

            const delta = e.deltaY;
            const isScrollingDown = delta > 0;

            if (!sectionRef.current) {
                return;
            }

            const rect = sectionRef.current.getBoundingClientRect();
            const viewportCenter = window.innerHeight / 2;
            const elementCenter = rect.top + rect.height / 2;
            const isCentered = Math.abs(elementCenter - viewportCenter) < 80;

            if (!isLockedRef.current) {
                // Only lock when user scrolls down and section is centered
                if (isInView && isCentered && isScrollingDown) {
                    isLockedRef.current = true;
                    setIsAnimating(true);
                    scrollDeltaRef.current = 0;
                    document.body.style.overflow = "hidden";
                } else {
                    return; // Let normal scrolling happen
                }
            }

            // Lock active: consume scroll to drive animation
            e.preventDefault();

            scrollDeltaRef.current += delta;
            const progress = Math.min(Math.max(scrollDeltaRef.current / 800, 0), 1);
            setScrollProgress(progress);

            if (progress <= 0 && delta < 0) {
                document.body.style.overflow = "";
                isLockedRef.current = false;
                setIsAnimating(false);
                return;
            }

            if (progress >= 1) {
                document.body.style.overflow = "";
                isLockedRef.current = false;
                hasCompletedRef.current = true;
                setIsAnimating(false);
            }
        };

        const handleTouchMove = () => {
            return;
        };

        window.addEventListener("wheel", handleWheel, { passive: false });
        window.addEventListener("touchmove", handleTouchMove, { passive: false });

        return () => {
            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener("touchmove", handleTouchMove);
        };
    }, [isInView]);

    const statementText =
        "A leading digital Creative Technology Company, which focuses on delivering rememberable web designs that are searchable, alongside other online promotion solutions. We provide our clients with striking, practical, and intuitive sites that attract clientele and yield revenue.";

    const visibleCharacters = isMobile
        ? statementText.length
        : Math.floor(statementText.length * scrollProgress);

    return (
        <section
            ref={sectionRef}
            className="relative bg-[#f6f5ee] min-h-screen w-full flex items-center px-6 md:px-10 lg:px-16 z-30 -mt-[100vh]"
        >
            <div className="w-full max-w-[1900px] mx-auto flex flex-col items-start pl-0 md:pl-2 lg:pl-4">
                {/* Verticals line - NEVER animates */}
                <p className="mb-8 text-[18px] md:text-[20px] lg:text-[22px] font-medium tracking-wide text-left">
                    <span className="text-[#201c50] font-bold">VFX & Animation</span>
                    <span className="text-gray-300"> | </span>
                    <span className="text-[#201c50] font-bold">Real Estate Mar-Tech</span>
                    <span className="text-gray-300"> | </span>
                    <span className="text-[#201c50] font-bold">Brand Solution</span>
                    <span className="text-gray-300"> | </span>
                    <span className="text-[#201c50] font-bold">Motion Pictures</span>
                </p>

                {/* Main statement - scroll-driven typewriter effect */}
                <div className="max-w-7xl">
                    <p className="text-[25px] md:text-[45px] lg:text-[65px] font-display font-large leading-[0.9] tracking-tight font-bold">
                        {statementText.split("").map((char, index) => (
                            <span
                                key={index}
                                style={{
                                    color: index < visibleCharacters ? "#4ab6ff" : "#f2eee2",
                                }}
                            >
                                {char}
                            </span>
                        ))}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default BrandStatement;
