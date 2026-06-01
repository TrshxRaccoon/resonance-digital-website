import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimatedColorText from "../components/AnimatedColorText";
import FixedHero from "../components/FixedHero";
import { ChevronDown, ChevronLeft, ChevronRight, Play, X } from "lucide-react";

type BrandShowcaseItem = {
  title: string;
  image: string;
  caseStudyImage?: string;
  galleryImages?: string[];
  client: string;
  year: string;
  service: string;
  objective?: string;
  videoSrc?: string;
  youtubeEmbedUrl?: string;
  videoTitle?: string;
  videoSubtitle?: string;
  videoHighlight?: string;
  videoFooter?: string;
};

type TVCShowcaseItem = {
  title: string;
  image: string;
  client: string;
  year: string;
  youtubeEmbedUrl: string;
};

const brandShowcase: BrandShowcaseItem[] = [
  {
    title: "ICICI Lombard",
    image: "/assets/images/BrandStatements/ICICI-Lombard.jpg",
    client: "ICICI Lombard",
    year: "2018",
    service: "Film Production & Campaign",
    objective:
      "Digital content to drive engagement and brand recall across insurance touchpoints — concept to final delivery.",
    videoSrc: "/assets/videos/ads.mp4",
    videoTitle: "ICICI LOMBARD",
    videoSubtitle: "Insurance for Every Moment",
    videoHighlight: "8M+ Reached",
    videoFooter: "Concept to Final Delivery",
  },
  {
    title: "ICICI Lombard",
    image: "/assets/images/BrandStatements/images.jpeg",
    client: "ICICI Lombard",
    year: "2018",
    service: "Social Media Management",
    objective:
      "Sustained social media presence and content calendar management for quarterly campaigns.",
  },
  {
    title: "Bharti AXA",
    image: "/assets/images/BrandStatements/bhartiAXA.jpg",
    client: "Bharti AXA",
    year: "2024",
    service: "Pre to Post Production",
    objective:
      "End-to-end production of a branded film across digital platforms to drive emotional brand connection.",
    videoSrc: "/assets/videos/movies.mp4",
    videoTitle: "BHARTI AXA",
    videoSubtitle: "Hum Kaise Maan Le",
    videoHighlight: "10M+ Reached",
    videoFooter: "Pre to Post Production",
  },
  {
    title: "Morde",
    image: "/assets/images/BrandStatements/morde.jpg",
    client: "Morde",
    year: "2024",
    service: "Launch New Packaging",
    objective:
      "Digital content to drive engagement and increase footfalls for the brand at Bakery Business South, Hyderabad.",
  },
  {
    title: "Travel + Leisure",
    image: "/assets/images/BrandStatements/T+L.jpg",
    client: "Travel + Leisure",
    year: "2024",
    service: "Original Content & Copywriting",
    objective:
      "Crafting destination-led editorial content and visual storytelling for the Travel + Leisure India brand.",
  },
  {
    title: "Oppo",
    image: "/assets/images/BrandStatements/oppo.png",
    client: "Oppo",
    year: "2024",
    service: "Video Editing & Animation",
    objective:
      "Product launch video editing and motion graphics for digital-first distribution across platforms.",
    videoSrc: "/assets/videos/placeholder_video.mp4",
    videoTitle: "OPPO",
    videoSubtitle: "Future Tech Stories",
    videoHighlight: "6M+ Reached",
    videoFooter: "Editing and Delivery",
  },
  {
    title: "ICICI Lombard - Campus Cut",
    image: "/assets/images/BrandStatements/ICICI-Lombard.jpg",
    client: "ICICI Lombard",
    year: "2019",
    service: "Campaign Planning",
    objective:
      "Campus-focused insurance awareness campaign targeting young professionals and graduates.",
  },
  {
    title: "ICICI Lombard - Elevate",
    image: "/assets/images/BrandStatements/images.jpeg",
    client: "ICICI Lombard",
    year: "2020",
    service: "Graphic Design & Illustration",
    objective:
      "A refreshed design language for the Elevate product line across digital and print touchpoints.",
  },
  {
    title: "Bharti AXA - Secure Living",
    image: "/assets/images/BrandStatements/bhartiAXA.jpg",
    client: "Bharti AXA",
    year: "2023",
    service: "Script to Post",
    objective:
      "Full campaign production from scripting to post — driving 4M+ views across digital platforms.",
    videoSrc: "/assets/videos/movies.mp4",
    videoTitle: "BHARTI AXA",
    videoSubtitle: "Secure Living Campaign",
    videoHighlight: "4M+ Reached",
    videoFooter: "Script to Post",
  },
  {
    title: "Morde - Festive Pack",
    image: "/assets/images/BrandStatements/morde.jpg",
    client: "Morde",
    year: "2025",
    service: "Print, OOH & Mainline Advertising",
    objective:
      "Festive packaging campaign designed for in-store visibility and regional distribution across bakery trade shows.",
  },
  {
    title: "Travel + Leisure - Goa Edit",
    image: "/assets/images/BrandStatements/T+L.jpg",
    client: "Travel + Leisure",
    year: "2025",
    service: "Original Content & Copywriting",
    objective:
      "A special destination edit on Goa — photo essays, reels, and editorial copy for digital and print.",
  },
  {
    title: "Oppo - Future Assistant",
    image: "/assets/images/BrandStatements/oppo.png",
    client: "Oppo",
    year: "2023",
    service: "Pre to Post Production",
    objective:
      "Campaign production for Oppo's AI assistant feature — scripted, shot, and delivered for digital platforms.",
    videoSrc: "/assets/videos/ads.mp4",
    videoTitle: "OPPO",
    videoSubtitle: "Future Assistant",
    videoHighlight: "5M+ Reached",
    videoFooter: "Pre to Post Production",
  },
  {
    title: "ICICI Lombard - Digital Drive",
    image: "/assets/images/BrandStatements/ICICI-Lombard.jpg",
    client: "ICICI Lombard",
    year: "2025",
    service: "Social Media Management",
    objective:
      "Sustained digital-first campaign to drive insurance policy renewals and brand affinity across social platforms.",
  },
];

