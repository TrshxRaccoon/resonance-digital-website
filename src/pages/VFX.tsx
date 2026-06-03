"use client";

import { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedColorText from "../components/AnimatedColorText";
import gsap from "gsap";

const VFX = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [selectedMovieCategory, setSelectedMovieCategory] =
    useState<string>("Action Reel");
  const [selectedAdCategory, setSelectedAdCategory] =
    useState<string>("Brand Commercials");
  const [currentMovieIndex, setCurrentMovieIndex] = useState<number>(0);
  const [currentAdIndex, setCurrentAdIndex] = useState<number>(0);
  const [adDirection, setAdDirection] = useState<number>(0);
  const [hoveredSide, setHoveredSide] = useState<"movies" | "ads" | null>(null);
  const expandedContentRef = useRef<HTMLDivElement>(null);
  const splitSectionRef = useRef<HTMLDivElement>(null);

  const ITEMS_PER_PAGE = 4;

  const handleMovieNext = () => {
    if (currentMovieIndex + ITEMS_PER_PAGE < moviesShowcase.length) {
      setCurrentMovieIndex(currentMovieIndex + ITEMS_PER_PAGE);
    }
  };

  const handleMoviePrev = () => {
    if (currentMovieIndex > 0) {
      setCurrentMovieIndex(Math.max(0, currentMovieIndex - ITEMS_PER_PAGE));
    }
  };

  const handleAdNext = () => {
    if (currentAdIndex + ITEMS_PER_PAGE < adsShowcase.length) {
      setAdDirection(1);
      setCurrentAdIndex(currentAdIndex + ITEMS_PER_PAGE);
    }
  };

  const handleAdPrev = () => {
    if (currentAdIndex > 0) {
      setAdDirection(-1);
      setCurrentAdIndex(Math.max(0, currentAdIndex - ITEMS_PER_PAGE));
    }
  };

  const movieCategories = [
    "Action Reel",
    "Set Extension",
    "PIP Reel",
    "Creature Reel",
    "Roto-Paint-Matchmove",
    "Crowd Multiplication Reel",
  ];

  const adCategories = [
    "Ads Showreel",
    "Automobile Showreel",
    "Liquids Showreel",
  ];

  const YOUTUBE_EMBED_PLACEHOLDER = "https://www.youtube.com/embed/dQw4w9WgXcQ";

  const movieShowreels = {
    "Action Reel": {
      client: "WARNER BROS STUDIOS",
      service: "Compositing",
      year: "2024",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat",
      youtubeEmbedUrl: "https://www.youtube.com/embed/rLzbIqI1VrU",
      thumbnail: "/assets/images/movies/movies_02Witches.png",
    },
    "Roto-Paint-Matchmove": {
      client: "DISNEY+ HOTSTAR",
      service: "FX & Simulations",
      year: "2025",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat",
      youtubeEmbedUrl: "https://www.youtube.com/embed/mn7WMlnyWnQ",
      thumbnail: "/assets/images/movies/movies_03.png",
    },
    "Set Extension": {
      client: "WARNER BROS PICTURES",
      service: "Set Extensions",
      year: "2026",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat",
      youtubeEmbedUrl: "https://www.youtube.com/embed/KBwcwjQDjEE",
      thumbnail: "/assets/images/movies/dune.jpeg",
    },
    "PIP Reel": {
      client: "20TH CENTURY STUDIOS",
      service: "Environments & Creatures",
      year: "2025",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat",
      youtubeEmbedUrl: "https://www.youtube.com/embed/8jUa_imL-DI",
      thumbnail: "/assets/images/movies/avatar.jpeg",
    },
    "Creature Reel": {
      client: "",
      service: "Environments & Creatures",
      year: "2025",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat",
      youtubeEmbedUrl: "https://www.youtube.com/embed/RbtCvfX4n_I",
      thumbnail: "/assets/images/movies/avatar.jpeg",
    },
    "Crowd Multiplication Reel": {
      client: "",
      service: "Environments & Creatures",
      year: "2025",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat",
      youtubeEmbedUrl: "https://www.youtube.com/embed/87CuOfwFpd0",
      thumbnail: "/assets/images/movies/avatar.jpeg",
    },
  };

  const adShowreels = {
    "Ads Showreel": {
      embedUrl: "https://www.youtube.com/embed/YizxjEdgjwo",
    },
    "Automobile Showreel": {
      embedUrl: "https://www.youtube.com/embed/Oc4FdMn6v_Y",
    },
    "Liquids Showreel": {
      embedUrl:
        "https://drive.google.com/file/d/1f-DU2ZZ6qMsjfFYl7K8_TLwuZYnmFnTo/preview",
    },
  };

  const moviesShowcase = [
    {
      title: "12th-Fail",
      image:
        "https://resonancedigital.in/assets/images/VFX/movies/12th-Fail.jpg",
      platform: "xxxxxx",
      year: "xxxxxx",
      category: "xxxxxx",
    },
    {
      title: "Anaconda",
      image:
        "https://resonancedigital.in/assets/images/VFX/movies/Anaconda.jpg",
      platform: "xxxxxx",
      year: "xxxxxx",
      category: "xxxxxx",
    },
    {
      title: "Antman-Wasp-Quantumania",
      image:
        "https://resonancedigital.in/assets/images/VFX/movies/Antman-Wasp-Quantumania.jpg",
      platform: "xxxxxx",
      year: "xxxxxx",
      category: "xxxxxx",
    },
    {
      title: "Baaghi-3",
      image:
        "https://resonancedigital.in/assets/images/VFX/movies/Baaghi-3.jpg",
      platform: "xxxxxx",
      year: "xxxxxx",
      category: "xxxxxx",
    },
    {
      title: "Baaghi-4",
      image:
        "https://resonancedigital.in/assets/images/VFX/movies/Baaghi-4.jpg",
      platform: "xxxxxx",
      year: "xxxxxx",
      category: "xxxxxx",
    },
    {
      title: "Batman",
      image: "https://resonancedigital.in/assets/images/VFX/movies/Batman.jpg",
      platform: "xxxxxx",
      year: "xxxxxx",
      category: "xxxxxx",
    },
    {
      title: "Beauty-in-Black 2",
      image:
        "https://resonancedigital.in/assets/images/VFX/movies/Beauty-in-Black 2.jpg",
      platform: "xxxxxx",
      year: "xxxxxx",
      category: "xxxxxx",
    },
    {
      title: "Bhediya",
      image: "https://resonancedigital.in/assets/images/VFX/movies/Bhediya.jpg",
      platform: "xxxxxx",
      year: "xxxxxx",
      category: "xxxxxx",
    },
    {
      title: "Chandigarh-Kare-Aashiqui",
      image:
        "https://resonancedigital.in/assets/images/VFX/movies/Chandigarh-Kare-Aashiqui.jpg",
      platform: "xxxxxx",
      year: "xxxxxx",
      category: "xxxxxx",
    },
    {
      title: "Citadel-Honey-Bunny",
      image:
        "https://resonancedigital.in/assets/images/VFX/movies/Citadel-Honey-Bunny.jpg",
      platform: "xxxxxx",
      year: "xxxxxx",
      category: "xxxxxx",
    },
    {
      title: "Dept-Q",
      image: "https://resonancedigital.in/assets/images/VFX/movies/Dept-Q.jpg",
      platform: "xxxxxx",
      year: "xxxxxx",
      category: "xxxxxx",
    },
    {
      title: "Dhurandhar",
      image:
        "https://resonancedigital.in/assets/images/VFX/movies/Dhurandhar.jpg",
      platform: "xxxxxx",
      year: "xxxxxx",
      category: "xxxxxx",
    },
    {
      title: "Doctor's-Strange-Multiverse-of-Madness",
      image:
        "https://resonancedigital.in/assets/images/VFX/movies/Doctor's-Strang-Multiverse-of-Madness.jpg",
      platform: "xxxxxx",
      year: "xxxxxx",
      category: "xxxxxx",
    },
    {
      title: "Extraction-2",
      image:
        "https://resonancedigital.in/assets/images/VFX/movies/Extraction-2.JPG",
      platform: "xxxxxx",
      year: "xxxxxx",
      category: "xxxxxx",
    },
    {
      title: "Family-Man-S3",
      image:
        "https://resonancedigital.in/assets/images/VFX/movies/Family-Man-S3.jpg",
      platform: "xxxxxx",
      year: "xxxxxx",
      category: "xxxxxx",
    },
    {
      title: "Fraggle-Rock",
      image:
        "https://resonancedigital.in/assets/images/VFX/movies/Fraggle-Rock.jpg",
      platform: "xxxxxx",
      year: "xxxxxx",
      category: "xxxxxx",
    },
    {
      title: "Heropanti-2",
      image:
        "https://resonancedigital.in/assets/images/VFX/movies/Heropanti-2.jpg",
      platform: "xxxxxx",
      year: "xxxxxx",
      category: "xxxxxx",
    },
    {
      title: "Karate-Kids-Legends",
      image:
        "https://resonancedigital.in/assets/images/VFX/movies/Karate-Kids-Legends.jpg",
      platform: "xxxxxx",
      year: "xxxxxx",
      category: "xxxxxx",
    },
    {
      title: "Kartikeya-2",
      image:
        "https://resonancedigital.in/assets/images/VFX/movies/Kartikeya-2.jpg",
      platform: "xxxxxx",
      year: "xxxxxx",
      category: "xxxxxx",
    },
    {
      title: "KGF2",
      image: "https://resonancedigital.in/assets/images/VFX/movies/KGF2.jpg",
      platform: "xxxxxx",
      year: "xxxxxx",
      category: "xxxxxx",
    },
    {
      title: "Mike",
      image: "https://resonancedigital.in/assets/images/VFX/movies/Mike.jpg",
      platform: "xxxxxx",
      year: "xxxxxx",
      category: "xxxxxx",
    },
    {
      title: "Mirzapur-S3",
      image:
        "https://resonancedigital.in/assets/images/VFX/movies/Mirzapur-S3.jpg",
      platform: "xxxxxx",
      year: "xxxxxx",
      category: "xxxxxx",
    },
    {
      title: "Mission-Impossible-Dead-Reckoning_1",
      image:
        "https://resonancedigital.in/assets/images/VFX/movies/Mission-Impossible-Dead-Reckoning_1.jpg",
      platform: "xxxxxx",
      year: "xxxxxx",
      category: "xxxxxx",
    },
    {
      title: "Mumbai-Diaries",
      image:
        "https://resonancedigital.in/assets/images/VFX/movies/Mumbai-Diaries.jpg",
      platform: "xxxxxx",
      year: "xxxxxx",
      category: "xxxxxx",
    },
    {
      title: "Orville",
      image: "https://resonancedigital.in/assets/images/VFX/movies/Orville.jpg",
      platform: "xxxxxx",
      year: "xxxxxx",
      category: "xxxxxx",
    },
    {
      title: "Pathan",
      image: "https://resonancedigital.in/assets/images/VFX/movies/Pathan.jpg",
      platform: "xxxxxx",
      year: "xxxxxx",
      category: "xxxxxx",
    },
    {
      title: "Red-Notice",
      image:
        "https://resonancedigital.in/assets/images/VFX/movies/Red-Notice.jpg",
      platform: "xxxxxx",
      year: "xxxxxx",
      category: "xxxxxx",
    },
    {
      title: "Rocket-Boys",
      image:
        "https://resonancedigital.in/assets/images/VFX/movies/Rocket-Boys.jpg",
      platform: "xxxxxx",
      year: "xxxxxx",
      category: "xxxxxx",
    },
    {
      title: "sadak2",
      image: "https://resonancedigital.in/assets/images/VFX/movies/sadak2.jpg",
      platform: "xxxxxx",
      year: "xxxxxx",
      category: "xxxxxx",
    },
    {
      title: "Sandman-Season 1",
      image:
        "https://resonancedigital.in/assets/images/VFX/movies/Sandman-Season 1.jpg",
      platform: "xxxxxx",
      year: "xxxxxx",
      category: "xxxxxx",
    },
    {
      title: "Secret-Invasion",
      image:
        "https://resonancedigital.in/assets/images/VFX/movies/Secret-Invasion.jpg",
      platform: "xxxxxx",
      year: "xxxxxx",
      category: "xxxxxx",
    },
    {
      title: "SEE",
      image: "https://resonancedigital.in/assets/images/VFX/movies/SEE.jpg",
      platform: "xxxxxx",
      year: "xxxxxx",
      category: "xxxxxx",
    },
    {
      title: "Senna",
      image: "https://resonancedigital.in/assets/images/VFX/movies/Senna.jpg",
      platform: "xxxxxx",
      year: "xxxxxx",
      category: "xxxxxx",
    },
    {
      title: "Soorarai-Pottru",
      image:
        "https://resonancedigital.in/assets/images/VFX/movies/Soorarai-Pottru.jpg",
      platform: "xxxxxx",
      year: "xxxxxx",
      category: "xxxxxx",
    },
    {
      title: "Squid-Games-3",
      image:
        "https://resonancedigital.in/assets/images/VFX/movies/Squid-Games-3.jpg",
      platform: "xxxxxx",
      year: "xxxxxx",
      category: "xxxxxx",
    },
    {
      title: "Stargirl",
      image:
        "https://resonancedigital.in/assets/images/VFX/movies/Stargirl.jpg",
      platform: "xxxxxx",
      year: "xxxxxx",
      category: "xxxxxx",
    },
    {
      title: "TED",
      image: "https://resonancedigital.in/assets/images/VFX/movies/TED.jpg",
      platform: "xxxxxx",
      year: "xxxxxx",
      category: "xxxxxx",
    },
    {
      title: "The-Empire",
      image:
        "https://resonancedigital.in/assets/images/VFX/movies/The-Empire.jpg",
      platform: "xxxxxx",
      year: "xxxxxx",
      category: "xxxxxx",
    },
    {
      title: "The-Flash 8",
      image:
        "https://resonancedigital.in/assets/images/VFX/movies/The-Flash 8.jpg",
      platform: "xxxxxx",
      year: "xxxxxx",
      category: "xxxxxx",
    },
    {
      title: "The-Flash",
      image:
        "https://resonancedigital.in/assets/images/VFX/movies/The-Flash.JPG",
      platform: "xxxxxx",
      year: "xxxxxx",
      category: "xxxxxx",
    },
    {
      title: "The-Last of Us",
      image:
        "https://resonancedigital.in/assets/images/VFX/movies/The-Last of Us.JPG",
      platform: "xxxxxx",
      year: "xxxxxx",
      category: "xxxxxx",
    },
    {
      title: "Tu-Meri-Main-Tera-Main-Tera-Tu-Meri-01",
      image:
        "https://resonancedigital.in/assets/images/VFX/movies/Tu-Meri-Main-Tera-Main-Tera-Tu-Meri-01.jpg",
      platform: "xxxxxx",
      year: "xxxxxx",
      category: "xxxxxx",
    },
    {
      title: "Tulsa-King",
      image:
        "https://resonancedigital.in/assets/images/VFX/movies/Tulsa-King.jpg",
      platform: "xxxxxx",
      year: "xxxxxx",
      category: "xxxxxx",
    },
    {
      title: "Umbrella-Academy S3",
      image:
        "https://resonancedigital.in/assets/images/VFX/movies/Umbrella-Academy S3.jpg",
      platform: "xxxxxx",
      year: "xxxxxx",
      category: "xxxxxx",
    },
    {
      title: "Unconfirmed-237953",
      image:
        "https://resonancedigital.in/assets/images/VFX/movies/Unconfirmed-237953.JPG",
      platform: "xxxxxx",
      year: "xxxxxx",
      category: "xxxxxx",
    },
    {
      title: "Unconfirmed-520721",
      image:
        "https://resonancedigital.in/assets/images/VFX/movies/Unconfirmed-520721.JPG",
      platform: "xxxxxx",
      year: "xxxxxx",
      category: "xxxxxx",
    },
    {
      title: "Unconfirmed-945243",
      image:
        "https://resonancedigital.in/assets/images/VFX/movies/Unconfirmed-945243.jpg",
      platform: "xxxxxx",
      year: "xxxxxx",
      category: "xxxxxx",
    },
    {
      title: "Unconfirmed-977985",
      image:
        "https://resonancedigital.in/assets/images/VFX/movies/Unconfirmed-977985.JPG",
      platform: "xxxxxx",
      year: "xxxxxx",
      category: "xxxxxx",
    },
    {
      title: "Upload",
      image: "https://resonancedigital.in/assets/images/VFX/movies/Upload.jpg",
      platform: "xxxxxx",
      year: "xxxxxx",
      category: "xxxxxx",
    },
    {
      title: "Wendel-and-Wild",
      image:
        "https://resonancedigital.in/assets/images/VFX/movies/Wendel-and-Wild.jpg",
      platform: "xxxxxx",
      year: "xxxxxx",
      category: "xxxxxx",
    },
    {
      title: "Witcher",
      image: "https://resonancedigital.in/assets/images/VFX/movies/Witcher.jpg",
      platform: "xxxxxx",
      year: "xxxxxx",
      category: "xxxxxx",
    },
  ];

  const adsShowcase = [
    {
      title: "Nike Campaign 2024",
      image: "/assets/images/ads/nike.jpg",
      client: "Nike",
      year: "2024",
      category: "Brand Commercials",
    },
    {
      title: "Coca-Cola Summer",
      image: "/assets/images/ads/cocacola.jpg",
      client: "Coca-Cola",
      year: "2024",
      category: "Brand Commercials",
    },
    {
      title: "Apple Vision Pro",
      image: "/assets/images/ads/apple.jpg",
      client: "Apple",
      year: "2024",
      category: "Product Visualization",
    },
    {
      title: "Mercedes-Benz EQS",
      image: "/assets/images/ads/mercedes.jpg",
      client: "Mercedes-Benz",
      year: "2023",
      category: "Product Visualization",
    },
    {
      title: "Samsung Galaxy",
      image: "/assets/images/ads/nike.jpg",
      client: "Samsung",
      year: "2024",
      category: "Motion Graphics",
    },
    {
      title: "Pepsi Max",
      image: "/assets/images/ads/cocacola.jpg",
      client: "Pepsi",
      year: "2024",
      category: "Visual Effects",
    },
  ];

  const cgShowreels = [
    "/assets/images/Showreel/ads-showreel.jpg",
    "assets/images/Showreel/liquids-showreel.jpg",
    "assets/images/Showreel/mahindra-xuv.png",
  ];

  const cgiStillsShowcase = [
    "/assets/images/CGI-Stills/CGI-1.jpg",
    "/assets/images/CGI-Stills/CGI-2.jpg",
    "/assets/images/CGI-Stills/CGI-3.jpg",
    "/assets/images/CGI-Stills/CGI-4.jpg",
    "/assets/images/CGI-Stills/CGI-5.jpg",
    "/assets/images/CGI-Stills/CGI-6.jpg",
    "/assets/images/CGI-Stills/CGI-7.jpg",
    "/assets/images/CGI-Stills/CGI-8.jpg",
    "/assets/images/CGI-Stills/CGI-9.jpg",
    "/assets/images/CGI-Stills/CGI-10.jpg",
    "/assets/images/CGI-Stills/CGI-11.jpg",
    "/assets/images/CGI-Stills/CGI-12.jpg",
    "/assets/images/CGI-Stills/CGI-13.jpg",
    "/assets/images/CGI-Stills/CGI-14.jpg",
    "/assets/images/CGI-Stills/CGI-15.jpg",
    "/assets/images/CGI-Stills/CGI-16.jpg",
    "/assets/images/CGI-Stills/CGI-17.jpg",
    "/assets/images/CGI-Stills/CGI-18.jpg",
  ];

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // ADS VIDEO FEED — ADD / EDIT VIDEOS HERE
  // Each entry needs `src` (path to the video file) and `label` (client name).
  //
  // ► To add a new video: push a new { src, label } object to this array.
  // ► The layout pattern cycles automatically — no other code changes needed.
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  const adsVideoFeed = [
    {
      src: "https://www.youtube.com/embed/R38Utym7jQA",
      label: "Apollo Apterra Tyres",
    },
    {
      src: "https://www.youtube.com/embed/Mzi9C-KQn20",
      label: "OPPO AI Best Face",
    },
    {
      src: "https://www.youtube.com/embed/hV5qy2Uf6rA",
      label: "Indigo Protect Plus",
    },
    { src: "https://www.youtube.com/embed/WyRVQCG9zQU", label: "Campa Energy" },
    { src: "https://www.youtube.com/embed/2XmSERxk2D4", label: "Black Dog" },
    { src: "https://www.youtube.com/embed/RfB82bLMjF0", label: "SUPERBET" },
    {
      src: "https://www.youtube.com/embed/645Oi-VWWzk",
      label: "Fastrack Smart",
    },
    { src: "https://www.youtube.com/embed/tbF1zLEg2JQ", label: "Bournvita" },
    { src: "https://www.youtube.com/embed/7bJF4SQNHfM", label: "Honda Amaze" },
    { src: "https://www.instagram.com/reel/DQMRzL5DVIW/embed", label: "Oreo" },
    {
      src: "https://www.youtube.com/embed/WZ0iwRyJvUE",
      label: "Ecolink BLDC Fans",
    },
    { src: "https://www.youtube.com/embed/YBghJkyU938", label: "JK Cement" },
    {
      src: "https://www.youtube.com/embed/KKrPcYTI-ms",
      label: "Director Special Elaichi",
    },
    { src: "https://www.youtube.com/embed/8Zl1JTwkGsU", label: "Kit Kat" },
    { src: "https://www.youtube.com/embed/3bMiUFq4R3g", label: "Max Fashion" },
    {
      src: "https://www.youtube.com/embed/18ONRTDjpNE",
      label: "The Plush New XUV500",
    },
    {
      src: "https://www.youtube.com/embed/j_yCTy7RJdA",
      label: "Savsol Lubricants",
    },
    {
      src: "https://www.youtube.com/embed/psj8PBNokiU",
      label: "Flipkart Big Bang Diwali",
    },
    {
      src: "https://www.youtube.com/embed/oC56lEFHo0Y",
      label: "The Fast & The Fair - ACKO",
    },
    {
      src: "https://www.youtube.com/embed/qSiO0_LFdlo",
      label: "Netflix End of Year 2021",
    },
    {
      src: "https://www.youtube.com/embed/_-nqkErvF1E",
      label: "Netflix End of Year 2022",
    },
    {
      src: "https://www.youtube.com/embed/K5qns5BI208",
      label: "Netflix End of Year 2023",
    },
  ];

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // LAYOUT PATTERN — controls the visual rhythm. Modify the order to taste.
  //   "full"       → 1 video  (single 16:9 card)
  //   "split"      → 2 videos (two 16:9 cards side by side)
  //   "T"          → 3 videos (one 16:9 row + two 16:9 cards)
  //   "grid2x2"    → 4 videos (2×2 grid of 16:9 cards)
  //   "invertedT"  → 3 videos (two 16:9 cards + one 16:9 row)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  const LAYOUT_PATTERN = [
    "full",
    "split",
    "full",
    "T",
    "grid2x2",
    "full",
    "invertedT",
    "full",
  ] as const;

  type AdLayoutType = (typeof LAYOUT_PATTERN)[number];
  type AdBlock = { type: AdLayoutType; videos: typeof adsVideoFeed };

  const videoCounts: Record<AdLayoutType, number> = {
    full: 1,
    split: 2,
    T: 3,
    grid2x2: 4,
    invertedT: 3,
  };

  // Slice videos into blocks — walks through LAYOUT_PATTERN first, then
  // appends any leftover videos as individual single-card blocks so every
  // video in adsVideoFeed is always shown, no matter how many there are.
  const adBlocks: AdBlock[] = [];
  let _adCursor = 0;
  for (const type of LAYOUT_PATTERN) {
    const count = videoCounts[type];
    const videos = Array.from(
      { length: count },
      (_, i) => adsVideoFeed[(_adCursor + i) % adsVideoFeed.length],
    );
    _adCursor += count;
    adBlocks.push({ type, videos } as AdBlock);
  }
  // Any remaining videos get their own single 16:9 block
  while (_adCursor < adsVideoFeed.length) {
    adBlocks.push({
      type: "full",
      videos: [adsVideoFeed[_adCursor]],
    } as AdBlock);
    _adCursor++;
  }

  // Reusable floating video card
  const AdCard = ({
    src,
    label,
    className = "",
  }: {
    src: string;
    label: string;
    className?: string;
  }) => (
    <div
      className={`group relative w-full aspect-video overflow-hidden rounded-sm ${className}`}
    >
      <iframe
        src={src}
        title={label}
        loading="lazy"
        className="absolute inset-0 w-full h-full"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />
      <p className="absolute bottom-6 left-6 text-white font-display text-xl font-bold pointer-events-none">
        {label}
      </p>
    </div>
  );

  useEffect(() => {
    if (expandedSection && expandedContentRef.current) {
      // Animate expansion
      gsap.fromTo(
        expandedContentRef.current,
        {
          opacity: 0,
          scale: 0.95,
          y: 50,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
      );
    }
  }, [expandedSection]);

  const handleExpand = (section: string) => {
    if (splitSectionRef.current) {
      // Animate out the split section
      gsap.to(splitSectionRef.current, {
        opacity: 0,
        scale: 1.05,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          window.scrollTo({
            top: 0,
            behavior: "auto",
          });
          setExpandedSection(section);
        },
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
      setExpandedSection(section);
    }
  };

  const handleCollapse = () => {
    if (expandedContentRef.current) {
      // Animate out the expanded content
      gsap.to(expandedContentRef.current, {
        opacity: 0,
        scale: 0.95,
        y: -50,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          setExpandedSection(null);
          // Animate in the split section
          if (splitSectionRef.current) {
            gsap.fromTo(
              splitSectionRef.current,
              { opacity: 0, scale: 0.98 },
              { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" },
            );
          }
        },
      });
    } else {
      setExpandedSection(null);
    }
  };

  const selectedMovieShowreel =
    movieShowreels[selectedMovieCategory as keyof typeof movieShowreels];
  const movieShowcasePages = Array.from(
    { length: Math.ceil(moviesShowcase.length / ITEMS_PER_PAGE) },
    (_, page) =>
      moviesShowcase.slice(
        page * ITEMS_PER_PAGE,
        page * ITEMS_PER_PAGE + ITEMS_PER_PAGE,
      ),
  );
  const currentMoviePage = Math.floor(currentMovieIndex / ITEMS_PER_PAGE);

  return (
    <>
      <Helmet>
        <title>VFX: Movies & Ads | Resonance Digital</title>
        <meta
          name="description"
          content="High-end VFX and animation services for movies and commercial advertising."
        />
      </Helmet>

      <Header />

      {/* Hero Section */}
      {!expandedSection && (
        <section className="relative w-full min-h-screen bg-[#080032] flex flex-col justify-center px-6 md:px-12 lg:px-24 py-24">
          {/* Main Title */}
          <div className="max-w-6xl w-full mt-20">
            <h1 className="font-display text-[85px] md:text-[95px] lg:text-[105px] font-bold text-[#4ab6ff] mb-10 leading-tight">
              VFX: Movies & Ads
            </h1>

            {/* Description */}
            <AnimatedColorText
              whiteText="A leading digital Creative Technology Company, which focuses on delivering rememberable web designs that are searchable,"
              blueText="alongside other online promotion solutions in Coventry. We provide our clients with striking, practical, and intuitive sites that attract clientele and yield revenue."
            />
          </div>
        </section>
      )}

      {/* Split Movies / Ads Section - Becomes Expandable */}
      {!expandedSection && (
        <section
          ref={splitSectionRef}
          className="relative w-full h-screen overflow-hidden bg-black"
        >
          {/* Full-bleed movies image as base layer — prevents black corners showing through clip gaps */}
          <img
            src="/assets/images/vfx/movie-background.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Movies (Left, diagonally clipped) */}
          <div
            onClick={() => handleExpand("movies")}
            onMouseEnter={() => setHoveredSide("movies")}
            onMouseLeave={() => setHoveredSide(null)}
            className="absolute inset-0 group cursor-pointer transition-all duration-700"
            style={{
              clipPath:
                hoveredSide === "movies"
                  ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                  : hoveredSide === "ads"
                    ? "polygon(0 0, 15% 0, 5% 100%, 0 100%)"
                    : "polygon(0 0, 65% 0, 45% 100%, 0 100%)",
            }}
          >
            <img
              src="/assets/images/vfx/movie-background.png"
              alt="Movies"
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 transition-all duration-500" />

            <h2 className="absolute left-20 top-1/2 -translate-y-1/2 font-display text-[88px] font-bold text-white group-hover:text-[#4ab6ff] transition-all duration-500 group-hover:scale-110">
              Movies
            </h2>
          </div>

          {/* Ads (Right, diagonally clipped) */}
          <div
            onClick={() => handleExpand("ads")}
            onMouseEnter={() => setHoveredSide("ads")}
            onMouseLeave={() => setHoveredSide(null)}
            className="absolute inset-0 group cursor-pointer transition-all duration-700"
            style={{
              clipPath:
                hoveredSide === "ads"
                  ? "polygon(5% 0, 100% 0, 100% 100%, 15% 100%)"
                  : hoveredSide === "movies"
                    ? "polygon(95% 0, 100% 0, 100% 100%, 85% 100%)"
                    : "polygon(62% 0, 100% 0, 100% 100%, 42% 100%)",
            }}
          >
            <img
              src="/assets/images/vfx/ads-showreel.jpg"
              alt="Ads"
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 transition-all duration-500" />

            <h2 className="absolute right-20 top-1/2 -translate-y-1/2 font-display text-[88px] font-bold text-white group-hover:text-[#4ab6ff] transition-all duration-500 group-hover:scale-110">
              Ads
            </h2>
          </div>
        </section>
      )}

      {/* Back Button for Expanded Movies or Ads */}
      {expandedSection && (
        <button
          onClick={handleCollapse}
          className="fixed top-24 right-8 z-[200] bg-sky-400 hover:bg-sky-500 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
        >
          ← Back
        </button>
      )}

      {/* Expanded Movies Section */}
      {expandedSection === "movies" && (
        <div ref={expandedContentRef} className="w-full bg-[#100a44]">
          {/* Hero Section */}
          <section className="relative w-full min-h-screen bg-[#080032] flex flex-col justify-center px-6 md:px-12 lg:px-24 py-24">
            {/* FixedHero-style Background */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('/assets/images/vfx/movie-background.png')`,
              }}
            />
            <div className="absolute inset-0 bg-black/60" />
            {/* Main Title */}
            <div className="relative z-10 max-w-6xl w-full mt-20">
              <h1 className="font-display text-[85px] md:text-[95px] lg:text-[105px] font-bold text-[#4ab6ff] mb-10 leading-tight">
                VFX: Movies
              </h1>

              {/* Description */}
              <AnimatedColorText
                whiteText="We bring stories to life with cutting-edge visual effects that captivate audiences worldwide."
                blueText="Our team has contributed to major productions across streaming platforms and theatrical releases, creating immersive worlds and unforgettable moments."
              />
            </div>
          </section>

          {/* featured projects section */}
          <div className="mt-32 px-12 md:px-24">
            <div className="max-w-7xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                VFX: Movie <span className="text-[#4ab6ff]">|</span>{" "}
                <span className="text-white/60">Showcase</span>
              </h2>
            </div>
          </div>

          {/* Movies Showcase Carousel */}
          <section className="relative w-full bg-[#100a44] py-24 px-12 md:px-24">
            <div className="max-w-7xl mx-auto">
              <div className="relative">
                {/* Carousel Navigation */}
                <button
                  onClick={handleMoviePrev}
                  disabled={currentMovieIndex === 0}
                  className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 ${
                    currentMovieIndex === 0
                      ? "bg-sky-400/10 cursor-not-allowed opacity-50"
                      : "bg-sky-400/20 hover:bg-sky-400/40 cursor-pointer"
                  }`}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <div className="relative overflow-hidden">
                  <div
                    className="flex transition-transform duration-300 ease-out will-change-transform"
                    style={{
                      transform: `translate3d(-${currentMoviePage * 100}%, 0, 0)`,
                    }}
                  >
                    {movieShowcasePages.map((pageItems, pageIndex) => (
                      <div
                        key={pageIndex}
                        className="shrink-0 min-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                      >
                        {pageItems.map((movie, index) => (
                          <div
                            key={`${movie.title}-${pageIndex}-${index}`}
                            className="group relative aspect-[2/3] rounded-lg overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:z-10"
                          >
                            {/* Movie Poster */}
                            <img
                              src={movie.image}
                              alt={movie.title}
                              className="absolute inset-0 w-full h-full object-cover"
                            />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-sky-400/0 group-hover:bg-sky-400/20 transition-all duration-500" />

                            {/* Title overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                              <div>
                                <p className="text-white font-bold text-lg">
                                  {movie.title}
                                </p>
                                <p className="text-[#4ab6ff] text-sm">
                                  {movie.platform}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                        {Array.from({
                          length: ITEMS_PER_PAGE - pageItems.length,
                        }).map((_, i) => (
                          <div
                            key={`movie-placeholder-${pageIndex}-${i}`}
                            className="aspect-[2/3]"
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleMovieNext}
                  disabled={
                    currentMovieIndex + ITEMS_PER_PAGE >= moviesShowcase.length
                  }
                  className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 ${
                    currentMovieIndex + ITEMS_PER_PAGE >= moviesShowcase.length
                      ? "bg-sky-400/10 cursor-not-allowed opacity-50"
                      : "bg-sky-400/20 hover:bg-sky-400/40 cursor-pointer"
                  }`}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Additional Content */}
              {/* <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="font-display text-4xl font-bold text-white mb-6">
                    Cinematic Excellence
                  </h3>
                  <p className="text-white/80 text-lg leading-relaxed mb-4">
                    We bring stories to life with cutting-edge visual effects that captivate audiences worldwide. Our team has contributed to major productions across streaming platforms and theatrical releases.
                  </p>
                  <p className="text-white/60 text-base leading-relaxed">
                    From concept art to final compositing, we deliver VFX that seamlessly blend with live-action footage, creating immersive worlds and unforgettable moments.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                    <h4 className="text-[#4ab6ff] font-semibold text-xl mb-2">Our Expertise</h4>
                    <ul className="text-white/70 space-y-2">
                      <li>• CGI & Digital Animation</li>
                      <li>• Motion Capture & Performance</li>
                      <li>• Virtual Production</li>
                      <li>• Color Grading & Finishing</li>
                    </ul>
                  </div>
                </div>
              </div> */}

              {/* Areas of Expertise Section */}
              <div className="mt-32">
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                  VFX: Movie <span className="text-[#4ab6ff]">|</span>{" "}
                  <span className="text-white/60">Areas of expertise</span>
                </h2>

                {/* Category Filter */}
                <div className="mt-8 mb-12">
                  <div className="flex flex-wrap gap-y-5 gap-x-0 text-3xl md:text-4xl lg:text-5xl font-semibold leading-relaxed">
                    {movieCategories.map((category, index) => (
                      <div key={category} className="flex items-center">
                        <button
                          onClick={() => setSelectedMovieCategory(category)}
                          className={`transition-colors duration-300 ${
                            selectedMovieCategory === category
                              ? "text-[#4ab6ff]"
                              : "text-white/40 hover:text-[#4ab6ff]"
                          }`}
                        >
                          {category}
                        </button>
                        {index < movieCategories.length - 1 && (
                          <span className="text-white/30 mx-5">|</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Showreel Display */}
                {selectedMovieShowreel && (
                  <div className="w-full">
                    <div className="relative aspect-[16/9] bg-black rounded-lg overflow-hidden shadow-2xl">
                      <iframe
                        key={selectedMovieCategory}
                        src={selectedMovieShowreel.youtubeEmbedUrl}
                        title={`${selectedMovieCategory} showreel`}
                        className="w-full h-full"
                        loading="lazy"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Security Certifications Section */}
              <div className="mt-24 mb-16">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                  {/* Left Side - Text Content */}
                  <div className="flex-1">
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#4ab6ff] mb-8 leading-tight">
                      Security
                      <br />
                      Certifications
                    </h2>

                    <p className="text-white text-lg md:text-xl leading-relaxed">
                      <span className="font-semibold">
                        TPN Gold Shield Certification
                      </span>{" "}
                      and security compliance with{" "}
                      <span className="font-semibold">
                        Warner Bros, Lionsgate, Universal Pictures, Paramount,
                      </span>{" "}
                      <span className="text-white/60">
                        Amazon Studios, Netflix and ABC
                      </span>{" "}
                      validate our commitment to safeguarding client content and
                      IP.
                    </p>
                  </div>

                  {/* Right Side - Company Logos Image */}
                  <div className="flex-1 min-w-0">
                    <img
                      src="https://resonancedigital.in/assets/images/VFX/movies/securityCertifications/Security-Certification.png"
                      alt="Company Logos - TPN, Warner Bros, Amazon Studios, Lionsgate, Netflix, Universal"
                      className="w-full h-auto rounded-2xl"
                    />
                  </div>
                </div>
              </div>

              {/* Films & Episodic Clients Section */}
              <div className="mt-24 mb-16">
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                  {/* Left Side - Title */}
                  <div className="lg:w-[45%]">
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#4ab6ff] leading-tight">
                      Films & Episodic <br />
                      Clients
                    </h2>
                  </div>

                  {/* Right Side - Client Logos */}
                  <div className="flex-1 min-w-0">
                    <img
                      src="https://resonancedigital.in/assets/images/VFX/Films-and-episodic-client.png"
                      alt="Films & Episodic Clients Logos"
                      className="w-full max-w-[1200px] h-auto rounded-2xl scale-110 origin-right"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Expanded Ads Section */}
      {expandedSection === "ads" && (
        <div ref={expandedContentRef} className="w-full bg-[#100a44]">
          {/* Hero Section */}
          <section className="relative w-full min-h-screen bg-[#080032] flex flex-col justify-center px-6 md:px-12 lg:px-24 py-24">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('/assets/images/vfx/ads-showreel.jpg')`,
              }}
            />
            <div className="absolute inset-0 bg-black/60" />
            {/* Main Title */}
            <div className="relative z-10 max-w-6xl w-full mt-20">
              <h1 className="font-display text-[85px] md:text-[95px] lg:text-[105px] font-bold text-[#4ab6ff] mb-10 leading-tight">
                VFX: Ads
              </h1>

              {/* Description */}
              <AnimatedColorText
                whiteText="Crafting compelling commercial content that resonates with audiences and drives results."
                blueText="From concept to final delivery, we blend creativity with strategic thinking to produce commercials that make an impact across all platforms."
              />
            </div>
          </section>

          {/* Areas of Expertise Section */}
          <div className="px-12 md:px-24 pb-24">
            <div className="max-w-7xl mx-auto translate-y-8">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                VFX: Ads <span className="text-[#4ab6ff]">|</span>{" "}
                <span className="text-white/60">Areas of expertise</span>
              </h2>

              <div className="mt-8 mb-12">
                <div className="flex flex-wrap gap-y-5 gap-x-0 text-3xl md:text-4xl lg:text-5xl font-semibold leading-relaxed">
                  {adCategories.map((category, index) => (
                    <div key={category} className="flex items-center">
                      <button
                        onClick={() => setSelectedAdCategory(category)}
                        className={`transition-colors duration-300 ${
                          selectedAdCategory === category
                            ? "text-[#4ab6ff]"
                            : "text-white/40 hover:text-[#4ab6ff]"
                        }`}
                      >
                        {category}
                      </button>
                      {index < adCategories.length - 1 && (
                        <span className="text-white/30 mx-5">|</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {adShowreels[selectedAdCategory as keyof typeof adShowreels] && (
                <div className="w-full">
                  <div className="relative aspect-[16/9] bg-black rounded-lg overflow-hidden shadow-2xl">
                    <iframe
                      key={selectedAdCategory}
                      src={
                        adShowreels[
                          selectedAdCategory as keyof typeof adShowreels
                        ].embedUrl
                      }
                      title={selectedAdCategory}
                      className="w-full h-full"
                      loading="lazy"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="px-12 md:px-24 pb-24">
            <div className="max-w-7xl mx-auto">
              {/* ── CGI Stills — unequal masonry grid ── */}
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-10">
                VFX: CGI Stills <span className="text-[#4ab6ff]">|</span>{" "}
                <span className="text-white/60">Showcase</span>
              </h2>

              {/*
                CSS-columns masonry: browser stacks items top-to-bottom in each
                column, so natural image heights create the unequal-card look
                without any JS. break-inside-avoid stops images splitting across
                column boundaries.
              */}
              <div
                style={{
                  columnCount: 3,
                  columnGap: "8px",
                }}
              >
                {cgiStillsShowcase.map((image, index) => {
                  // Cycle through aspect ratios so adjacent cards are never
                  // the same height — this is what creates the uneven grid feel
                  const aspects = [
                    "aspect-[4/5]",
                    "aspect-[16/9]",
                    "aspect-square",
                    "aspect-[3/4]",
                    "aspect-[16/10]",
                    "aspect-[4/3]",
                    "aspect-[9/16]",
                    "aspect-[5/4]",
                    "aspect-[16/9]",
                  ];
                  return (
                    <div
                      key={`cgi-still-${index}`}
                      className={`group relative ${aspects[index % aspects.length]} overflow-hidden rounded-sm`}
                      style={{
                        display: "inline-block",
                        width: "100%",
                        marginBottom: "8px",
                        breakInside: "avoid",
                      }}
                    >
                      <img
                        src={image}
                        alt={`CGI Still ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300 pointer-events-none" />
                      {/* index badge — appears on hover */}
                      <span className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[9px] text-white/70 uppercase tracking-widest bg-black/50 backdrop-blur-sm px-2 py-0.5">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* ── Ads Video Feed ─────────────────────────────────────────────────── */}
          {/* The section is a continuous dark canvas of 16:9 cards.             */}
          {/* Layout alternates between full, split, T, 2×2, and inverted-T.     */}
        </div>
      )}

      {/* Ads immersive video feed — dynamic, driven by adsVideoFeed + LAYOUT_PATTERN */}
      {expandedSection === "ads" && (
        <div className="w-full bg-black p-3 flex flex-col gap-3">
          {adBlocks.map((block, blockIdx) => {
            const [v0, v1, v2, v3] = block.videos;
            switch (block.type) {
              case "full":
                return (
                  <div
                    key={blockIdx}
                    className="relative w-full aspect-video overflow-hidden rounded-sm"
                  >
                    <iframe
                      src={v0.src}
                      title={v0.label}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <p className="absolute bottom-8 left-8 text-white font-display text-2xl font-bold tracking-wide">
                      {v0.label}
                    </p>
                  </div>
                );

              case "split":
                return (
                  <div
                    key={blockIdx}
                    className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full"
                  >
                    <AdCard src={v0.src} label={v0.label} />
                    <AdCard src={v1.src} label={v1.label} />
                  </div>
                );

              case "T":
                return (
                  <div key={blockIdx} className="flex flex-col gap-3 w-full">
                    <AdCard src={v0.src} label={v0.label} />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <AdCard src={v1.src} label={v1.label} />
                      <AdCard src={v2.src} label={v2.label} />
                    </div>
                  </div>
                );

              case "grid2x2":
                return (
                  <div
                    key={blockIdx}
                    className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full"
                  >
                    <AdCard src={v0.src} label={v0.label} />
                    <AdCard src={v1.src} label={v1.label} />
                    <AdCard src={v2.src} label={v2.label} />
                    <AdCard src={v3.src} label={v3.label} />
                  </div>
                );

              case "invertedT":
                return (
                  <div key={blockIdx} className="flex flex-col gap-3 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <AdCard src={v0.src} label={v0.label} />
                      <AdCard src={v1.src} label={v1.label} />
                    </div>
                    <AdCard src={v2.src} label={v2.label} />
                  </div>
                );

              default:
                return null;
            }
          })}
        </div>
      )}

      {/* Original Expandable Items Section - Only show when nothing is expanded */}
      {!expandedSection && (
        <section className="w-full bg-[#080032]">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12 space-y-4">
            {/* You can add additional content here if needed */}
          </div>
        </section>
      )}

      <Footer theme="dark" />
    </>
  );
};

export default VFX;
