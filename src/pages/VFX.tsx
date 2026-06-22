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
        useState<string>("Master Showreel");
    const [selectedAdCategory, setSelectedAdCategory] =
        useState<string>("Master Showreel");
    const [currentMovieIndex, setCurrentMovieIndex] = useState<number>(0);
    const [hoveredSide, setHoveredSide] = useState<"movies" | "ads" | null>(null);
    const expandedContentRef = useRef<HTMLDivElement>(null);
    const splitSectionRef = useRef<HTMLDivElement>(null);
    const videoObserverRef = useRef<IntersectionObserver | null>(null);

    const isMobileViewport =
        typeof window !== "undefined" && window.innerWidth < 768;

    const ITEMS_PER_PAGE = isMobileViewport ? 1 : 4;
    const MOVIE_AUTO_ROTATE_MS = 4000;

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

    const movieCategories = [
        "Master Showreel",
        "Action Reel",
        "Creature Reel",
        "Roto-Paint-Matchmove",
        "PIP Reel",
        "Set Extension",
        "Crowd Multiplication Reel",
    ];

    const adCategories = [
        "Master Showreel",
        "Automobile Showreel",
        "Liquids Showreel",
    ];

    const movieShowreels = {
        "Master Showreel": {
            youtubeEmbedUrl: "/assets/videos/MasterMovie.webm",
        },
        "Action Reel": {
            youtubeEmbedUrl: "https://www.youtube.com/embed/rLzbIqI1VrU",
        },
        "Roto-Paint-Matchmove": {
            youtubeEmbedUrl: "/assets/videos/RPM.webm",
        },
        "Set Extension": {
            youtubeEmbedUrl: "/assets/videos/SetExtension.webm",
        },
        "PIP Reel": {
            youtubeEmbedUrl: "/assets/videos/PIP.webm",
        },
        "Creature Reel": {
            youtubeEmbedUrl: "/assets/videos/Creature.webm",
        },
        "Crowd Multiplication Reel": {
            youtubeEmbedUrl: "https://www.youtube.com/embed/87CuOfwFpd0",
        },
    };

    const adShowreels = {
        "Master Showreel": {
            embedUrl: "/assets/videos/MasterAds.webm",
        },
        "Automobile Showreel": {
            embedUrl: "/assets/videos/Automobile.webm",
        },
        "Liquids Showreel": {
            embedUrl:
                "https://drive.google.com/file/d/1f-DU2ZZ6qMsjfFYl7K8_TLwuZYnmFnTo/preview",
        },
    };

    const moviesShowcase = [
        {
            title: "Doctor Strange in the Multiverse of Madness",
            image: "/assets/images/vfx/showcase/Doctor-Strange-Multiverse-of-Madness.jpg",
            platform: "",
            year: "",
            category: "",
        },
        {
            title: "Dhurandhar",
            image: "/assets/images/vfx/showcase/Dhurandhar.jpg",
            platform: "",
            year: "",
            category: "",
        },
        {
            title: "Mission Impossible – Dead Reckoning",
            image: "/assets/images/vfx/showcase/Mission-Impossible-Dead-Reckoning.jpg",
            platform: "",
            year: "",
            category: "",
        },
        {
            title: "The Last of Us",
            image: "/assets/images/vfx/showcase/The-Last-of-Us.JPG",
            platform: "",
            year: "",
            category: "",
        },
        {
            title: "Pathan",
            image: "/assets/images/vfx/showcase/Pathan.jpg",
            platform: "",
            year: "",
            category: "",
        },
        {
            title: "Squid Game 3",
            image: "/assets/images/vfx/showcase/Squid-Games-3.jpg",
            platform: "",
            year: "",
            category: "",
        },
        {
            title: "The Family Man 3",
            image: "/assets/images/vfx/showcase/Family-Man.jpg",
            platform: "",
            year: "",
            category: "",
        },
        {
            title: "Witcher",
            image: "/assets/images/vfx/showcase/Witcher.jpg",
            platform: "",
            year: "",
            category: "",
        },
        {
            title: "Mirzapur Season 3",
            image: "/assets/images/vfx/showcase/Mirzapur-S3.jpg",
            platform: "",
            year: "",
            category: "",
        },
        {
            title: "The Sandman",
            image: "/assets/images/vfx/showcase/Sandman.jpg",
            platform: "",
            year: "",
            category: "",
        },
        {
            title: "Ant-Man and the Wasp: Quantumania",
            image: "/assets/images/vfx/showcase/Antman-Wasp-Quantumania.jpg",
            platform: "",
            year: "",
            category: "",
        },
        {
            title: "KGF",
            image: "/assets/images/vfx/showcase/KGF-2.jpg",
            platform: "",
            year: "",
            category: "",
        },
        {
            title: "Extraction 2",
            image: "/assets/images/vfx/showcase/Extraction-2.JPG",
            platform: "",
            year: "",
            category: "",
        },
        {
            title: "Secret Invasion",
            image: "/assets/images/vfx/showcase/Secret-Invasion.jpg",
            platform: "",
            year: "",
            category: "",
        },
        {
            title: "Citadel: Honey Bunny",
            image: "/assets/images/vfx/showcase/Citadel-Honey-Bunny.jpg",
            platform: "",
            year: "",
            category: "",
        },
        {
            title: "12th Fail",
            image: "/assets/images/vfx/showcase/12th-Fail.jpg",
            platform: "",
            year: "",
            category: "",
        },
        {
            title: "Red Notice",
            image: "/assets/images/vfx/showcase/Red-Notice.jpg",
            platform: "",
            year: "",
            category: "",
        },
        {
            title: "The Flash",
            image: "/assets/images/vfx/showcase/The-Flash.jpg",
            platform: "",
            year: "",
            category: "",
        },
        {
            title: "Rocket Boys",
            image: "/assets/images/vfx/showcase/Rocket-Boys.jpg",
            platform: "",
            year: "",
            category: "",
        },
        {
            title: "Senna",
            image: "/assets/images/vfx/showcase/Senna.JPG",
            platform: "",
            year: "",
            category: "",
        },
        {
            title: "See Season 3",
            image: "/assets/images/vfx/showcase/SEE.jpg",
            platform: "",
            year: "",
            category: "",
        },
        {
            title: "Karate Kid",
            image: "/assets/images/vfx/showcase/Karate-Kids-Legends.jpg",
            platform: "",
            year: "",
            category: "",
        },
        {
            title: "Upload",
            image: "/assets/images/vfx/showcase/Upload-Complete.jpg",
            platform: "",
            year: "",
            category: "",
        },
        {
            title: "Ted",
            image: "/assets/images/vfx/showcase/TED.jpg",
            platform: "",
            year: "",
            category: "",
        },
        {
            title: "Dept. Q",
            image: "/assets/images/vfx/showcase/Dept-Q.jpg",
            platform: "",
            year: "",
            category: "",
        },
        {
            title: "Karthikeya 2",
            image: "/assets/images/vfx/showcase/Kartikeya\ 2.jpg",
            platform: "",
            year: "",
            category: "",
        },
        {
            title: "Baaghi 4",
            image: "/assets/images/vfx/showcase/Baaghi-4.jpg",
            platform: "",
            year: "",
            category: "",
        },
        {
            title: "Chandigarh Kare Aashiqui",
            image: "/assets/images/vfx/showcase/Chandigarh-Kare-Aashiqui.jpg",
            platform: "",
            year: "",
            category: "",
        },
        {
            title: "Orville 3",
            image: "/assets/images/vfx/showcase/Orville.jpg",
            platform: "",
            year: "",
            category: "",
        },
        {
            title: "Fraggle Rock",
            image: "/assets/images/vfx/showcase/Fraggle-Rock.jpg",
            platform: "",
            year: "",
            category: "",
        },
        {
            title: "Anaconda",
            image: "/assets/images/vfx/showcase/Anaconda.jpg",
            platform: "",
            year: "",
            category: "",
        },
        {
            title: "Heropanti 2",
            image: "/assets/images/vfx/showcase/Heropanti-2.jpg",
            platform: "",
            year: "",
            category: "",
        },
        {
            title: "Baaghi 3",
            image: "/assets/images/vfx/showcase/Baaghi-3.jpg",
            platform: "",
            year: "",
            category: "",
        },
        {
            title: "Wendell & Wild",
            image: "/assets/images/vfx/showcase/Wendell-&-Wild.jpg",
            platform: "",
            year: "",
            category: "",
        },
        {
            title: "Mike",
            image: "/assets/images/vfx/showcase/Mike.jpg",
            platform: "",
            year: "",
            category: "",
        },
        {
            title: "Star Wars: The Empire Strikes Back",
            image: "/assets/images/vfx/showcase/The Empire.jpg",
            platform: "",
            year: "",
            category: "",
        },
        {
            title: "Tu Meri Main Tera Main Tera Tu Meri",
            image: "/assets/images/vfx/showcase/Tu-Meri-Main-Tera-Main-Tera-Tu-Meri.jpg",
            platform: "",
            year: "",
            category: "",
        },
        {
            title: "Mumbai Diaries",
            image: "/assets/images/vfx/showcase/Mumbai-Diaries.jpg",
            platform: "",
            year: "",
            category: "",
        },
        // Append any remaining movies not in the above order (preserve their object contents)
        {
            title: "The Batman",
            image: "/assets/images/vfx/showcase/Batman.jpg",
            platform: "",
            year: "",
            category: "",
        },
        {
            title: "Beauty in Back",
            image: "/assets/images/vfx/showcase/Beauty-in-Black-2.jpg",
            platform: "",
            year: "",
            category: "",
        },
        {
            title: "Bhediya",
            image: "/assets/images/vfx/showcase/Bhediya.jpg",
            platform: "",
            year: "",
            category: "",
        },
        {
            title: "Sadak 2",
            image: "/assets/images/vfx/showcase/Sadak-2.jpg",
            platform: "",
            year: "",
            category: "",
        },
        {
            title: "Soorarai Pottru",
            image: "/assets/images/vfx/showcase/Soorarai Pottru.jpg",
            platform: "",
            year: "",
            category: "",
        },
        {
            title: "Star Girl",
            image: "/assets/images/vfx/showcase/Stargirl.jpg",
            platform: "",
            year: "",
            category: "",
        },
        // REMOVE the duplicate "The Flash" with image containing "The-Flash 8"
        // {
        //   title: "The Flash",
        //   image:
        //     "https://resonancedigital.in/assets/images/VFX/movies/The-Flash 8.jpg",
        //   platform: "",
        //   year: "",
        //   category: "",
        // },
        {
            title: "Tulsa King",
            image: "/assets/images/vfx/showcase/Tulsa-King.jpg",
            platform: "",
            year: "",
            category: "",
        },
        {
            title: "The Umbrella Academy 3",
            image: "/assets/images/vfx/showcase/Umbrella-Academy.jpg",
            platform: "",
            year: "",
            category: "",
        },
        {
            title: "Land Of Bad",
            image: "/assets/images/vfx/showcase/Land-of-Bad.JPG",
            platform: "",
            year: "",
            category: "",
        },
        // REMOVE the duplicate "Mission Impossible: Dead Reckoning" with image containing "Unconfirmed-520721"
        // {
        //   title: "Mission Impossible: Dead Reckoning",
        //   image:
        //     "https://resonancedigital.in/assets/images/VFX/movies/Unconfirmed-520721.JPG",
        //   platform: "",
        //   year: "",
        //   category: "",
        // },
        {
            title: "Winning Time",
            image: "/assets/images/vfx/showcase/Winning-Time.jpg",
            platform: "",
            year: "",
            category: "",
        },
        // REMOVE the duplicate "Senna" with image containing "Unconfirmed-977985"
        // {
        //   title: "Senna",
        //   image:
        //     "https://resonancedigital.in/assets/images/VFX/movies/Unconfirmed-977985.JPG",
        //   platform: "",
        //   year: "",
        //   category: "",
        // },
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
            src: "/assets/videos/OPPO.webm",
            label: "OPPO AI Best Face",
        },
        {
            src: "/assets/videos/Indigo.webm",
            label: "Indigo Protect Plus",
        },
        { src: "/assets/videos/Campa.webm", label: "Campa Energy" },
        { src: "/assets/videos/Black_Dog.webm", label: "Black Dog" },
        { src: "/assets/videos/SUPERBET.webm", label: "SUPERBET" },
        {
            src: "/assets/videos/Fastrack.webm",
            label: "Fastrack Smart",
        },
        { src: "/assets/videos/Bournvita.webm", label: "Bournvita" },
        { src: "/assets/videos/Honda.webm", label: "Honda Amaze" },
        { src: "/assets/videos/oreo.webm", label: "Oreo" },
        {
            src: "/assets/videos/Ecolink.webm",
            label: "Ecolink BLDC Fans",
        },
        {
            src: "/assets/videos/Apollo_Tyres.webm",
            label: "Apollo Apterra Tyres",
        },
        { src: "/assets/videos/JK_Cement.webm", label: "JK Cement" },
        {
            src: "/assets/videos/Director_Special.webm",
            label: "Director Special Elaichi",
        },
        { src: "/assets/videos/KitKat.webm", label: "Kit Kat" },
        { src: "/assets/videos/Max_Fashion.webm", label: "Max Fashion" },
        {
            src: "/assets/videos/Mahindra.webm",
            label: "The Plush New XUV500",
        },
        {
            src: "/assets/videos/Savsol.webm",
            label: "Savsol Lubricants",
        },
        {
            src: "/assets/videos/Flipkart.webm",
            label: "Flipkart Big Bang Diwali",
        },
        {
            src: "/assets/videos/Acko.webm",
            label: "The Fast & The Fair - ACKO",
        },
        {
            src: "/assets/videos/Netflix2021.webm",
            label: "Netflix End of Year 2021",
        },
        {
            src: "/assets/videos/Exclusive Deleted Scenes Netflix Playback 2022.webm",
            label: "Netflix End of Year 2022",
        },
        {
            src: "/assets/videos/Netflix2023.webm",
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
        "split",
        "full",
        "split",
        "split",
        "full",
    ] as const;

    type AdLayoutType = (typeof LAYOUT_PATTERN)[number];
    type AdBlock = { type: AdLayoutType; videos: typeof adsVideoFeed };

    const videoCounts: Record<AdLayoutType, number> = {
        full: 1,
        split: 2,
        T: 3,
        grid2x2: 4,
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
            {src.endsWith(".webm") ? (
                <video
                    src={src}
                    title={label}
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    data-autopause="true"
                />
            ) : (
                <iframe
                    src={src}
                    title={label}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            )}
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />
            <p className="absolute bottom-6 left-6 text-[#f2eee2] font-display text-xl font-bold pointer-events-none">
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

    useEffect(() => {
        const videos = document.querySelectorAll(
            "video[data-autopause='true']"
        );

        videoObserverRef.current?.disconnect();

        videoObserverRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const video = entry.target as HTMLVideoElement;

                    if (entry.isIntersecting) {
                        video.play().catch(() => { });
                    } else {
                        video.pause();
                    }
                });
            },
            { threshold: 0.2 }
        );

        videos.forEach((video) => {
            videoObserverRef.current?.observe(video);
        });

        return () => {
            videoObserverRef.current?.disconnect();
        };
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
    const totalMoviePages = movieShowcasePages.length;

    useEffect(() => {
        if (totalMoviePages <= 1 || expandedSection !== "movies") return;

        const timer = window.setInterval(() => {
            setCurrentMovieIndex((prev) => {
                const currentPage = Math.floor(prev / ITEMS_PER_PAGE);
                const nextPage = (currentPage + 1) % totalMoviePages;
                return nextPage * ITEMS_PER_PAGE;
            });
        }, MOVIE_AUTO_ROTATE_MS);

        return () => window.clearInterval(timer);
    }, [expandedSection, totalMoviePages]);

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
                        <h1 className="font-display text-[35px] md:text-[95px] lg:text-[105px] font-bold text-[#4ab6ff] mb-6 leading-tight">
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
                    className="relative w-full overflow-hidden bg-black"
                >
                    {/* ── DESKTOP: diagonal split (unchanged) ── */}
                    <div className="hidden md:block relative w-full h-screen">
                        {/* Full-bleed movies image as base layer — prevents black corners showing through clip gaps */}
                        <img
                            src="/assets/images/vfx/movie-background-leg.jpg"
                            alt=""
                            aria-hidden="true"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        {/* Movies (Left, diagonally clipped) */}
                        <div
                            onClick={() => handleExpand("movies")}
                            onMouseEnter={() => setHoveredSide("movies")}
                            onMouseLeave={() => setHoveredSide(null)}
                            className="absolute inset-0 overflow-hidden group cursor-pointer transition-all duration-700"
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
                                src="/assets/images/vfx/movie-background-leg.jpg"
                                alt="Movies"
                                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                            />
                            <div
                                className={`absolute inset-0 pointer-events-none transition-all duration-500 ${hoveredSide === "ads"
                                    ? "bg-black/0"
                                    : "bg-black/45 group-hover:bg-black/25"
                                    }`}
                            />
                            <h2 className="absolute left-5 top-1/2 -translate-y-1/2 font-display text-[88px] font-bold text-white group-hover:text-[#4ab6ff] transition-all duration-500 group-hover:scale-105">
                                Films & Episodic
                            </h2>
                        </div>

                        {/* Ads (Right, diagonally clipped) */}
                        <div
                            onClick={() => handleExpand("ads")}
                            onMouseEnter={() => setHoveredSide("ads")}
                            onMouseLeave={() => setHoveredSide(null)}
                            className="absolute inset-0 overflow-hidden group cursor-pointer transition-all duration-700"
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
                            <div className="absolute inset-0 pointer-events-none bg-black/45 transition-all duration-500 group-hover:bg-black/25" />
                            <h2 className="absolute right-5 top-1/2 -translate-y-1/2 font-display text-[88px] font-bold text-white group-hover:text-[#4ab6ff] transition-all duration-500 group-hover:scale-105">
                                Advertising
                            </h2>
                        </div>
                    </div>

                    {/* ── MOBILE: vertical equivalent of the desktop diagonal split ── */}
                    {/* Same two panels, same images, same titles, same onClick —
              clipPath axes swapped so the diagonal cut runs horizontally
              and the panels stack top (Films) / bottom (Ads). */}
                    <div
                        className="md:hidden relative w-full"
                        style={{ height: "100svh" }}
                    >
                        {/* Base layer — films image fills the seam gap between the two clips */}
                        <img
                            src="/assets/images/vfx/movie-background-leg.jpg"
                            alt=""
                            aria-hidden="true"
                            className="absolute inset-0 w-full h-full object-cover"
                        />

                        {/* Films & Episodic — top panel, clipped with a horizontal diagonal */}
                        <div
                            onClick={() => handleExpand("movies")}
                            className="absolute inset-0 overflow-hidden cursor-pointer transition-all duration-700"
                            style={{
                                clipPath: "polygon(0 0, 100% 0, 100% 62%, 0 45%)",
                            }}
                        >
                            <img
                                src="/assets/images/vfx/movie-background-leg.jpg"
                                alt="Movies"
                                className="w-full h-full object-cover"
                            />
                            <h2 className="absolute z-10 left-5 top-1/3 -translate-y-1/2 font-display text-[13vw] font-bold text-theme-primaryText">
                                Films & Episodic
                            </h2>
                        </div>

                        {/* Advertising — bottom panel, clipped mirror */}
                        <div
                            onClick={() => handleExpand("ads")}
                            className="absolute inset-0 overflow-hidden cursor-pointer transition-all duration-700"
                            style={{
                                clipPath: "polygon(0 58%, 100% 42%, 100% 100%, 0 100%)",
                            }}
                        >
                            <img
                                src="/assets/images/vfx/ads-showreel.jpg"
                                alt="Ads"
                                className="w-full h-full object-cover"
                            />
                            <h2 className="absolute z-10 right-5 bottom-1/3 translate-y-1/2 font-display text-[13vw] font-bold text-theme-primaryText">
                                Advertising
                            </h2>
                        </div>
                    </div>
                </section>
            )}

            {/* Back Button for Expanded Movies or Ads */}
            {expandedSection && (
                <button
                    onClick={handleCollapse}
                    className="fixed top-32 md:top-36 right-8 z-[40] bg-[#4ab6ff] hover:bg-[#4ab6ff]/80 text-[#201c50] px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                >
                    ← Back
                </button>
            )}

            {/* Expanded Movies Section */}
            {expandedSection === "movies" && (
                <div ref={expandedContentRef} className="w-full">
                    {/* Hero Section */}
                    <section className="relative w-full min-h-screen bg-theme-primaryBg1 flex flex-col justify-center px-6 md:px-12 lg:px-24 py-24">
                        {/* FixedHero-style Background */}
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                            style={{
                                backgroundImage: `url('/assets/images/vfx/movie-background-leg.jpg')`,
                            }}
                        />
                        <div className="absolute inset-0 bg-black/60" />
                        {/* Main Title */}
                        <div className="relative z-10 max-w-6xl w-full mt-20">
                            <h1 className="font-display text-[45px] md:text-[95px] lg:text-[105px] font-bold text-[#4ab6ff] mb-10 leading-tight">
                                VFX: Films & Episodic
                            </h1>

                            {/* Description */}
                            <AnimatedColorText
                                whiteText="We bring stories to life with cutting-edge visual effects that captivate audiences worldwide."
                                blueText="Our team has contributed to major productions across streaming platforms and theatrical releases, creating immersive worlds and unforgettable moments."
                            />
                        </div>
                    </section>

                    {/* featured projects section */}
                    <section className="mt-0 px-12 md:px-24 py-24 bg-theme-primaryBg1">
                        <div className="max-w-7xl mx-auto">
                            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-[#f2eee2] mb-4">
                                VFX: Films & Episodic <span className="text-[#4ab6ff]">|</span>{" "}
                                <span className="text-[#f2eee2]/60 font-bold">Showcase</span>
                            </h2>
                        </div>
                    </section>

                    {/* Movies Showcase Carousel */}
                    <section className="relative w-full bg-theme-primaryBg1 px-12 md:px-24 pb-32">
                        <div className="max-w-7xl mx-auto">
                            <div className="relative">
                                {/* Carousel Navigation */}
                                <button
                                    onClick={handleMoviePrev}
                                    disabled={currentMovieIndex === 0}
                                    className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 w-12 h-12 rounded-full flex items-center justify-center text-[#f2eee2] transition-all duration-300 ${currentMovieIndex === 0
                                        ? "bg-[#4ab6ff]/10 cursor-not-allowed opacity-50"
                                        : "bg-[#4ab6ff]/20 hover:bg-[#4ab6ff]/40 cursor-pointer"
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
                                                className="
  shrink-0
  min-w-full
  grid
  grid-cols-1
  md:grid-cols-2
  lg:grid-cols-4
  gap-6
  max-w-sm
  mx-auto
  md:max-w-none
"
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
                                                            loading="lazy"
                                                            decoding="async"
                                                        />

                                                        {/* Hover Overlay */}
                                                        <div className="absolute inset-0 bg-[#4ab6ff]/0 group-hover:bg-[#4ab6ff]/20 transition-all duration-500" />

                                                        {/* Title overlay on hover */}
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                                                            <div>
                                                                <p className="text-[#f2eee2] font-bold text-lg">
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
                                    className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 w-12 h-12 rounded-full flex items-center justify-center text-[#f2eee2] transition-all duration-300 ${currentMovieIndex + ITEMS_PER_PAGE >= moviesShowcase.length
                                        ? "bg-[#4ab6ff]/10 cursor-not-allowed opacity-50"
                                        : "bg-[#4ab6ff]/20 hover:bg-[#4ab6ff]/40 cursor-pointer"
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
                  <p className="text-[#f2eee2]/80 text-lg leading-relaxed mb-4">
                    We bring stories to life with cutting-edge visual effects that captivate audiences worldwide. Our team has contributed to major productions across streaming platforms and theatrical releases.
                  </p>
                  <p className="text-[#f2eee2]/60 text-base leading-relaxed">
                    From concept art to final compositing, we deliver VFX that seamlessly blend with live-action footage, creating immersive worlds and unforgettable moments.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                    <h4 className="text-[#4ab6ff] font-semibold text-xl mb-2">Our Expertise</h4>
                    <ul className="text-[#f2eee2]/70 space-y-2">
                      <li>• CGI & Digital Animation</li>
                      <li>• Motion Capture & Performance</li>
                      <li>• Virtual Production</li>
                      <li>• Color Grading & Finishing</li>
                    </ul>
                  </div>
                </div>
              </div> */}

                            {/* Areas of Expertise Section */}
                            <section className="py-24 bg-theme-secondaryBg1 -mx-12 md:-mx-24 px-12 md:px-24">
                                <h2 className="font-display text-4xl md:text-5xl font-light text-[#f2eee2] mb-4">
                                    VFX: Films & Episodic{" "}
                                    <span className="text-[#4ab6ff]">|</span>{" "}
                                    <span className="text-[#f2eee2]/60 font-bold">Showreel</span>
                                </h2>

                                {/* Category Filter */}
                                <div className="mt-8 mb-12">
                                    <div className="md:flex md:flex-wrap hidden gap-y-1 gap-x-0 text-xl md:text-4xl lg:text-5xl font-bold leading-relaxed tracking-tighter">
                                        {movieCategories.map((category, index) => (
                                            <div key={category} className="flex items-center">
                                                <button
                                                    onClick={() => setSelectedMovieCategory(category)}
                                                    className={`transition-colors duration-300 ${selectedMovieCategory === category
                                                        ? "text-[#4ab6ff]"
                                                        : "text-[#f2eee2]/40 hover:text-[#4ab6ff]"
                                                        }`}
                                                >
                                                    {category}
                                                </button>
                                                {index < movieCategories.length - 1 && (
                                                    <span className="text-[#f2eee2]/30 mx-4">|</span>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                    {/* Mobile-friendly showreel selector */}
                                    <div className="md:hidden flex items-center overflow-x-auto whitespace-nowrap scrollbar-hide pb-2 text-lg font-bold tracking-tight">
                                        {movieCategories.map((category, index) => (
                                            <div
                                                key={category}
                                                className="flex items-center shrink-0"
                                            >
                                                <button
                                                    onClick={() => setSelectedMovieCategory(category)}
                                                    className={`transition-colors duration-300 ${selectedMovieCategory === category
                                                        ? "text-[#4ab6ff]"
                                                        : "text-[#f2eee2]/40"
                                                        }`}
                                                >
                                                    {category}
                                                </button>
                                                {index < movieCategories.length - 1 && (
                                                    <span className="text-[#f2eee2]/30 mx-3">|</span>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Showreel Display */}
                                {selectedMovieShowreel && (
                                    <div className="w-full">
                                        <div className="relative aspect-video md:aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10">
                                            {selectedMovieShowreel.youtubeEmbedUrl.endsWith(
                                                ".webm",
                                            ) ? (
                                                <video
                                                    key={selectedMovieCategory}
                                                    src={selectedMovieShowreel.youtubeEmbedUrl}
                                                    className="w-full h-full"
                                                    controls
                                                    muted
                                                    playsInline
                                                    preload="metadata"
                                                    data-autopause="true"
                                                />
                                            ) : (
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
                                            )}
                                        </div>
                                    </div>
                                )}
                            </section>

                            {/* Security Certifications Section */}
                            <div className="mt-0 mb-0 -mx-12 md:-mx-24 px-12 md:px-24 py-24 bg-theme-primaryBg1">
                                <div className="flex flex-col lg:flex-row gap-12 items-center">
                                    {/* Left Side - Text Content */}
                                    <div className="flex-1">
                                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#4ab6ff] mb-8 leading-tight">
                                            Security
                                            <br />
                                            Certifications
                                        </h2>

                                        <p className="text-[#f2eee2] text-lg md:text-xl leading-relaxed">
                                            <span className="font-semibold">
                                                TPN Gold Shield Certification
                                            </span>{" "}
                                            and security compliance with{" "}
                                            <span className="font-semibold">
                                                Warner Bros, Lionsgate, Universal Pictures, Paramount,
                                                Starz, Amazon Studios, Netflix and ABC
                                            </span>{" "}
                                            validate our commitment to safeguarding client content and
                                            IP.
                                        </p>
                                    </div>

                                    {/* Right Side - Company Logos Image */}
                                    <div className="flex-1 min-w-0 overflow-hidden rounded-2xl h-[320px] md:h-[420px] relative">
                                        <img
                                            src="/assets/images/vfx/Security-Certification.png"
                                            alt="Company Logos - TPN, Warner Bros, Amazon Studios, Lionsgate, Netflix, Universal"
                                            className="absolute top-0 right-0 h-full object-cover object-right"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Films & Episodic Clients Section */}
                            <div className="mt-0 mb-0 -mx-12 md:-mx-24 px-12 md:px-24 py-24 bg-theme-secondaryBg1">
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
                                            src="/assets/images/vfx/Films-and-episodic-client.png"
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
                <div ref={expandedContentRef} className="w-full">
                    {/* Hero Section */}
                    <section className="relative w-full min-h-screen bg-theme-primaryBg1 flex flex-col justify-center px-6 md:px-12 lg:px-24 py-24">
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                            style={{
                                backgroundImage: `url('/assets/images/vfx/ads-showreel.jpg')`,
                            }}
                        />
                        <div className="absolute inset-0 bg-black/60" />
                        {/* Main Title */}
                        <div className="relative z-10 max-w-6xl w-full mt-20">
                            <h1 className="font-display text-[45px] md:text-[95px] lg:text-[105px] font-bold text-[#4ab6ff] mb-10 leading-tight">
                                VFX: Advertising
                            </h1>

                            {/* Description */}
                            <AnimatedColorText
                                whiteText="Crafting compelling commercial content that resonates with audiences and drives results."
                                blueText="From concept to final delivery, we blend creativity with strategic thinking to produce commercials that make an impact across all platforms."
                            />
                        </div>
                    </section>

                    {/* Areas of Expertise Section */}
                    <section className="px-12 md:px-24 py-24 bg-theme-secondaryBg1">
                        <div className="max-w-7xl mx-auto translate-y-8">
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#f2eee2] mb-4">
                                VFX: Advertising <span className="text-[#4ab6ff]">|</span>{" "}
                                <span className="text-[#f2eee2]/60">Showreel</span>
                            </h2>

                            <div className="mt-8 mb-12">
                                <div className="hidden md:flex flex-wrap gap-y-4 gap-x-0 text-2xl md:text-3xl lg:text-4xl font-semibold leading-relaxed">
                                    {adCategories.map((category, index) => (
                                        <div key={category} className="flex items-center">
                                            <button
                                                onClick={() => setSelectedAdCategory(category)}
                                                className={`transition-colors duration-300 ${selectedAdCategory === category
                                                    ? "text-[#4ab6ff]"
                                                    : "text-[#f2eee2]/40 hover:text-[#4ab6ff]"
                                                    }`}
                                            >
                                                {category}
                                            </button>
                                            {index < adCategories.length - 1 && (
                                                <span className="text-[#f2eee2]/30 mx-5">|</span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                                {/* Mobile-friendly Ads showreel selector */}
                                <div className="md:hidden flex items-center overflow-x-auto whitespace-nowrap scrollbar-hide pb-2 text-lg font-bold tracking-tight">
                                    {adCategories.map((category, index) => (
                                        <div key={category} className="flex items-center shrink-0">
                                            <button
                                                onClick={() => setSelectedAdCategory(category)}
                                                className={`transition-colors duration-300 ${selectedAdCategory === category
                                                    ? "text-[#4ab6ff]"
                                                    : "text-[#f2eee2]/40"
                                                    }`}
                                            >
                                                {category}
                                            </button>
                                            {index < adCategories.length - 1 && (
                                                <span className="text-[#f2eee2]/30 mx-3">|</span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {adShowreels[selectedAdCategory as keyof typeof adShowreels] && (
                                <div className="w-full">
                                    <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10">
                                        {adShowreels[
                                            selectedAdCategory as keyof typeof adShowreels
                                        ].embedUrl.endsWith(".webm") ? (
                                            <video
                                                key={selectedAdCategory}
                                                src={
                                                    adShowreels[
                                                        selectedAdCategory as keyof typeof adShowreels
                                                    ].embedUrl
                                                }
                                                className="w-full h-full"
                                                controls
                                                playsInline
                                                preload="metadata"
                                                data-autopause="true"
                                            />
                                        ) : (
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
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </section>

                    {/* ── Ads Video Feed ─────────────────────────────────────────────────── */}
                    {/* The section is a continuous dark canvas of 16:9 cards.             */}
                    {/* Layout alternates between full, split, T, 2×2, and inverted-T.     */}
                    {/* Ads immersive video feed — dynamic, driven by adsVideoFeed + LAYOUT_PATTERN */}
                    <div className="w-full bg-theme-primaryBg1 p-3 flex flex-col gap-3">
                        {adBlocks.map((block, blockIdx) => {
                            const [v0, v1, v2, v3] = block.videos;
                            switch (block.type) {
                                case "full":
                                    return (
                                        <div
                                            key={blockIdx}
                                            className="relative w-full aspect-video overflow-hidden rounded-sm"
                                        >
                                            {v0.src.endsWith(".webm") ? (
                                                <video
                                                    src={v0.src}
                                                    className="absolute inset-0 w-full h-full object-cover"
                                                    autoPlay
                                                    muted
                                                    loop
                                                    playsInline
                                                    preload="metadata"
                                                    data-autopause="true"
                                                />
                                            ) : (
                                                <iframe
                                                    src={v0.src}
                                                    title={v0.label}
                                                    loading="lazy"
                                                    className="absolute inset-0 w-full h-full"
                                                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    allowFullScreen
                                                />
                                            )}
                                            <div className="absolute inset-0 bg-black/20" />
                                            <p className="absolute bottom-8 left-8 text-[#f2eee2] font-display text-2xl font-bold tracking-wide">
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

                                default:
                                    return null;
                            }
                        })}
                    </div>

                    <section className="px-12 md:px-24 py-24 bg-theme-secondaryBg1">
                        <div className="max-w-7xl mx-auto">
                            {/* ── CGI Stills — full-bleed masonry grid ── */}
                            <h2 className="font-display text-4xl md:text-5xl font-light text-[#f2eee2] mb-10">
                                VFX: CGI Stills <span className="text-[#4ab6ff]">|</span>{" "}
                                <span className="text-[#f2eee2]/60 font-bold">Showcase</span>
                            </h2>

                            {/*
                Tailwind CSS-columns masonry: `columns-2 md:columns-3` sets 2 cols
                on mobile and 3 on md+. `gap-2` applies the column gutter.
                `break-inside-avoid` on each card stops images splitting across
                column boundaries. No JS / window.innerWidth needed.
              */}
                            <div className="w-full columns-2 md:columns-3 gap-2">
                                {cgiStillsShowcase.map((image, index) => {
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
                                            className={`group relative ${aspects[index % aspects.length]} overflow-hidden rounded-sm mb-2 break-inside-avoid`}
                                        >
                                            <img
                                                src={image}
                                                alt={`CGI Still ${index + 1}`}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                loading="lazy"
                                                decoding="async"
                                            />
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300 pointer-events-none" />
                                            {/* index badge — appears on hover */}
                                            <span className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[9px] text-[#f2eee2]/70 uppercase tracking-widest bg-black/50 backdrop-blur-sm px-2 py-0.5">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                </div>
            )}

            {/* Original Expandable Items Section - Only show when nothing is expanded */}
            {!expandedSection && (
                <section className="w-full bg-theme-primaryBg1">
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
