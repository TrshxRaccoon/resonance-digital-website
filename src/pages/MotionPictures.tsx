import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimatedColorText from "../components/AnimatedColorText";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FixedHero from "@/components/FixedHero";

type ShowcaseItem = {
  title: string;
  description: string;
  image: string;
};

const showcaseItems: ShowcaseItem[] = [
  {
    title: "CHHATRASAL",
    description: "Historic Web Series • 20 Episodes",
    image: "/assets/images/movies/movies_01.png",
  },
  {
    title: "STPI",
    description: "Documentary film",
    image: "/assets/images/movies/movies_02Witches.png",
  },
  {
    title: "ULTIMATE HOMECHEF",
    description: "Web Series with legends judges",
    image: "/assets/images/movies/movies_03.png",
  },
  {
    title: "MORDE",
    description: "2024",
    image: "/assets/images/movies/batman.png",
  },
  {
    title: "TRAVEL + LEISURE",
    description: "2024",
    image: "/assets/images/movies/flash.jpg",
  },
  {
    title: "OPPO",
    description: "2024",
    image: "/assets/images/movies/strangerThings.jpg",
  },
  {
    title: "CHHATRASAL SEASON 2",
    description: "Historic Web Series • 15 Episodes",
    image: "/assets/images/movies/movies_01.png",
  },
  {
    title: "DOCUMENTARY",
    description: "Short film",
    image: "/assets/images/movies/movies_02Witches.png",
  },
  {
    title: "COOKING SHOW",
    description: "Celebrity Cooking Challenge",
    image: "/assets/images/movies/movies_03.png",
  },
  {
    title: "BRAND CAMPAIGN",
    description: "2025",
    image: "/assets/images/movies/batman.png",
  },
  {
    title: "TRAVEL SERIES",
    description: "2025",
    image: "/assets/images/movies/flash.jpg",
  },
  {
    title: "TECH SHOWCASE",
    description: "2025",
    image: "/assets/images/movies/strangerThings.jpg",
  },
];

const SHOWCASE_PER_PAGE = 3;
const AUTO_ROTATE_MS = 5000;

const MotionPictures = () => {
  const [currentShowcasePage, setCurrentShowcasePage] = useState(0);
  const [showcaseDirection, setShowcaseDirection] = useState(1);

  const totalShowcasePages = Math.ceil(
    showcaseItems.length / SHOWCASE_PER_PAGE,
  );

  const handleShowcaseNext = () => {
    if (totalShowcasePages <= 1) return;
    setShowcaseDirection(1);
    setCurrentShowcasePage((prev) => (prev + 1) % totalShowcasePages);
  };

  const handleShowcasePrev = () => {
    if (totalShowcasePages <= 1) return;
    setShowcaseDirection(-1);
    setCurrentShowcasePage(
      (prev) => (prev - 1 + totalShowcasePages) % totalShowcasePages,
    );
  };

  useEffect(() => {
    if (totalShowcasePages <= 1) return;

    const timer = window.setInterval(() => {
      setShowcaseDirection(1);
      setCurrentShowcasePage((prev) => (prev + 1) % totalShowcasePages);
    }, AUTO_ROTATE_MS);

    return () => window.clearInterval(timer);
  }, [totalShowcasePages]);

  const showcaseStartIndex = currentShowcasePage * SHOWCASE_PER_PAGE;
  const currentShowcaseItems = showcaseItems.slice(
    showcaseStartIndex,
    showcaseStartIndex + SHOWCASE_PER_PAGE,
  );
  return (
    <>
      <Helmet>
        <title>Motion Pictures | Resonance Digital</title>
        <meta
          name="description"
          content="Motion picture creative and production services by Resonance Digital."
        />
      </Helmet>

      <Header />

      <FixedHero
        backgroundImage="/assets/images/motionPictures/motionpicturesbg.jpeg"
        title="Motion Pictures"
        description={
          <AnimatedColorText
            whiteText="A leading digital Creative Technology Company, which focuses on delivering rememberable web designs that are search"
            blueText="able, alongside other online promotion solutions in Coventry. We provide our clients with striking, practical, and intuitive sites that attract clientele and yield revenue."
          />
        }
      />

      {/* Showcase Section */}
      <section className="w-full bg-[#f6f4ef] py-20 px-10 md:px-16">
        <h2 className="font-display text-3xl md:text-4xl font-normal text-gray-400 mb-12">
          Motion Picture <span className="text-gray-400">|</span>{" "}
          <span className="font-bold text-gray-700">Showcase</span>
        </h2>

        <div className="relative">
          {/* Previous Button */}
          <button
            onClick={handleShowcasePrev}
            disabled={totalShowcasePages <= 1}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-10 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
              totalShowcasePages <= 1
                ? "bg-gray-200 cursor-not-allowed opacity-40"
                : "bg-gray-300 hover:bg-gray-400 cursor-pointer"
            }`}
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>

          {/* Next Button */}
          <button
            onClick={handleShowcaseNext}
            disabled={totalShowcasePages <= 1}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-10 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
              totalShowcasePages <= 1
                ? "bg-gray-200 cursor-not-allowed opacity-40"
                : "bg-gray-300 hover:bg-gray-400 cursor-pointer"
            }`}
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>

          {/* Carousel Container */}
          <div className="relative overflow-hidden">
            <AnimatePresence initial={false} custom={showcaseDirection}>
              <motion.div
                key={currentShowcasePage}
                custom={showcaseDirection}
                initial={{ x: showcaseDirection > 0 ? "100%" : "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: showcaseDirection > 0 ? "-100%" : "100%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="
  grid
  grid-cols-1
  md:grid-cols-3
  gap-8
  absolute
  inset-0
"
              >
                {currentShowcaseItems.map((item, index) => (
                  <div
                    key={`${item.title}-${showcaseStartIndex + index}`}
                    className="flex flex-col cursor-pointer group min-w-0"
                  >
                    <div className="relative aspect-video overflow-hidden rounded-sm">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-4">
                      <h3 className="text-lg font-semibold text-gray-800 uppercase tracking-wide leading-tight">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm text-gray-500 uppercase tracking-wide leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Placeholder for empty slots */}
                {Array.from({
                  length: SHOWCASE_PER_PAGE - currentShowcaseItems.length,
                }).map((_, index) => (
                  <div key={`placeholder-${index}`} className="flex flex-col">
                    <div className="aspect-video" />
                    <div className="h-6 mt-3" />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Invisible spacer to maintain height */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 invisible">
              {Array.from({ length: SHOWCASE_PER_PAGE }).map((_, i) => (
                <div key={`spacer-${i}`} className="flex flex-col">
                  <div className="aspect-video" />
                  <div className="h-6 mt-3" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer theme="dark" />
    </>
  );
};

export default MotionPictures;
