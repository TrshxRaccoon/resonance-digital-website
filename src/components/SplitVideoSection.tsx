"use client";

import { useState } from "react";

type HoveredSide = "movies" | "ads" | null;

const SplitVideoSection = () => {
    const [hoveredSide, setHoveredSide] = useState<HoveredSide>(null);

    const highlightOverlay = (side: "movies" | "ads") =>
        hoveredSide === side ? "bg-black/25" : "bg-black/50";

    const moviesClip = "polygon(0% 0%, 62% 0%, 50% 100%, 0% 100%)";
    const adsClip = "polygon(62% 0%, 100% 0%, 100% 100%, 50% 100%)";

    return (
        <section className="relative w-full min-h-[70vh] lg:min-h-[85vh] xl:h-[90vh] overflow-hidden bg-black">
            {/* Diagonal seam */}
            <div
                className="absolute inset-0 pointer-events-none z-10"
                style={{
                    background:
                        "linear-gradient(118deg, transparent 48%, rgba(255,255,255,0.55) 50%, transparent 52%)",
                }}
            />

            {/* Top branding row */}
            <div className="absolute z-20 top-8 sm:top-10 md:top-12 left-0 right-0 px-8 sm:px-12 md:px-16 flex items-center justify-between pointer-events-none">
                <div className="flex items-center gap-4 text-white">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-500 font-display text-3xl font-bold">
                        R
                    </div>
                    <div className="leading-tight">
                        <p className="text-[11px] uppercase tracking-[0.6em] text-white/70">
                            Resonance
                        </p>
                        <p className="text-white/80 text-sm">Creative Studio</p>
                    </div>
                </div>

                <div className="flex items-center gap-5 text-white">
                    <div className="text-right leading-tight">
                        <p className="text-[10px] uppercase tracking-[0.5em] text-white/60">
                            Valenza
                        </p>
                        <p className="text-sm text-white/70">Partners</p>
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <span className="block h-px w-10 bg-white" />
                        <span className="block h-px w-10 bg-white" />
                    </div>
                    <p className="text-[11px] uppercase tracking-[0.5em] text-white/60">
                        Menu
                    </p>
                </div>
            </div>

            {/* Left side */}
            <div
                className="absolute inset-0 z-10 group cursor-pointer"
                style={{ clipPath: moviesClip }}
                onMouseEnter={() => setHoveredSide("movies")}
                onMouseLeave={() => setHoveredSide(null)}
                aria-label="Explore movie work"
            >
                <video
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="/assets/videos/movies.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div
                    className={`absolute inset-0 transition-colors duration-500 ${highlightOverlay("movies")}`}
                />
                <div className="absolute left-24 md:left-28 top-1/2 -translate-y-1/2">
                    <p className="font-display text-[68px] sm:text-[80px] lg:text-[96px] xl:text-[110px] font-bold text-[#4ab6ff] drop-shadow-lg">
                        Movies
                    </p>
                </div>
            </div>

            {/* Right side */}
            <div
                className="absolute inset-0 z-0 group cursor-pointer"
                style={{ clipPath: adsClip }}
                onMouseEnter={() => setHoveredSide("ads")}
                onMouseLeave={() => setHoveredSide(null)}
                aria-label="Explore advertising work"
            >
                <video
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="/assets/videos/ads.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div
                    className={`absolute inset-0 transition-colors duration-500 ${highlightOverlay("ads")}`}
                />
                <div className="absolute right-24 md:right-28 top-1/2 -translate-y-1/2 text-right">
                    <p className="font-display text-[68px] sm:text-[80px] lg:text-[96px] xl:text-[110px] font-bold text-white drop-shadow-lg">
                        Ads
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SplitVideoSection;
