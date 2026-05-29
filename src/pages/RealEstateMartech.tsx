import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimatedColorText from "../components/AnimatedColorText";

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
  "Films Interactive Sales Tour",
  "Digital Twin",
  "3D Anamorphic Experience Center",
  "Virtual Reality",
  "Augmented Reality",
];

type ExpertiseShowcaseItem = {
  title: string;
  subtitle: string;
  image: string;
  category: string;
};

const expertiseShowcase: ExpertiseShowcaseItem[] = [
  {
    title: "Lodha Altamount",
    subtitle: "Lorem ipsum",
    image: "/assets/images/movies/movies_01.png",
    category: "3D Walkthroughs",
  },
  {
    title: "Vraj Group",
    subtitle: "Lorem ipsum",
    image: "/assets/images/movies/dune.jpeg",
    category: "3D Walkthroughs",
  },
  {
    title: "DA Group",
    subtitle: "Lorem ipsum",
    image: "/assets/images/movies/flash.jpg",
    category: "3D Walkthroughs",
  },
  {
    title: "Sattva",
    subtitle: "Lorem ipsum",
    image: "/assets/images/movies/avatar.jpeg",
    category: "3D Renders",
  },
  {
    title: "Brigade",
    subtitle: "Lorem ipsum",
    image: "/assets/images/movies/batman.png",
    category: "Drone Shots",
  },
  {
    title: "Atmos",
    subtitle: "Lorem ipsum",
    image: "/assets/images/movies/movies_03.png",
    category: "Films Interactive Sales Tour",
  },
  {
    title: "LOREM IPSUM",
    subtitle: "2D Isometrics",
    image: "/assets/images/movies/movies_01.png",
    category: "2D & 3D Isometrics",
  },
  {
    title: "LOREM IPSUM",
    subtitle: "2D Isometrics",
    image: "/assets/images/movies/movies_03.png",
    category: "2D & 3D Isometrics",
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
type FeatureSegment = {
  label: string;
  title: string;
  description: string;
  start: number; // seconds from video start
  end: number; // seconds from video start
};

type ImmersiveTabData = {
  id: string;
  label: string;
  videoSrc: string;
  segments: FeatureSegment[];
};

const immersiveTabs: ImmersiveTabData[] = [
  {
    id: "interactive-sales-tour",
    label: "Interactive Sales Tour",
    videoSrc: "/assets/videos/placeholder_video.mp4",
    // ── EDIT TIMESTAMPS HERE for Interactive Sales Tour ──────────────────
    segments: [
      {
        label: "Architectural",
        title: "Architectural",
        description:
          "Explore the architectural language of the project — form, facades, and structural intent brought to life.",
        start: 0,
        end: 28,
      },
      {
        label: "Weather Control",
        title: "Weather Control",
        description:
          "Simulate real-world weather conditions across the site to understand sunlight, wind, and seasonal experience.",
        start: 29,
        end: 58,
      },
      {
        label: "Interior Design",
        title: "Interior Design",
        description:
          "Step inside curated interiors — material palettes, spatial proportions, and finish quality showcased in full detail.",
        start: 59,
        end: 88,
      },
      {
        label: "Amenities",
        title: "Amenities",
        description:
          "Discover the full range of amenities and community spaces that enhance the living experience.",
        start: 89,
        end: 118,
      },
      {
        label: "Views",
        title: "Views",
        description:
          "Experience panoramic views from every tower, floor, and vantage point across the development.",
        start: 135,
        end: 170,
      },
      {
        label: "Surrounding",
        title: "Surrounding",
        description:
          "Understand the neighborhood context — connectivity, landmarks, and the urban fabric surrounding the project.",
        start: 171,
        end: 180,
      },
    ],
  },
  {
    id: "digital-twin",
    label: "Digital Twin",
    videoSrc: "/assets/videos/placeholder_video.mp4",
    // ── EDIT TIMESTAMPS HERE for Digital Twin ────────────────────────────
    segments: [
      {
        label: "Architectural",
        title: "Architectural",
        description:
          "A live digital replica of the project's architecture — updated in real-time as the structure evolves.",
        start: 0,
        end: 28,
      },
      {
        label: "Weather Control",
        title: "Weather Control",
        description:
          "Dynamic weather simulation integrated with the digital twin for environmental analysis.",
        start: 29,
        end: 58,
      },
      {
        label: "Interior Design",
        title: "Interior Design",
        description:
          "Interior layouts mirrored digitally for real-time planning, staging, and customisation.",
        start: 59,
        end: 88,
      },
      {
        label: "Amenities",
        title: "Amenities",
        description:
          "Monitor amenity usage, capacity, and condition through a connected digital twin layer.",
        start: 89,
        end: 118,
      },
      {
        label: "Views",
        title: "Views",
        description:
          "Real-time view analysis from any point in the digital model.",
        start: 135,
        end: 170,
      },
      {
        label: "Surrounding",
        title: "Surrounding",
        description:
          "Geo-anchored surroundings layer for infrastructure and context planning.",
        start: 171,
        end: 180,
      },
    ],
  },
  {
    id: "experience-center",
    label: "Experience Center",
    videoSrc: "/assets/videos/placeholder_video.mp4",
    // ── EDIT TIMESTAMPS HERE for Experience Center ───────────────────────
    segments: [
      {
        label: "Architectural",
        title: "Architectural",
        description:
          "Immersive architectural walkthroughs projected at scale for high-impact sales center presentations.",
        start: 0,
        end: 28,
      },
      {
        label: "Weather Control",
        title: "Weather Control",
        description:
          "Real-time weather overlays displayed across large-format projection surfaces.",
        start: 29,
        end: 58,
      },
      {
        label: "Interior Design",
        title: "Interior Design",
        description:
          "Life-size interior mock-ups enhanced with digital projection mapping for material and finish exploration.",
        start: 59,
        end: 88,
      },
      {
        label: "Amenities",
        title: "Amenities",
        description:
          "Interactive amenity tours delivered through the experience center environment.",
        start: 89,
        end: 118,
      },
      {
        label: "Views",
        title: "Views",
        description:
          "Panoramic view simulations projected across multi-screen setups for full spatial immersion.",
        start: 135,
        end: 170,
      },
      {
        label: "Surrounding",
        title: "Surrounding",
        description:
          "Neighbourhood and connectivity context visuals for experience-center-led buyer journeys.",
        start: 171,
        end: 180,
      },
    ],
  },
  {
    id: "ar-vr",
    label: "AR / VR",
    videoSrc: "/assets/videos/placeholder_video.mp4",
    // ── EDIT TIMESTAMPS HERE for AR / VR ─────────────────────────────────
    segments: [
      {
        label: "Architectural",
        title: "Architectural",
        description:
          "Walk through architectural spaces in full virtual reality before a single brick is laid.",
        start: 0,
        end: 28,
      },
      {
        label: "Weather Control",
        title: "Weather Control",
        description:
          "Switch weather conditions inside the VR environment to experience the project across seasons.",
        start: 29,
        end: 58,
      },
      {
        label: "Interior Design",
        title: "Interior Design",
        description:
          "Swap materials, finishes, and furniture in real-time within a fully immersive VR interior.",
        start: 59,
        end: 88,
      },
      {
        label: "Amenities",
        title: "Amenities",
        description:
          "Experience every amenity space in immersive VR — pool, gym, clubhouse, and more.",
        start: 89,
        end: 118,
      },
      {
        label: "Views",
        title: "Views",
        description:
          "Stand on any balcony or terrace and experience the exact view in VR before purchase.",
        start: 135,
        end: 170,
      },
      {
        label: "Surrounding",
        title: "Surrounding",
        description:
          "Explore the surrounding neighbourhood in AR — roads, landmarks, and connectivity overlaid on the real world.",
        start: 171,
        end: 180,
      },
    ],
  },
];

const RealEstateMartech = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedExpertiseCategory, setSelectedExpertiseCategory] =
    useState<string>("3D Walkthroughs");
  const [currentExpertisePage, setCurrentExpertisePage] = useState<number>(0);
  const [expertiseDirection, setExpertiseDirection] = useState<number>(0);

  // Immersive section state
  const [activeImmersiveTabId, setActiveImmersiveTabId] = useState<string>(
    immersiveTabs[0].id,
  );
  const [activeSegment, setActiveSegment] = useState<FeatureSegment>(
    immersiveTabs[0].segments[0], // default: "Architectural"
  );
  const immersiveVideoRef = useRef<HTMLVideoElement>(null);
  const immersiveSectionRef = useRef<HTMLElement>(null);
  const [isImmersiveInView, setIsImmersiveInView] = useState<boolean>(false);
  const [isPageVisible, setIsPageVisible] = useState<boolean>(true);

  const EXPERTISE_PER_PAGE = 3;
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
    if (!canSlideExpertise) return;

    const timer = window.setInterval(() => {
      setExpertiseDirection(1);
      setCurrentExpertisePage((prev) => (prev + 1) % totalExpertisePages);
    }, AUTO_ROTATE_MS);

    return () => window.clearInterval(timer);
  }, [canSlideExpertise, totalExpertisePages]);

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
    const defaultSegment = tab.segments[0];
    setActiveSegment(defaultSegment);
  };

  const handleSegmentClick = (segment: FeatureSegment) => {
    setActiveSegment(segment);
  };

  const getValidSegmentWindow = (
    video: HTMLVideoElement,
    segment: FeatureSegment,
  ) => {
    const duration = video.duration;
    if (!Number.isFinite(duration) || duration <= 0) return null;

    // Fallback safely to full video if configured segment is invalid/out-of-range.
    if (segment.start >= duration || segment.end <= segment.start) {
      return { start: 0, end: duration };
    }

    const start = Math.max(0, Math.min(segment.start, duration - 0.1));
    const end = Math.min(segment.end, duration);

    // Avoid microscopic loop windows near EOF that can thrash seeks.
    if (end - start < 0.25) {
      return { start: 0, end: duration };
    }

    return { start, end };
  };

  useEffect(() => {
    const handleVisibilityChange = () => setIsPageVisible(!document.hidden);
    handleVisibilityChange();
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  useEffect(() => {
    const section = immersiveSectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsImmersiveInView(
          entry.isIntersecting && entry.intersectionRatio >= 0.35,
        );
      },
      { threshold: [0, 0.35, 0.6] },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = immersiveVideoRef.current;
    if (!video) return;
    const shouldPlay = isImmersiveInView && isPageVisible;

    if (!shouldPlay) {
      video.pause();
      return;
    }

    const seekAndPlaySegment = () => {
      const segmentWindow = getValidSegmentWindow(video, activeSegment);
      if (!segmentWindow) return;

      if (
        video.currentTime < segmentWindow.start ||
        video.currentTime >= segmentWindow.end
      ) {
        video.currentTime = segmentWindow.start;
      }

      if (video.paused) {
        void video.play().catch(() => undefined);
      }
    };

    if (video.readyState >= 1) {
      seekAndPlaySegment();
      return;
    }

    video.addEventListener("loadedmetadata", seekAndPlaySegment);
    return () =>
      video.removeEventListener("loadedmetadata", seekAndPlaySegment);
  }, [
    activeSegment,
    activeImmersiveTab.videoSrc,
    isImmersiveInView,
    isPageVisible,
  ]);

  // Loops the video within the active segment's window
  const handleImmersiveTimeUpdate = () => {
    const video = immersiveVideoRef.current;
    if (!video || !isImmersiveInView || !isPageVisible) return;

    const segmentWindow = getValidSegmentWindow(video, activeSegment);
    if (!segmentWindow) return;

    if (
      video.currentTime >= segmentWindow.end ||
      video.currentTime < segmentWindow.start
    ) {
      video.currentTime = segmentWindow.start;
    }
  };

  const handleImmersiveEnded = () => {
    const video = immersiveVideoRef.current;
    if (!video) return;

    if (!isImmersiveInView || !isPageVisible) {
      video.pause();
      return;
    }

    const segmentWindow = getValidSegmentWindow(video, activeSegment);
    if (!segmentWindow) return;

    video.currentTime = segmentWindow.start;
    void video.play().catch(() => undefined);
  };

  return (
    <>
      <Header />

      <section
        className="
    relative
    w-full
    min-h-screen
    flex
    flex-col
    justify-center
    px-6
    md:px-12
    lg:px-24
    py-24
    overflow-hidden
  "
      >
        <div
          className="
    absolute
    inset-0
    bg-[url('/assets/images/martech/Mahindra.png')]
    bg-cover
    bg-center
    bg-no-repeat
    scale-x-[-1]
  "
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 max-w-6xl w-full mt-20">
          <h1 className="font-display text-[65px] md:text-[75px] lg:text-[85px] font-bold text-[#4ab6ff] mb-10 leading-tight">
            Real Estate Mar-Tech
          </h1>

          <AnimatedColorText
            whiteText="A leading digital Creative Technology Company, which focuses on delivering rememberable web designs that are search"
            blueText="able, alongside other online promotion solutions in Coventry. We provide our clients with striking, practical, and intuitive sites that attract clientele and yield revenue."
          />
        </div>
      </section>

      {/* Video player section */}
      <section className="relative w-full h-screen overflow-hidden">
        <video
          src="/assets/videos/placeholder_video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/20" />

        <h2 className="absolute top-[24%] left-10 md:left-16 font-display text-5xl md:text-6xl lg:text-7xl font-bold text-[#4ab6ff]">
          Real Estate Mar-Tech
        </h2>
      </section>

      <section className="w-full min-h-screen bg-[#100a44] py-10 md:py-12 px-10 md:px-16 flex flex-col justify-center">
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
      <section className="w-full bg-[#080032] pt-16 pb-10 md:pt-20 md:pb-12 px-10 md:px-16">
        <h2 className="font-display text-3xl md:text-4xl font-normal text-white/60 mb-6">
          Real Estate Mar-Tech <span className="text-white/50">|</span>{" "}
          <span className="font-bold text-white">Areas of expertise</span>
        </h2>

        <div className="mt-6 mb-8 max-w-6xl">
          <div className="flex flex-wrap gap-4 text-xl md:text-2xl font-semibold">
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
                  <span className="text-white/30 mx-3">|</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full">
          <button
            onClick={handleExpertisePrev}
            disabled={!canSlideExpertise}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 ${
              !canSlideExpertise
                ? "bg-sky-400/10 cursor-not-allowed opacity-50"
                : "bg-sky-400/20 hover:bg-sky-400/40 cursor-pointer"
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="relative overflow-hidden">
            <AnimatePresence initial={false} custom={expertiseDirection}>
              <motion.div
                key={`${selectedExpertiseCategory}-${currentExpertisePage}`}
                custom={expertiseDirection}
                initial={{ x: expertiseDirection > 0 ? "100%" : "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: expertiseDirection > 0 ? "-100%" : "100%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 absolute inset-0"
              >
                {expertisePageItems.map((item, index) => (
                  <div
                    key={`${item.title}-${item.subtitle}-${expertiseStartIndex + index}`}
                    className="group relative h-[240px] md:h-[300px] lg:h-[360px] rounded-xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-[1.03]"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-all duration-500" />

                    <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 flex flex-col justify-end">
                      <p className="text-white font-display font-bold text-xl md:text-2xl leading-tight tracking-wide uppercase">
                        {item.title}
                      </p>
                      <p className="mt-2 text-[#4ab6ff] text-sm md:text-base uppercase tracking-[0.14em]">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                ))}

                {Array.from({
                  length: EXPERTISE_PER_PAGE - expertisePageItems.length,
                }).map((_, index) => (
                  <div
                    key={`placeholder-${index}`}
                    className="h-[240px] md:h-[300px] lg:h-[360px]"
                  />
                ))}
              </motion.div>
            </AnimatePresence>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 invisible">
              {Array(EXPERTISE_PER_PAGE)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="h-[240px] md:h-[300px] lg:h-[360px]"
                  ></div>
                ))}
            </div>
          </div>

          <button
            onClick={handleExpertiseNext}
            disabled={!canSlideExpertise}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 ${
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
      <section
        ref={immersiveSectionRef}
        className="w-full bg-[#080032] py-14 md:py-16"
      >
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

          {/* Content: stacked on mobile, side-by-side on lg */}
          <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8">
            {/* ── Left column: segment buttons + info ── */}
            <div className="w-full lg:w-[26%] flex-shrink-0 flex flex-col">
              {/* On mobile: buttons in a 2-col grid; on lg: vertical stack */}
              <div className="w-full lg:max-w-[220px] grid grid-cols-2 lg:grid-cols-1 gap-[6px]">
                {activeImmersiveTab.segments.map((seg) => {
                  const isActive = seg.label === activeSegment.label;
                  return (
                    <button
                      key={seg.label}
                      onClick={() => handleSegmentClick(seg)}
                      className={`w-full text-center px-4 py-3 font-display text-[15px] sm:text-[16px] font-semibold transition-all duration-150 ${
                        isActive
                          ? "bg-[#f6f5ee]"
                          : "bg-[#58595b] hover:bg-[#66676a]"
                      }`}
                      style={{
                        color: isActive ? "#58595b" : "rgba(210,210,230,0.85)",
                      }}
                    >
                      {seg.label}
                    </button>
                  );
                })}
              </div>

              {/* Active segment info */}
              <div className="mt-8 max-w-[360px]">
                <p className="font-display font-extrabold text-white text-[17px] sm:text-[20px] mb-2 leading-tight">
                  {activeSegment.title}
                </p>
                <p className="font-medium text-white/50 text-[13px] sm:text-[14px] leading-snug">
                  {activeSegment.description}
                </p>
              </div>
            </div>

            {/* ── Right column: 16:9 video ── */}
            <div className="w-full lg:w-[74%] min-w-0">
              <div className="relative w-full aspect-video bg-black overflow-hidden">
                <video
                  ref={immersiveVideoRef}
                  src={activeImmersiveTab.videoSrc}
                  className="w-full h-full object-cover"
                  onTimeUpdate={handleImmersiveTimeUpdate}
                  onEnded={handleImmersiveEnded}
                  muted
                  preload="metadata"
                  playsInline
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer theme="light" />
    </>
  );
};

export default RealEstateMartech;
