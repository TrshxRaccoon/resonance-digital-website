// components/AnimatedParagraph.tsx
"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

type Props = {
    text: string;
    scrollProgress?: number;
};

export default function AnimatedParagraph({ text, scrollProgress = 0 }: Props) {
    const ref = useRef<HTMLParagraphElement>(null);

    const letters = text.split("");

    return (
        <p
            ref={ref}
            className="font-display text-[40px] md:text-[42px] lg:text-[44px] leading-[1.35] text-left max-w-6xl"
        >
            {letters.map((char, i) => {
                // Each letter starts animating at a staggered point based on scroll progress
                const letterStart = i / letters.length;
                const letterEnd = letterStart + 0.05; // Each letter has 5% of progress range

                // Calculate current color based on scroll progress
                let currentColor = "#d1d5db"; // default light gray

                if (scrollProgress >= letterEnd) {
                    // Letter is fully animated
                    currentColor = "#4b5563"; // darker gray
                } else if (scrollProgress >= letterStart) {
                    // Letter is mid-animation, interpolate between colors
                    const progress =
                        (scrollProgress - letterStart) / (letterEnd - letterStart);
                    // Interpolate from light gray to dark gray
                    const lightGray = [209, 213, 219]; // #d1d5db
                    const darkGray = [75, 85, 99]; // #4b5563

                    const r = Math.round(
                        lightGray[0] + (darkGray[0] - lightGray[0]) * progress,
                    );
                    const g = Math.round(
                        lightGray[1] + (darkGray[1] - lightGray[1]) * progress,
                    );
                    const b = Math.round(
                        lightGray[2] + (darkGray[2] - lightGray[2]) * progress,
                    );

                    currentColor = `rgb(${r}, ${g}, ${b})`;
                }

                return (
                    <motion.span key={i} style={{ color: currentColor }}>
                        {char}
                    </motion.span>
                );
            })}
        </p>
    );
}
