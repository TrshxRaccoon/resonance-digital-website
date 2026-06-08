import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimatedColorText from "../components/AnimatedColorText";
import FixedHero from "../components/FixedHero";

const realEstateStatements = [
  {
    title: "3D Renders",
    body: "Photoreal visuals that help buyers and stakeholders experience the project before completion.",
  },
  {
    title: "Video Walkthroughs",
    body: "Cinematic property walkthroughs designed for sales, investor presentations, and digital campaigns.",
  },
  {
    title: "Films",
    body: "Branded short-form and long-form films that showcase project scale, amenities, and lifestyle.",
  },
  {
    title: "Drone Shoots",
    body: "Aerial capture for site context, connectivity, and progress highlights across construction phases.",
  },
  {
    title: "Interactive Sales Tools",
    body: "Touch-friendly sales experiences to present unit layouts, tower views, and project inventories.",
  },
  {
    title: "3D Projection Mapping",
    body: "Immersive projection stories crafted for launch events, investor meets, and marquee activations.",
  },
  {
    title: "Hologram",
    body: "Holographic presentation formats for premium real estate launches and experiential showcases.",
  },
  {
    title: "2D & 3D Isometrics",
    body: "Detailed isometric plans to communicate spatial flow, zoning, and feature hierarchy clearly.",
  },
  {
    title: "Virtual Reality",
    body: "VR-ready environments that let prospects explore interiors and amenities with true depth.",
  },
  {
    title: "Augmented Reality",
    body: "AR overlays to bring brochures, models, and sales collateral to life in real-time.",
  },
  {
    title: "Digital Twin",
    body: "Data-connected digital twins for monitoring, showcasing, and planning across project lifecycles.",
  },
];

const expertiseCategories = [
  "3D Renders",
  "3D Walkthroughs",
  "Drone Shots",
  "2D Isometrics",
  "3D Isometrics",
];

type ExpertiseShowcaseItem = {
  title: string;
  subtitle: string;
  image: string;
  category: string;
};