const tvcShowcaseVideoEmbeds = [
  "https://www.youtube.com/embed/rLzbIqI1VrU",
  "https://www.youtube.com/embed/mn7WMlnyWnQ",
  "https://www.youtube.com/embed/KBwcwjQDjEE",
  "https://www.youtube.com/embed/8jUa_imL-DI",
  "https://www.youtube.com/embed/RbtCvfX4n_I",
  "https://www.youtube.com/embed/87CuOfwFpd0",
];

const tvcShowcase: TVCShowcaseItem[] = [
  {
    title: "School Promise",
    image: "/assets/images/BrandStatements/ICICI-Lombard.jpg",
    client: "ICICI Lombard",
    year: "2018",
    youtubeEmbedUrl: tvcShowcaseVideoEmbeds[0],
  },
  {
    title: "Neck Brace",
    image: "/assets/images/BrandStatements/images.jpeg",
    client: "ICICI Lombard",
    year: "2018",
    youtubeEmbedUrl: tvcShowcaseVideoEmbeds[1],
  },
  {
    title: "Hum Kaise Maan Le",
    image: "/assets/images/BrandStatements/bhartiAXA.jpg",
    client: "BHARTI AXA",
    year: "2024",
    youtubeEmbedUrl: tvcShowcaseVideoEmbeds[2],
  },
  {
    title: "GumOn Groove",
    image: "/assets/images/movies/movies_03.png",
    client: "GumOn Groove",
    year: "2018",
    youtubeEmbedUrl: tvcShowcaseVideoEmbeds[3],
  },
  {
    title: "STPI Campaign",
    image: "/assets/images/movies/movies_02Witches.png",
    client: "STPI",
    year: "2018",
    youtubeEmbedUrl: tvcShowcaseVideoEmbeds[4],
  },
  {
    title: "Future Tech Stories",
    image: "/assets/images/BrandStatements/oppo.png",
    client: "OPPO",
    year: "2024",
    youtubeEmbedUrl: tvcShowcaseVideoEmbeds[5],
  },
  {
    title: "Ultrabike",
    image: "/assets/images/movies/dune.jpeg",
    client: "Calamus One - Ultrabike",
    year: "2019",
    youtubeEmbedUrl: tvcShowcaseVideoEmbeds[0],
  },
  {
    title: "XUV 500",
    image: "/assets/images/movies/flash.jpg",
    client: "Mahindra XUV 500",
    year: "2018",
    youtubeEmbedUrl: tvcShowcaseVideoEmbeds[1],
  },
  {
    title: "Playback",
    image: "/assets/images/movies/strangerThings.jpg",
    client: "Netflix India Playback",
    year: "2021",
    youtubeEmbedUrl: tvcShowcaseVideoEmbeds[2],
  },
  {
    title: "Playback Mood",
    image: "/assets/images/movies/avatar.jpeg",
    client: "Netflix Playback",
    year: "2022",
    youtubeEmbedUrl: tvcShowcaseVideoEmbeds[3],
  },
  {
    title: "Playback 2023",
    image: "/assets/images/movies/batman.png",
    client: "Netflix India Playback",
    year: "2023",
    youtubeEmbedUrl: tvcShowcaseVideoEmbeds[4],
  },
  {
    title: "Break Time",
    image: "/assets/images/movies/movies_01.png",
    client: "KitKat",
    year: "2024",
    youtubeEmbedUrl: tvcShowcaseVideoEmbeds[5],
  },
  {
    title: "TUV 300",
    image: "/assets/images/movies/movies_03.png",
    client: "Mahindra TUV 300",
    year: "2018",
    youtubeEmbedUrl: tvcShowcaseVideoEmbeds[0],
  },
  {
    title: "Marazzo",
    image: "/assets/images/movies/dune.jpeg",
    client: "Mahindra Marazzo",
    year: "2018",
    youtubeEmbedUrl: tvcShowcaseVideoEmbeds[1],
  },
  {
    title: "Alturas G4",
    image: "/assets/images/movies/flash.jpg",
    client: "Mahindra Alturas G4",
    year: "2018",
    youtubeEmbedUrl: tvcShowcaseVideoEmbeds[2],
  },
];

const brandStatements = [
  {
    title: "Social Media Management",
    body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
  {
    title: "Original Content and Copywriting",
    body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
  {
    title: "Print, OOH, Mainline Advertising",
    body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
  {
    title: "New Brand Launch and Rebranding",
    body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
  {
    title: "Graphic Design, Iconography and Illustration",
    body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
  {
    title: "Video Editing and Animation",
    body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
  {
    title: "Film Production, Avs and Product Photography",
    body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
  {
    title: "Campaign Planning",
    body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
];

const caseStudyShowcase: BrandShowcaseItem[] = [
  {
    title: "MORDE",
    image: "/assets/images/CaseStudies/Morde-58.jpg",
    caseStudyImage: "/assets/images/CaseStudies/Morde-56.jpg",
    galleryImages: [
        "assets/images/CaseStudies/Morde-49.jpg",
        "assets/images/CaseStudies/Morde-50.jpg",
        "assets/images/CaseStudies/Morde-51.jpg",
        "assets/images/CaseStudies/Morde-52.jpg",
        "assets/images/CaseStudies/Morde-53.jpg",
        "assets/images/CaseStudies/Morde-54.jpg",
        "assets/images/CaseStudies/Morde-55.jpg",
        "assets/images/CaseStudies/Morde-57.jpg",
        "assets/images/CaseStudies/Morde-59.jpg",
    ],
    client: "MORDE",
    year: "2025",
    service: "Launch New Packaging",
    objective: "Digital content to drive engagement and increase footfalls for the brand at Bakery Business South, Hyderabad with emailers, videos, e-brochures, Insta reels, posts, and carousels.",
  },
  {
    title: "TRAVEL + LEISURE",
    image: "/assets/images/CaseStudies/travel1.png",
    caseStudyImage: "/assets/images/CaseStudies/travel-leisure.jpg",
    client: "TRAVEL + LEISURE",
    year: "2024",
    service: "Original Content & Copywriting",
  },
  {
    title: "CONOSH",
    image: "/assets/images/CaseStudies/conosh-1.png",
    caseStudyImage: "/assets/images/CaseStudies/for\ website-23.png",
    galleryImages: [
        "/assets/images/CaseStudies/for\ website-23.png",
        "/assets/images/CaseStudies/for\ website-20.png",
        "/assets/images/CaseStudies/for\ website-21.png",
        "/assets/images/CaseStudies/for\ website-22.png",
        "/assets/images/CaseStudies/for\ website-24.png",
        "/assets/images/CaseStudies/for\ website-25.png",
    ],
    client: "CONOSH",
    year: "2025",
    service: "Brand Solutions",
  },
  {
    title: "OPPO",
    image: "/assets/images/CaseStudies/oppo-1.png",
    caseStudyImage: "/assets/images/CaseStudies/oppo-1.png",
    galleryImages: [
        "/assets/images/CaseStudies/oppo-1.png",
        "/assets/images/CaseStudies/oppo-2.png",
        "/assets/images/CaseStudies/oppo-3.png",
    ],
    client: "OPPO",
    year: "2024",
    service: "Video Editing & Animation",
  },
  {
    title: "Mahindra XUV 500",
    image: "/assets/images/CaseStudies/mahindra1.png",
    caseStudyImage: "/assets/images/CaseStudies/mahindra1.png",
    galleryImages: [
        "/assets/images/CaseStudies/for\ website-31.png",
        "/assets/images/CaseStudies/for\ website-32.png",
        "/assets/images/CaseStudies/for\ website-33.png",
        "/assets/images/CaseStudies/for\ website-34.png",
        "/assets/images/CaseStudies/for\ website-35.png",
        "/assets/images/CaseStudies/for\ website-36.png",
    ],
    client: "Mahindra XUV 500",
    year: "2018",
    service: "Campaign Production",
  },
  {
    title: "Vraj Group",
    image: "/assets/images/CaseStudies/Vraj_meridian.png",
    caseStudyImage: "/assets/images/CaseStudies/Vraj_meridian.png",
    galleryImages: [
        "/assets/images/CaseStudies/Vraj_meridian.png",
        "/assets/images/CaseStudies/Vraj-meridian-logo.png",
        "/assets/images/CaseStudies/2.png",
        "/assets/images/CaseStudies/3-1.png",
        "/assets/images/CaseStudies/4.png",
        "/assets/images/CaseStudies/5.png",

    ],
    client: "Vraj Group",
    year: "2024",
    service: "Brand Campaign",
  },
  {
    title: "Estuary",
    image: "/assets/images/CaseStudies/estuary1.png",
    caseStudyImage: "/assets/images/CaseStudies/estuary1.png",
    galleryImages: [
        "/assets/images/CaseStudies/estuary1.png",
        "/assets/images/CaseStudies/for\ website-27.png",
        "/assets/images/CaseStudies/for\ website-26.png",
        "/assets/images/CaseStudies/for\ website-28.png",
    ],
    client: "Estuary",
    year: "2020",
    service: "Digital Marketing",
  },
  {
    title: "Calamus One - Ultrabike",
    image: "/assets/images/CaseStudies/calamus1.png",
    caseStudyImage: "/assets/images/CaseStudies/calamus1.png",
    galleryImages: [
        "assets/images/CaseStudies/calamus1.png",
        "assets/images/CaseStudies/1.png",
        "assets/images/CaseStudies/2.png",
    ],
    client: "Calamus One - Ultrabike",
    year: "2019",
    service: "Brand Film",
  },
  {
    title: "Puravankara",
    image: "/assets/images/CaseStudies/p5.png",
    caseStudyImage: "/assets/images/CaseStudies/p5.png",
    galleryImages: [
        "assets/images/CaseStudies/p5.png",
        "assets/images/CaseStudies/p1.jpeg",
        "assets/images/CaseStudies/p2.png",
        "assets/images/CaseStudies/p3.png",
        "assets/images/CaseStudies/p4.png",
    ],
    client: "Puravankara",
    year: "2022",
    service: "Real Estate Marketing",
  },
  {
    title: "Elegant Builders & Developers",
    image: "/assets/images/CaseStudies/elegant1.png",
    caseStudyImage: "/assets/images/CaseStudies/elegant1.png",
    galleryImages: [
        "assets/images/CaseStudies/elegant1.png",
        "assets/images/CaseStudies/elegant2.png",
        "assets/images/CaseStudies/elegant3.png",
        "assets/images/CaseStudies/elegant4.png",
    ],
    client: "Elegant Builders & Developers",
    year: "2024",
    service: "Brand Solutions",
  },
];

const BrandSolutions = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCaseStudyIndex, setActiveCaseStudyIndex] = useState<
    number | null
  >(null);
  const [activeShowcaseVideoUrl, setActiveShowcaseVideoUrl] = useState<
    string | null
  >(null);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const activeCaseStudy =
    activeCaseStudyIndex !== null
      ? caseStudyShowcase[activeCaseStudyIndex]
      : null;

  const openCaseStudy = (index: number) => {
    setActiveCaseStudyIndex(index);
    setGalleryIndex(0);
  };

  const closeCaseStudy = () => setActiveCaseStudyIndex(null);

  const prevGalleryImage = () => {
    if (!activeCaseStudy?.galleryImages?.length) return;
    setGalleryIndex(
      (galleryIndex - 1 + activeCaseStudy.galleryImages.length) %
        activeCaseStudy.galleryImages.length,
    );
  };

  const nextGalleryImage = () => {
    if (!activeCaseStudy?.galleryImages?.length) return;
    setGalleryIndex(
      (galleryIndex + 1) % activeCaseStudy.galleryImages.length,
    );
  };

  const openShowcaseVideoModal = (youtubeEmbedUrl: string) => {
    setActiveShowcaseVideoUrl(youtubeEmbedUrl);
  };

  const closeShowcaseVideoModal = () => {
    setActiveShowcaseVideoUrl(null);
  };

  useEffect(() => {
    if (!activeShowcaseVideoUrl && !activeCaseStudy) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [activeShowcaseVideoUrl, activeCaseStudy]);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);
  const showcaseVideoUrlWithAutoplay = activeShowcaseVideoUrl
    ? `${activeShowcaseVideoUrl}${activeShowcaseVideoUrl.includes("?") ? "&" : "?"}autoplay=1&rel=0`
    : "";

  return (
    <>
      <Header />

      {/* Hero Section */}
      <FixedHero
        backgroundImage="/assets/images/BrandStatements/ICICI-lombard2.png"
        title="Brand Solutions"
        description={
          <AnimatedColorText
            whiteText="A leading digital Creative Technology"
            blueText="Company, which focuses on delivering rememberable web designs that are searchable, alongside other online promotion solutions in Coventry. We provide our clients with striking, practical, and intuitive sites that attract clientele and yield revenue."
          />
        }
      />

      {/* Clients + Statements Section */}
      <section className="w-full bg-[#f6f4ef] py-20 px-10 md:px-16">
        {/* Section heading */}
        <h2 className="font-display text-3xl md:text-4xl font-normal text-gray-400 mb-12">
          Brand Solutions <span className="text-gray-400">|</span>{" "}
          <span className="font-bold text-gray-700">Clients</span>
        </h2>

        {/* 50/50 split */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left — clients grid image */}
          <div className="w-full lg:w-1/2">
            <img
              src="https://resonancedigital.in/assets/images/brandSolutions/Brand-solution-logo.png"
              alt="Brand Solutions Clients"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Right — accordion statements */}
          <div className="w-full lg:w-1/2 flex flex-col self-start pb-16">
            {brandStatements.map((item, i) => (
              <div key={i}>
                <div className="h-[2px] bg-gray-300 w-full" />
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between py-5 text-left group"
                >
                  <span className="font-display text-[18px] md:text-[20px] text-gray-700 group-hover:text-[#4a97d3] transition-colors duration-200">
                    {item.title}
                  </span>
                  <ChevronDown
                    style={{
                      transform:
                        openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                    className="w-5 h-5 text-gray-500 flex-shrink-0 ml-4"
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <p className="text-gray-500 text-sm leading-relaxed pb-5 max-w-lg">
                        {item.body}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            {/* Final bottom border */}
            <div className="h-[2px] bg-gray-300 w-full" />
          </div>
        </div>
      </section>

      {/* Brand Solutions — TVC Showcase */}
      <section className="w-full bg-[#f6f4ef] pb-24 px-10 md:px-16">
        <h2 className="font-display text-3xl md:text-4xl font-normal text-gray-400 mb-12">
          Brand Solutions <span className="text-gray-400">|</span>{" "}
          <span className="text-gray-600">TVC</span>{" "}
          <span className="text-gray-400">|</span>{" "}
          <span className="font-bold text-gray-700">Showcase</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tvcShowcase.map((item, index) => (
            <button
              key={`${item.client}-${item.year}-${index}`}
              type="button"
              className="flex flex-col text-left cursor-pointer group"
              onClick={() => openShowcaseVideoModal(item.youtubeEmbedUrl)}
              aria-label={`Open ${item.title}`}
            >
              <div className="relative aspect-video overflow-hidden rounded-sm">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/15 group-hover:bg-black/30 transition-colors duration-300" />
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center px-4 py-2 rounded-[10px] bg-[#10b8f4] shadow-lg">
                  <Play className="w-4 h-4 text-white fill-white" />
                </span>
              </div>
              <p className="mt-3 text-sm text-gray-500 uppercase tracking-wide">
                {item.client} <span className="text-gray-400">|</span>{" "}
                {item.year}
              </p>
            </button>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {activeShowcaseVideoUrl && (
          <motion.div
            className="fixed inset-0 z-[120] bg-black flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
          >
            <button
              type="button"
              aria-label="Close video"
              onClick={closeShowcaseVideoModal}
              className="fixed top-6 right-6 z-[130] w-12 h-12 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors duration-200"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <motion.div
              className="w-[80vw] h-[80vh] max-w-[1600px]"
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            >
              <iframe
                src={showcaseVideoUrlWithAutoplay}
                title="TVC showcase video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
                className="w-full h-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Brand Solutions — Showcase */}
      <section className="w-full bg-[#e7e5df] pb-24 px-10 md:px-16">
        <h2 className="font-display text-3xl md:text-4xl font-normal text-gray-400 mb-12 translate-y-3">
          Brand Solutions <span className="text-gray-400">|</span>{" "}
          <span className="font-bold text-gray-700">Case Studies</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudyShowcase.map((item, index) => (
            <button
              key={`${item.title}-${item.year}-${index}`}
              type="button"
              className="flex flex-col text-left cursor-pointer group"
              onClick={() => openCaseStudy(index)}
              aria-label={`Open case study ${item.title}`}
            >
              <div className="relative aspect-video overflow-hidden rounded-sm bg-[#e7e5df] border border-[#d7d4cc]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-xs uppercase tracking-widest font-semibold border border-white/60 px-4 py-2">
                    View Case Study
                  </span>
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-500 uppercase tracking-wide">
                {item.client} <span className="text-gray-400">|</span>{" "}
                {item.year}
              </p>
            </button>
          ))}
        </div>
      </section>

      {/* Case Study Full-Screen Overlay */}
      <AnimatePresence>
        {activeCaseStudy && (
          <motion.div
            className="fixed inset-0 z-50 bg-[#f0ede6] overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Close button */}
            <button
              type="button"
              aria-label="Close case study"
              onClick={closeCaseStudy}
              className="fixed top-6 right-6 z-[60] w-11 h-11 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors duration-200"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            {/* Content */}
            <div className="min-h-screen flex flex-col lg:flex-row">
              {/* Left — full-height image */}
              <motion.div
                key={activeCaseStudy.image + activeCaseStudyIndex}
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="w-full lg:w-[55%] relative min-h-[40vh] lg:min-h-screen"
              >
                <div className="absolute inset-0 bg-[#f0ede6]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 gap-6">
                  <div className="relative w-[85%] max-w-[650px]">
                    {activeCaseStudy.galleryImages?.length ? (
                      <button
                        type="button"
                        aria-label="Previous gallery image"
                        onClick={prevGalleryImage}
                        className="absolute left-0 top-1/2 -translate-x-[140%] -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white shadow-lg hover:bg-gray-100 flex items-center justify-center transition-colors duration-200"
                      >
                        <ChevronLeft className="w-5 h-5 text-gray-700" />
                      </button>
                    ) : null}

                    <div className="aspect-square overflow-hidden rounded-lg bg-white">
                      <img
                        src={
                          activeCaseStudy.galleryImages?.[galleryIndex] ||
                          activeCaseStudy.caseStudyImage ||
                          activeCaseStudy.image
                        }
                        alt={`${activeCaseStudy.title} case study`}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {activeCaseStudy.galleryImages?.length ? (
                      <button
                        type="button"
                        aria-label="Next gallery image"
                        onClick={nextGalleryImage}
                        className="absolute right-0 top-1/2 translate-x-[140%] -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white shadow-lg hover:bg-gray-100 flex items-center justify-center transition-colors duration-200"
                      >
                        <ChevronRight className="w-5 h-5 text-gray-700" />
                      </button>
                    ) : null}
                  </div>

                  {activeCaseStudy.galleryImages?.length ? (
                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-[85%] max-w-[750px]">
                      <p className="mb-3 text-xs uppercase tracking-[0.2em] text-gray-500">
                        Gallery
                      </p>
                      <div className="overflow-x-auto overflow-y-hidden scrollbar-hide pb-2">
                        <div className="flex gap-3 w-max pr-2">
                          {activeCaseStudy.galleryImages.map((image, index) => (
                            <button
                              key={index}
                              type="button"
                              onClick={() => setGalleryIndex(index)}
                              className={`flex-shrink-0 w-24 h-24 md:w-28 md:h-28 overflow-hidden rounded-md border-2 transition-all duration-200 ${
                                galleryIndex === index
                                  ? 'border-[#1498e1]'
                                  : 'border-transparent hover:border-gray-300'
                              }`}
                            >
                              <img
                                src={image}
                                alt={`Gallery ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
                {/* Counter badge */}
                <div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur-sm px-3 py-1 text-xs text-gray-500 uppercase tracking-widest">
                  {(activeCaseStudyIndex ?? 0) + 1} /{" "}
                  {caseStudyShowcase.length}
                </div>
              </motion.div>

              {/* Right — metadata */}
              <motion.div
                key={activeCaseStudyIndex}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="w-full lg:w-[45%] flex flex-col justify-center px-10 md:px-16 py-24 lg:py-32"
              >
                {/* Section label */}
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-8">
                  Brand Solutions | Case Study
                </p>

                {/* Title */}
                <h2 className="font-display text-[36px] md:text-[52px] font-bold text-gray-800 leading-none mb-10">
                  {activeCaseStudy.title}
                </h2>

                {/* Metadata rows */}
                <div className="space-y-0 mb-8">
                  <div className="grid grid-cols-[110px_1fr] items-baseline border-b border-gray-300 py-3">
                    <span className="text-gray-400 text-sm uppercase tracking-wide">
                      Client
                    </span>
                    <span className="text-gray-800 font-bold uppercase tracking-wide text-sm">
                      {activeCaseStudy.client}
                    </span>
                  </div>
                  <div className="grid grid-cols-[110px_1fr] items-baseline border-b border-gray-300 py-3">
                    <span className="text-gray-400 text-sm uppercase tracking-wide">
                      Service
                    </span>
                    <span className="text-gray-800 font-bold uppercase tracking-wide text-sm">
                      {activeCaseStudy.service}
                    </span>
                  </div>
                  <div className="grid grid-cols-[110px_1fr] items-baseline border-b border-gray-300 py-3">
                    <span className="text-gray-400 text-sm uppercase tracking-wide">
                      Year
                    </span>
                    <span className="text-gray-800 font-bold text-sm">
                      {activeCaseStudy.year}
                    </span>
                  </div>
                  {activeCaseStudy.videoHighlight && (
                    <div className="grid grid-cols-[110px_1fr] items-baseline border-b border-gray-300 py-3">
                      <span className="text-gray-400 text-sm uppercase tracking-wide">
                        Reach
                      </span>
                      <span className="text-[#1498e1] font-bold text-sm">
                        {activeCaseStudy.videoHighlight}
                      </span>
                    </div>
                  )}
                </div>

                {/* Objective */}
                {activeCaseStudy.objective && (
                  <div className="mb-10">
                    <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">
                      Objective
                    </p>
                    <p className="text-gray-600 text-[15px] leading-relaxed">
                      {activeCaseStudy.objective}
                    </p>
                  </div>
                )}

                {/* Dismiss hint */}
                <button
                  onClick={closeCaseStudy}
                  className="self-start text-xs uppercase tracking-widest text-gray-400 hover:text-gray-700 transition-colors duration-200 border-b border-gray-300 hover:border-gray-600 pb-0.5"
                >
                  ← Back to Showcase
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      <Footer theme="dark" />
    </>
  );
};

export default BrandSolutions;