const expertiseShowcase: ExpertiseShowcaseItem[] = [
  //3D RENDERS
  {
    title: "Hiranandani Empress Hill",
    subtitle: "",
    image: "/assets/images/martech/Renders/HiranandaniEmpressHill.png",
    category: "3D Renders",
  },
  {
    title: "Kalpataru",
    subtitle: "",
    image: "/assets/images/martech/Renders/Kalpataru.png",
    category: "3D Renders",
  },
  {
    title: "DLF",
    subtitle: "",
    image: "/assets/images/martech/Renders/DLF.png",
    category: "3D Renders",
  },
  {
    title: "Oberoi Sky City",
    subtitle: "",
    image: "/assets/images/martech/Renders/OberoiSkyCity.png",
    category: "3D Renders",
  },
  {
    title: "Larsen & Toubro",
    subtitle: "",
    image: "/assets/images/martech/Renders/Larsen&Turbo.png",
    category: "3D Renders",
  },
  {
    title: "Mahindra Vista",
    subtitle: "",
    image: "/assets/images/martech/Renders/MahindraVista.png",
    category: "3D Renders",
  },
  {
    title: "Hiranandini Empress Hill",
    subtitle: "",
    image: "/assets/images/martech/Renders/HiranandiniEmpressHill.png",
    category: "3D Renders",
  },
  {
    title: "Mahindra 2",
    subtitle: "",
    image: "/assets/images/martech/Renders/Mahindra_2.png",
    category: "3D Renders",
  },
  {
    title: "Mahindra 1",
    subtitle: "",
    image: "/assets/images/martech/Renders/Mahindra_1.png",
    category: "3D Renders",
  },
  {
    title: "Rustomjee",
    subtitle: "",
    image: "/assets/images/martech/Renders/Rustomjee.png",
    category: "3D Renders",
  },
  {
    title: "Rustomjee Lavie",
    subtitle: "",
    image: "/assets/images/martech/Renders/Rustomjee Lavie.png",
    category: "3D Renders",
  },
  {
    title: "Larsen & Toubro 1",
    subtitle: "",
    image: "/assets/images/martech/Renders/Larsen&Turbo_1.png",
    category: "3D Renders",
  },
  {
    title: "Mahindra",
    subtitle: "",
    image: "/assets/images/martech/Renders/Mahindra.png",
    category: "3D Renders",
  },

  //3D WALKTHROUGHS
  {
    title: "Kalpataru Park Revera",
    subtitle: "",
    image: "/assets/images/martech/Walkthroughs/Kalpataru-Park-Revera.png",
    category: "3D Walkthroughs",
  },
  {
    title: "Mahindra Vista",
    subtitle: "",
    image: "/assets/images/martech/Walkthroughs/Mahindra-Vista.png",
    category: "3D Walkthroughs",
  },
  {
    title: "Prestige Bellanza",
    subtitle: "",
    image: "/assets/images/martech/Walkthroughs/Prestige-Bellanza.png",
    category: "3D Walkthroughs",
  },
  {
    title: "Zira",
    subtitle: "",
    image: "/assets/images/martech/Walkthroughs/Zira.png",
    category: "3D Walkthroughs",
  },

  //2D ISOMETRICS
  {
    title: "2D Isometric 01",
    subtitle: "",
    image: "/assets/images/martech/2D-Isometrics/Picture1.png",
    category: "2D Isometrics",
  },
  {
    title: "2D Isometric 02",
    subtitle: "",
    image: "/assets/images/martech/2D-Isometrics/Picture2.png",
    category: "2D Isometrics",
  },

  //3D ISOMETRICS
  {
    title: "3D Isometric 01",
    subtitle: "",
    image: "/assets/images/martech/3D-Isometrics/Picture3.png",
    category: "3D Isometrics",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// IMMERSIVE TECHNOLOGY SOLUTIONS — VIDEO SEGMENT DATA
//
// Each tab has a `videoSrc` and a list of `segments`.
// To update a timestamp, find the tab and segment by label and change
// `start` and `end` (both in SECONDS from the beginning of the video).
//
// Example: to make "Views" play from 2:15 to 2:50 set  start: 135, end: 170
// ─────────────────────────────────────────────────────────────────────────────
type ImmersiveTabData = {
  id: string;
  label: string;
  videoSrc: string;
};

const immersiveTabs: ImmersiveTabData[] = [
  {
    id: "interactive-sales-tour",
    label: "Interactive Sales Tour",
    videoSrc: "https://storage.net-fs.com/hosting/6111279/12/index.htm",
  },
  {
    id: "digital-twin",
    label: "Digital Twin",
    videoSrc: "https://www.youtube.com/embed/E02wLhAMBWs",
  },
  {
    id: "experience-center",
    label: "Experience Center",
    videoSrc:
      "https://drive.google.com/file/d/1W2hf1xqbaxXeBY_IrM7-TNPU57BNa06k/preview",
  },
  {
    id: "ar-vr",
    label: "AR / VR",
    videoSrc: "https://www.youtube.com/embed/sgD8tVOTqsE",
  },
];

const RealEstateMartech = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedExpertiseCategory, setSelectedExpertiseCategory] =
    useState<string>("3D Renders");
  const [currentExpertisePage, setCurrentExpertisePage] = useState<number>(0);
  const [expertiseDirection, setExpertiseDirection] = useState<number>(0);

  // Immersive section state
  const [activeImmersiveTabId, setActiveImmersiveTabId] = useState<string>(
    immersiveTabs[0].id,
  );

  const isMobileViewport =
    typeof window !== "undefined" && window.innerWidth < 768;

  const EXPERTISE_PER_PAGE = isMobileViewport
    ? 1
    : selectedExpertiseCategory === "3D Walkthroughs"
      ? 1
      : 3;
  const AUTO_ROTATE_MS = 4000;

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  const filteredExpertiseItems = expertiseShowcase.filter(
    (item) => item.category === selectedExpertiseCategory,
  );
  const totalExpertisePages = Math.ceil(
    filteredExpertiseItems.length / EXPERTISE_PER_PAGE,
  );
  const canSlideExpertise = totalExpertisePages > 1;

  const handleExpertiseNext = () => {
    if (!canSlideExpertise) return;
    setExpertiseDirection(1);
    setCurrentExpertisePage((prev) => (prev + 1) % totalExpertisePages);
  };

  const handleExpertisePrev = () => {
    if (!canSlideExpertise) return;
    setExpertiseDirection(-1);
    setCurrentExpertisePage(
      (prev) => (prev - 1 + totalExpertisePages) % totalExpertisePages,
    );
  };

  useEffect(() => {
    if (!canSlideExpertise || selectedExpertiseCategory === "3D Walkthroughs") {
      return;
    }

    const timer = window.setInterval(() => {
      setExpertiseDirection(1);
      setCurrentExpertisePage((prev) => (prev + 1) % totalExpertisePages);
    }, AUTO_ROTATE_MS);

    return () => window.clearInterval(timer);
  }, [canSlideExpertise, totalExpertisePages, selectedExpertiseCategory]);

  const expertiseStartIndex = currentExpertisePage * EXPERTISE_PER_PAGE;
  const expertisePageItems = filteredExpertiseItems.slice(
    expertiseStartIndex,
    expertiseStartIndex + EXPERTISE_PER_PAGE,
  );

  // ── Immersive section helpers ──────────────────────────────────────────
  const activeImmersiveTab =
    immersiveTabs.find((t) => t.id === activeImmersiveTabId) ??
    immersiveTabs[0];

  const handleTabSwitch = (tab: ImmersiveTabData) => {
    setActiveImmersiveTabId(tab.id);
  };

  return (
    <>
      <Header />

      {/*
        Hero section — bg image is fixed (position:fixed) while text is visible.
        Once scrolled past the section the bg switches to position:absolute so it
        scrolls away with the page like any other element.
      */}
      <FixedHero
        backgroundImage="/assets/images/martech/Mahindra.png"
        title="Real Estate Mar-Tech"
        mirrored
        description={
          <AnimatedColorText
            whiteText="A leading digital Creative Technology Company, which focuses on delivering rememberable web designs that are search"
            blueText="able, alongside other online promotion solutions in Coventry. We provide our clients with striking, practical, and intuitive sites that attract clientele and yield revenue."
          />
        }
      />

      <section className="w-full min-h-screen bg-theme-secondaryBg1 py-10 md:py-12 px-10 md:px-16 flex flex-col justify-center">
        <h2 className="font-display text-2xl md:text-3xl font-normal text-white/60 mb-8">
          Real Estate Mar-Tech <span className="text-white/50">|</span>{" "}
          <span className="font-bold text-white">Clients</span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <img
              src="https://resonancedigital.in/assets/images/realEstate/Arch-client-logo.png"
              alt="Real Estate Clients"
              className="w-full max-w-[750px] h-auto object-contain opacity-85"
            />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col self-start pb-4">
            {realEstateStatements.map((item, i) => (
              <div key={i}>
                <div className="h-px bg-white/20 w-full" />
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between py-2.5 text-left group"
                >
                  <span className="font-display text-[18px] md:text-[20px] text-white/85 group-hover:text-sky-300 transition-colors duration-200 leading-tight">
                    {item.title}
                  </span>
                  <ChevronDown
                    style={{
                      transform:
                        openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                    className="w-4 h-4 text-white/60 flex-shrink-0 ml-4"
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.5,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      style={{ overflow: "hidden" }}
                    >
                      <p className="text-white/65 text-sm leading-relaxed pb-4 max-w-xl">
                        {item.body}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <div className="h-px bg-white/20 w-full" />
          </div>
        </div>
      </section>

      {/* ── Section 1: Areas of Expertise ─────────────────────────────── */}
      <section className="w-full bg-theme-primaryBg1 pt-16 pb-10 md:pt-20 md:pb-12 px-10 md:px-16">
        <h2 className="font-display text-3xl md:text-4xl font-normal text-white/60 mb-6">
          Real Estate Mar-Tech <span className="text-white/50">|</span>{" "}
          <span className="font-bold text-white">Areas of expertise</span>
        </h2>

        <div className="mt-6 mb-8 w-full max-w-[1700px]">
          <div className="hidden md:flex flex-wrap gap-y-3 text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.1] w-full tracking-tight">
            {expertiseCategories.map((category, index) => (
              <div key={category} className="flex items-center">
                <button
                  onClick={() => {
                    setSelectedExpertiseCategory(category);
                    setCurrentExpertisePage(0);
                  }}
                  className={`transition-colors duration-300 ${
                    selectedExpertiseCategory === category
                      ? "text-[#4ab6ff]"
                      : "text-white/40 hover:text-[#4ab6ff]"
                  }`}
                >
                  {category}
                </button>
                {index < expertiseCategories.length - 1 && (
                  <span className="text-white/30 mx-3 lg:mx-4">|</span>
                )}
              </div>
            ))}
          </div>

          <div className="md:hidden flex items-center overflow-x-auto whitespace-nowrap scrollbar-hide pb-2 text-lg font-bold tracking-tight">
            {expertiseCategories.map((category, index) => (
              <div key={category} className="flex items-center shrink-0">
                <button
                  onClick={() => {
                    setSelectedExpertiseCategory(category);
                    setCurrentExpertisePage(0);
                  }}
                  className={`transition-colors duration-300 ${
                    selectedExpertiseCategory === category
                      ? "text-[#4ab6ff]"
                      : "text-[#f2eee2]/40"
                  }`}
                >
                  {category}
                </button>
                {index < expertiseCategories.length - 1 && (
                  <span className="text-[#f2eee2]/30 mx-3">|</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full">
          <button
            onClick={handleExpertisePrev}
            disabled={!canSlideExpertise}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 z-10 w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 ${
              !canSlideExpertise
                ? "bg-sky-400/10 cursor-not-allowed opacity-50"
                : "bg-sky-400/20 hover:bg-sky-400/40 cursor-pointer"
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div
            className={`relative overflow-hidden px-4 md:px-6 pt-4 ${
              EXPERTISE_PER_PAGE === 1 ? "pb-16" : "pb-4"
            }`}
          >
            <AnimatePresence initial={false} custom={expertiseDirection}>
              <motion.div
                key={`${selectedExpertiseCategory}-${currentExpertisePage}`}
                custom={expertiseDirection}
                initial={{ x: expertiseDirection > 0 ? "100%" : "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: expertiseDirection > 0 ? "-100%" : "100%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className={`absolute inset-4 md:inset-6 grid gap-8 ${
                  EXPERTISE_PER_PAGE === 1
                    ? "grid-cols-1"
                    : "grid-cols-1 md:grid-cols-3"
                }`}
              >
                {expertisePageItems.map((item, index) => (
                  <div
                    key={`${item.title}-${item.subtitle}-${expertiseStartIndex + index}`}
                    className="group flex flex-col cursor-pointer"
                  >
                    <div className="relative bg-[#0b0830] overflow-hidden rounded-none aspect-[16/10] flex items-center justify-center w-full max-w-[1200px] mx-auto">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="max-w-[85%] max-h-[85%] object-contain transition-transform duration-500 group-hover:scale-105"
                      />

                      {item.category === "3D Walkthroughs" && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-20 h-20 rounded-full bg-[#4ab6ff] flex items-center justify-center shadow-[0_0_40px_rgba(74,182,255,0.5)]">
                            <div
                              className="ml-1"
                              style={{
                                width: 0,
                                height: 0,
                                borderTop: "12px solid transparent",
                                borderBottom: "12px solid transparent",
                                borderLeft: "20px solid white",
                              }}
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="mt-4 pb-2 text-[#f2eee2] text-base md:text-lg leading-normal">
                      <span className="font-gotham-bold">Client :</span>{" "}
                      <span>{item.title}</span>
                      <span className="mx-2">|</span>
                      <span className="font-gotham-bold">Service :</span>{" "}
                      <span>{item.category}</span>
                    </div>
                  </div>
                ))}

                {Array.from({
                  length: EXPERTISE_PER_PAGE - expertisePageItems.length,
                }).map((_, index) => (
                  <div
                    key={`placeholder-${index}`}
                    className={
                      EXPERTISE_PER_PAGE === 1
                        ? "aspect-[16/10] min-h-[320px] md:min-h-[520px]"
                        : "aspect-[16/10]"
                    }
                  />
                ))}
              </motion.div>
            </AnimatePresence>
            <div
              className={`grid gap-8 invisible ${
                EXPERTISE_PER_PAGE === 1
                  ? "grid-cols-1"
                  : "grid-cols-1 md:grid-cols-3"
              }`}
            >
              {Array(EXPERTISE_PER_PAGE)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className={
                      EXPERTISE_PER_PAGE === 1
                        ? "aspect-[16/10] min-h-[320px] md:min-h-[520px]"
                        : "aspect-[16/10]"
                    }
                  ></div>
                ))}
            </div>
          </div>

          <button
            onClick={handleExpertiseNext}
            disabled={!canSlideExpertise}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 z-10 w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 ${
              !canSlideExpertise
                ? "bg-sky-400/10 cursor-not-allowed opacity-50"
                : "bg-sky-400/20 hover:bg-sky-400/40 cursor-pointer"
            }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* ── Section 2: Immersive Technology Solutions ─────────────────── */}
      <section className="w-full bg-theme-secondaryBg1 py-14 md:py-16">
        <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-10 lg:px-0">
          {/* Section header */}
          <h2 className="font-display text-3xl sm:text-4xl md:text-[44px] font-normal text-white/60 mb-10">
            Real Estate Mar-Tech <span className="text-white/50">|</span>{" "}
            <span className="font-bold text-white">
              Immersive Technology Solutions
            </span>
          </h2>

          {/* Tab bar — 2×2 on mobile, 4 across on md+ */}
          <div className="w-full grid grid-cols-2 md:grid-cols-4 mb-12">
            {immersiveTabs.map((tab, idx) => {
              const isActive = tab.id === activeImmersiveTabId;
              const mobileRightBorder = idx % 2 === 0 ? "border-r" : "";
              const desktopRightBorder =
                idx < immersiveTabs.length - 1 ? "md:border-r" : "";
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabSwitch(tab)}
                  className={`py-[18px] px-4 text-center font-display font-bold text-[14px] sm:text-[15px] md:text-[17px] tracking-wide transition-all duration-200 border-[#d0cfc8] ${
                    idx < 2 ? "border-b md:border-b-0" : ""
                  } ${mobileRightBorder} ${desktopRightBorder} ${
                    isActive
                      ? "bg-[#4ab6ff] text-white"
                      : "bg-[#f6f5ee] text-[#58595b] hover:bg-[#ebebdf]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Content: video full width below tab bar */}
          <div className="w-full">
            <div className="relative w-full aspect-video bg-black overflow-hidden rounded-lg">
              <iframe
                src={activeImmersiveTab.videoSrc}
                title={activeImmersiveTab.label}
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <Footer theme="dark" />
    </>
  );
};

export default RealEstateMartech;
