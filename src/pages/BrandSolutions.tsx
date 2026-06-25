import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimatedColorText from "../components/AnimatedColorText";
import FixedHero from "../components/FixedHero";
import { ChevronDown, Play, X } from "lucide-react";

type BrandShowcaseItem = {
    title: string;
    image: string;
    caseStudyImage?: string;
    galleryImages?: string[];
    /** Mobile-optimised images — portrait/square crops. Falls back to galleryImages if omitted. */
    mobileGalleryImages?: string[];
    client: string;
    year: string;
    service: string;
    objective?: string;
    approach?: string;
    impact?: string;
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
    videoSrc: string;
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

const tvcShowcase: TVCShowcaseItem[] = [
    {
        title: "Apollo Apterra Tyres",
        image: "/assets/images/Thumbnails/Apollo Apterra Tyres.jpg",
        client: "Apollo Tyres",
        year: "2025",
        videoSrc: "/assets/videos/Apollo_Tyres.webm",
    },
    {
        title: "OPPO AI Best Face",
        image: "/assets/images/Thumbnails/OPPO Reno12 Series.jpg",
        client: "OPPO",
        year: "2024",
        videoSrc: "/assets/videos/OPPO.webm",
    },
    {
        title: "IndiGo Protect Plus",
        image: "/assets/images/Thumbnails/Indigo Protect Plus.jpg",
        client: "IndiGo",
        year: "2024",
        videoSrc: "/assets/videos/Indigo.webm",
    },
    {
        title: "Campa Energy",
        image: "/assets/images/Thumbnails/Campa Energy TVC.jpg",
        client: "Campa",
        year: "2024",
        videoSrc: "/assets/videos/Campa.webm",
    },
    {
        title: "Black Dog",
        image: "/assets/images/Thumbnails/Black Dog.jpg",
        client: "Black Dog",
        year: "2024",
        videoSrc: "/assets/videos/Black_Dog.webm",
    },
    {
        title: "Superbet",
        image: "/assets/images/Thumbnails/SUPERBET.jpg",
        client: "SUPERBET",
        year: "2024",
        videoSrc: "/assets/videos/Superbet.webm",
    },
    {
        title: "Fastrack Smart",
        image: "/assets/images/Thumbnails/Fastrack Smart.jpg",
        client: "Fastrack",
        year: "2024",
        videoSrc: "/assets/videos/Fastrack.webm",
    },
    {
        title: "Bournvita",
        image: "/assets/images/Thumbnails/Bournvita.jpg",
        client: "Bournvita",
        year: "2024",
        videoSrc: "/assets/videos/Bournvita.webm",
    },
    {
        title: "The All-New Honda Amaze",
        image: "/assets/images/Thumbnails/The All-New Honda Amaze.jpg",
        client: "Honda",
        year: "2024",
        videoSrc: "/assets/videos/Honda.webm",
    },
    {
        title: "Ecolink BLDC Fans",
        image: "/assets/images/Thumbnails/Ecolink BLDC Fans.jpg",
        client: "Ecolink",
        year: "2024",
        videoSrc: "/assets/videos/Ecolink.webm",
    },
    {
        title: "JK Cement",
        image: "/assets/images/Thumbnails/JK Cement.jpg",
        client: "JK Cement",
        year: "2024",
        videoSrc: "/assets/videos/JK_Cement.webm",
    },
    {
        title: "Director Special Elaichi",
        image: "/assets/images/Thumbnails/Director Special Elaichi.jpg",
        client: "Director Special",
        year: "2024",
        videoSrc: "/assets/videos/Director_Special.webm",
    },
    {
        title: "Kit Kat",
        image: "/assets/images/Thumbnails/Kitkat.jpg",
        client: "Kit Kat",
        year: "2024",
        videoSrc: "/assets/videos/KitKat.webm",
    },
    {
        title: "Max Fashion",
        image: "/assets/images/Thumbnails/Max Fashion.jpg",
        client: "Max Fashion",
        year: "2024",
        videoSrc: "/assets/videos/Max_Fashion.webm",
    },
    {
        title: "The Plush New XUV500",
        image: "/assets/images/Thumbnails/The Plush New XUV500.jpg",
        client: "Mahindra",
        year: "2018",
        videoSrc: "/assets/videos/Mahindra.webm",
    },
    {
        title: "Savsol Lubricants",
        image: "/assets/images/Thumbnails/Savsol Lubricants.jpg",
        client: "Savsol",
        year: "2024",
        videoSrc: "/assets/videos/Savsol.webm",
    },
    {
        title: "Flipkart Big Bang Diwali",
        image: "/assets/images/Thumbnails/Flipkart Big Bang Diwali.jpg",
        client: "Flipkart",
        year: "2024",
        videoSrc: "/assets/videos/Flipkart.webm",
    },
    {
        title: "The Fast & The Fair",
        image: "/assets/images/Thumbnails/The Fast & The Fair-Acko.jpg",
        client: "ACKO",
        year: "2024",
        videoSrc: "/assets/videos/Acko.webm",
    },
    {
        title: "Netflix End of Year 2021",
        image: "/assets/images/Thumbnails/Netflix end of the year 2021.jpg",
        client: "Netflix",
        year: "2021",
        videoSrc: "/assets/videos/Netflix2021.webm",
    },
    {
        title: "Netflix End of Year 2022",
        image: "/assets/images/Thumbnails/Netflix end of the year 2022.jpg",
        client: "Netflix",
        year: "2022",
        videoSrc: "/assets/videos/Netflix2022.webm",
    },
    {
        title: "Netflix End of Year 2023",
        image: "/assets/images/Thumbnails/Netflix23.jpg",
        client: "Netflix",
        year: "2023",
        videoSrc: "/assets/videos/Netflix2023.webm",
    },
];

const brandStatements = [
    {
        title: "Social Media Management",
        body: "Building meaningful digital presence through strategic content, community engagement, platform management and performance-driven social media growth.",
    },
    {
        title: "Content and Copy",
        body: "Crafting compelling narratives, impactful messaging and original content that strengthens brand identity and drives audience connection.",
    },
    {
        title: "Print, OOH and Mainline",
        body: "Creating attention-grabbing campaigns across print, outdoor and traditional media to maximise visibility and brand recall.",
    },
    {
        title: "Brand Launch and Rebranding",
        body: "From market entry to transformation, we build distinctive brand identities that inspire trust and long-term recognition.",
    },
    {
        title: "Graphic Design, Iconography and Illustration",
        body: "Designing visually compelling assets, custom illustrations and brand elements that communicate ideas with clarity and creativity.",
    },
    {
        title: "Video Editing and Animation",
        body: "Transforming concepts into engaging visual stories through dynamic editing, motion graphics and high-quality animation.",
    },
    {
        title: "Film Production, AVs and Product Photography",
        body: "Producing cinematic films, corporate AVs and professional photography that showcase brands, products and experiences effectively.",
    },
    {
        title: "Campaign Planning",
        body: "Developing integrated campaigns that align objectives, audiences, channels and creative execution for measurable impact.",
    },
];

const caseStudyShowcase: BrandShowcaseItem[] = [
    {
        title: "MORDE",
        image: "/assets/images/CaseStudies/Morde/MordThumb.png",
        caseStudyImage: "/assets/images/CaseStudies/Morde/MordThumb.png",
        galleryImages: [
            "/assets/images/CaseStudies/Morde/2.png",
            "/assets/images/CaseStudies/Morde/3.png",
            "/assets/images/CaseStudies/Morde/4.png",
        ],
        mobileGalleryImages: [
            "/assets/images/CaseStudies/Morde/Morde1-01.png",
            "/assets/images/CaseStudies/Morde/Morde1-03-01.png",
            "/assets/images/CaseStudies/Morde/Morde1-0-01.png",
            "/assets/images/CaseStudies/Morde/Morde1-02-01.png",
        ],
        client: "MORDE",
        year: "2025",
        service: "Launch New Packaging",
        objective:
            "Refresh brand identity and drive engagement across B2B and B2C audiences.",
        approach:
            "Delivered an integrated solution across brochures, digital content, POSM, and social media, showcasing product range and new packaging.",
        impact:
            "Created a cohesive brand presence across touchpoints, driving both visibility and on-ground engagement.",
    },
    {
        title: "Killer Jeans",
        image: "/assets/images/CaseStudies/Killer/KillThumb.png",
        caseStudyImage: "/assets/images/CaseStudies/Killer/KillThumb.png",
        galleryImages: [
            "/assets/images/CaseStudies/Killer/2.png",
            "/assets/images/CaseStudies/Killer/3.png",
            "/assets/images/CaseStudies/Killer/4.png",
        ],
        mobileGalleryImages: [
            "/assets/images/CaseStudies/Killer/Killer1-3-01.png",
            "/assets/images/CaseStudies/Killer/Killer1-02-01.png",
            "/assets/images/CaseStudies/Killer/Killer1-01.png",
            "/assets/images/CaseStudies/Killer/Killer1-0-01.png",
        ],
        client: "Killer Jeans",
        year: "2024",
        service: "Original Content & Copywriting",
        objective:
            "Reinforce brand identity for a younger, style-forward audience.",
        approach:
            "Developed a bold, content-first strategy spanning print, social, and OOH, including influencer-led and trend-driven creatives.",
        impact:
            "Delivered scroll-stopping content that aligned with youth culture and increased digital traction.",
    },
    {
        title: "Netflix India",
        image: "/assets/images/CaseStudies/Netflix/NetfThumb.png",
        caseStudyImage: "/assets/images/CaseStudies/Netflix/NetfThumb.png",
        galleryImages: [
            "/assets/images/CaseStudies/Netflix/1.png",
            "/assets/images/CaseStudies/Netflix/2.png",
            "/assets/images/CaseStudies/Netflix/3.png",
            "/assets/images/CaseStudies/Netflix/4.png",
        ],
        client: "Netflix India",
        year: "2023",
        service: "Campaign Production",
        objective: "Drive engagement through culturally relevant storytelling.",
        approach:
            "Created end-of-year Playback campaigns for 2021, 2022, and 2023, delivering high-viewership content. Extended impact through brand collaborations like KitKat and award-winning work recognised at Kyoorius 2023.",
        impact:
            "Built high-recall, shareable content that amplified platform love and cultural relevance.",
    },
    {
        title: "CONOSH",
        image: "/assets/images/CaseStudies/Conosh/ConoThumb.png",
        caseStudyImage: "/assets/images/CaseStudies/Conosh/ConoThumb.png",
        galleryImages: [
            "/assets/images/CaseStudies/Conosh/1.png",
            "/assets/images/CaseStudies/Conosh/2.png",
            "/assets/images/CaseStudies/Conosh/3.png",
            "/assets/images/CaseStudies/Conosh/4.png",
            "/assets/images/CaseStudies/Conosh/5.png",
            "/assets/images/CaseStudies/Conosh/6.png",
        ],
        client: "CONOSH",
        year: "2025",
        service: "Brand Solutions",
        objective:
            "Build a community-driven culinary platform and grow digital presence.",
        approach:
            "Created an end-to-end ecosystem—social media, website, video content, and a flagship web series featuring celebrity chefs.",
        impact:
            "Scaled to 100K followers and established a strong content-led brand identity in the food space.",
    },
    {
        title: "OPPO",
        image: "/assets/images/CaseStudies/Oppo/OppoThumb.png",
        caseStudyImage: "/assets/images/CaseStudies/Oppo/OppoThumb.png",
        galleryImages: [
            "/assets/images/CaseStudies/Oppo/2.png",
            "/assets/images/CaseStudies/Oppo/3.png",
        ],
        client: "OPPO",
        year: "2024",
        service: "Video Editing & Animation",
        objective: "Bring AI capabilities to life in an engaging, humanised way.",
        approach:
            "Conceptualised and executed a mascot-led narrative, blending storytelling with product demonstration.",
    },
    {
        title: "Mahindra XUV 500",
        image: "/assets/images/CaseStudies/Mahindra/MahiThumb.png",
        caseStudyImage: "/assets/images/CaseStudies/Mahindra/MahiThumb.png",
        galleryImages: [
            "/assets/images/CaseStudies/Mahindra/1.png",
            "/assets/images/CaseStudies/Mahindra/2.png",
            "/assets/images/CaseStudies/Mahindra/3.png",
            "/assets/images/CaseStudies/Mahindra/4.png",
            "/assets/images/CaseStudies/Mahindra/5.png",
            "/assets/images/CaseStudies/Mahindra/6.png",
        ],
        client: "Mahindra XUV 500",
        year: "2018",
        service: "Campaign Production",
        objective: "Showcase product innovation and elevate brand perception.",
        approach:
            "Delivered high-quality product films and full-CG executions, highlighting design, performance, and features.",
        impact:
            "Positioned Mahindra as a tech-forward automotive brand, including executing India's first end-to-end CG car launch.",
    },
    {
        title: "Vraj Group",
        image: "/assets/images/CaseStudies/Vraj/VrajThumb.png",
        caseStudyImage: "/assets/images/CaseStudies/Vraj/VrajThumb.png",
        galleryImages: [
            "/assets/images/CaseStudies/Vraj/2.png",
            "/assets/images/CaseStudies/Vraj/3.png",
            "/assets/images/CaseStudies/Vraj/4.png",
        ],
        mobileGalleryImages: [
            "/assets/images/CaseStudies/Vraj/Vraj_1-01.png",
            "/assets/images/CaseStudies/Vraj/Vraj_1-02-01.png",
            "/assets/images/CaseStudies/Vraj/Vraj_0-01.png",
            "/assets/images/CaseStudies/Vraj/Vraj_1-3-01.png",
        ],
        client: "Vraj Group",
        year: "2024",
        service: "Brand Campaign",
        objective: "Build a premium project identity.",
        approach: "Designed branding, visual language, and high-end collateral.",
        impact: "Delivered a refined, luxury positioning.",
    },
    {
        title: "Estuary",
        image: "/assets/images/CaseStudies/Estuary/EstuThumb.png",
        caseStudyImage: "/assets/images/CaseStudies/Estuary/EstuThumb.png",
        galleryImages: [
            "/assets/images/CaseStudies/Estuary/1.png",
            "/assets/images/CaseStudies/Estuary/2.png",
            "/assets/images/CaseStudies/Estuary/3.png",
            "/assets/images/CaseStudies/Estuary/4.png",
        ],
        client: "Estuary",
        year: "2020",
        service: "Digital Marketing",
        objective: "Establish a premium identity in a niche category.",
        approach:
            "Built a refined brand language across packaging, digital, website, and films.",
        impact: "Positioned the brand as aspirational and category-defining.",
    },
    {
        title: "Calamus One - Ultrabike",
        image: "/assets/images/CaseStudies/Calumus/CaluThumb.png",
        caseStudyImage: "/assets/images/CaseStudies/Calumus/CaluThumb.png",
        galleryImages: [
            "/assets/images/CaseStudies/Calumus/2.png",
            "/assets/images/CaseStudies/Calumus/3.png",
        ],
        mobileGalleryImages: [
            "/assets/images/CaseStudies/Calamus/Calamus1-0-01.png",
            "/assets/images/CaseStudies/Calamus/Calamus1-02-01.png",
            "/assets/images/CaseStudies/Calamus/Calamus1-03-01.png",
        ],
        client: "Calamus One - Ultrabike",
        year: "2019",
        service: "Brand Film",
        objective: "Launch a next-gen e-bike with a tech-forward narrative.",
        approach:
            "Developed product films and digital storytelling highlighting innovation.",
        impact: "Enabled strong market entry and successful crowdfunding traction.",
    },
    {
        title: "Puravankara",
        image: "/assets/images/CaseStudies/Purvankara/PurvThumb.png",
        caseStudyImage: "/assets/images/CaseStudies/Purvankara/PurvThumb.png",
        galleryImages: [
            "/assets/images/CaseStudies/Purvankara/2.png",
            "/assets/images/CaseStudies/Purvankara/3.png",
            "/assets/images/CaseStudies/Purvankara/4.png",
        ],
        mobileGalleryImages: [
            "/assets/images/CaseStudies/PURAVANKARA/Puravankara_1-3-01.png",
            "/assets/images/CaseStudies/PURAVANKARA/Puravankara_1-01.png",
            "/assets/images/CaseStudies/PURAVANKARA/Puravankara_1-2-01.png",
            "/assets/images/CaseStudies/PURAVANKARA/Puravankara_1-4-01.png",
        ],
        client: "Puravankara",
        year: "2022",
        service: "Real Estate Marketing",
        objective: "Launch a premium residential project across channels.",
        approach:
            "Delivered a 360° campaign across print, digital, and on-ground media.",
        impact: "Built a consistent, high-end brand narrative.",
    },
    {
        title: "Elegant Builders & Developers",
        image: "/assets/images/CaseStudies/Elegent/ElegThumb.png",
        caseStudyImage: "/assets/images/CaseStudies/Elegent/ElegThumb.png",
        galleryImages: [
            "/assets/images/CaseStudies/Elegent/2.png",
            "/assets/images/CaseStudies/Elegent/3.png",
            "/assets/images/CaseStudies/Elegent/4.png",
        ],
        mobileGalleryImages: [
            "/assets/images/CaseStudies/Elegent/Elegant_1-2-01.png",
            "/assets/images/CaseStudies/Elegent/Elegant_1-3-01.png",
            "/assets/images/CaseStudies/Elegent/Elegant_1-01.png",
            "/assets/images/CaseStudies/Elegent/Elegant_1-4-01.png",
        ],
        client: "Elegant Builders & Developers",
        year: "2024",
        service: "Brand Solutions",
        objective: "Launch a nature-led luxury project.",
        approach: "Built a brand language rooted in conscious living across media.",
        impact:
            "Positioned the project at the intersection of sustainability and luxury.",
    },
];

// ─────────────────────────────────────────────────────────────────────────────
// Skeleton shimmer shown while a gallery image is loading
// ─────────────────────────────────────────────────────────────────────────────
const ImageSkeleton = () => (
    <div className="absolute inset-0 bg-gray-200 animate-pulse" />
);

// ─────────────────────────────────────────────────────────────────────────────
// GalleryImage — wraps each gallery img with a skeleton until it's loaded.
// The first image (idx === 0) gets fetchpriority="high" + loading="eager" so
// the browser fetches it immediately when the overlay opens. All subsequent
// images get loading="lazy" + decoding="async" so they don't compete.
// ─────────────────────────────────────────────────────────────────────────────
const GalleryImage = ({
    src,
    alt,
    idx,
    className,
}: {
    src: string;
    alt: string;
    idx: number;
    className?: string;
}) => {
    const [loaded, setLoaded] = useState(false);
    const isPriority = idx <= 2;

    return (
        <div className={`relative ${className ?? ""}`}>
            {!loaded && <ImageSkeleton />}
            <img
                src={src}
                alt={alt}
                onLoad={() => setLoaded(true)}
                // First image: fetch immediately at high priority
                // Rest: defer until near-viewport, decode off main thread
                {...(isPriority
                    ? { fetchPriority: "high" as any, loading: "eager" as const }
                    : { loading: "lazy" as const, decoding: "async" as const })}
                className={`w-full h-full object-contain transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"
                    }`}
            />
        </div>
    );
};

const BrandSolutions = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [activeCaseStudyIndex, setActiveCaseStudyIndex] = useState<
        number | null
    >(null);
    const [activeShowcaseVideoUrl, setActiveShowcaseVideoUrl] = useState<
        string | null
    >(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile, { passive: true });
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // ─── FIX 1: Background-preload all case study gallery images while the
    // browser is idle. Uses requestIdleCallback so it never competes with
    // above-the-fold rendering. When the user clicks a case study card the
    // images are already in the browser cache — they appear instantly.
    useEffect(() => {
        const preloadAll = () => {
            caseStudyShowcase.forEach((study) => {
                // Preload whichever gallery list will be used (mobile or desktop)
                const list =
                    isMobile && study.mobileGalleryImages?.length
                        ? study.mobileGalleryImages
                        : (study.galleryImages ?? []);

                // Also preload the hero/caseStudyImage
                const heroSrc = study.caseStudyImage ?? study.image;
                [heroSrc, ...list].forEach((src, index) => {
                    const img = new Image();

                    if (index < 3) {
                        img.fetchPriority = "high";
                    }

                    img.decoding = "async";
                    img.src = src;
                });
            });
        };

        if (typeof window !== "undefined") {
            if ("requestIdleCallback" in window) {
                (window as any).requestIdleCallback(preloadAll, { timeout: 3000 });
            } else {
                // Fallback for Safari — defer by 2 s so it doesn't block page load
                const t = setTimeout(preloadAll, 2000);
                return () => clearTimeout(t);
            }
        }
    }, [isMobile]);

    const activeCaseStudy =
        activeCaseStudyIndex !== null
            ? caseStudyShowcase[activeCaseStudyIndex]
            : null;

    const openCaseStudy = (index: number) => setActiveCaseStudyIndex(index);
    const closeCaseStudy = () => setActiveCaseStudyIndex(null);

    const openShowcaseVideoModal = (videoSrc: string) =>
        setActiveShowcaseVideoUrl(videoSrc);
    const closeShowcaseVideoModal = () => setActiveShowcaseVideoUrl(null);

    useEffect(() => {
        if (!activeShowcaseVideoUrl && !activeCaseStudy) return;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [activeShowcaseVideoUrl, activeCaseStudy]);

    const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

    return (
        <>
            <Header />

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
            <section className="w-full bg-theme-secondaryBg2 py-20 px-10 md:px-16">
                <h2 className="font-display text-3xl md:text-4xl font-normal text-gray-400 mb-12">
                    Brand Solutions <span className="text-gray-400">|</span>{" "}
                    <span className="font-bold text-gray-700">Clients</span>
                </h2>

                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="w-full lg:w-1/2">
                        {/* FIX 2: lazy-load the large client logo sheet (below the fold) */}
                        <img
                            src="/assets/images/CaseStudies/Brand-solution-logo.png"
                            alt="Brand Solutions Clients"
                            loading="lazy"
                            decoding="async"
                            className="max-w-full max-h-full object-contain"
                        />
                    </div>

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
                        <div className="h-[2px] bg-gray-300 w-full" />
                    </div>
                </div>
            </section>

            {/* Brand Solutions — TVC Showcase */}
            <section className="w-full bg-theme-primaryBg2 pb-24 px-10 py-10 md:px-16">
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
                            onClick={() => openShowcaseVideoModal(item.videoSrc)}
                            aria-label={`Open ${item.title}`}
                        >
                            <div className="relative aspect-video overflow-hidden rounded-sm bg-black border border-white/10">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    loading="lazy"
                                    decoding="async"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/35 group-hover:bg-black/45 transition-colors duration-300" />
                                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center z-10">
                                    <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Play
                                            className="w-6 h-6 text-black ml-0.5"
                                            fill="currentColor"
                                        />
                                    </div>
                                    <h3 className="text-white text-base md:text-lg font-semibold">
                                        {item.title}
                                    </h3>
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

            {/* TVC Video Modal */}
            <AnimatePresence>
                {activeShowcaseVideoUrl && (
                    <motion.div
                        className="fixed inset-0 z-[120] bg-black flex items-center justify-center p-4 md:p-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                        onClick={closeShowcaseVideoModal}
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
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/*
                FIX 4: The <video> is only mounted here — inside the modal —
                when the user explicitly clicks a card. Before that click,
                zero video elements exist in the DOM, so zero network requests
                and zero decoders are running.
              */}
                            <video
                                src={activeShowcaseVideoUrl}
                                className="w-full h-full"
                                controls
                                autoPlay
                                playsInline
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Brand Solutions — Case Studies */}
            <section className="w-full bg-theme-secondaryBg2 pb-24 px-10 py-10 md:px-16">
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
                                {/* FIX 5: lazy-load case study card thumbnails — 11 images
                    were all fetching eagerly. The first card stays eager
                    since it may be in the initial viewport. */}
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    loading={index === 0 ? "eager" : "lazy"}
                                    decoding="async"
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
                        className="fixed inset-0 z-50 bg-theme-primaryBg2 overflow-y-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                    >
                        <button
                            type="button"
                            aria-label="Close case study"
                            onClick={closeCaseStudy}
                            className="fixed top-3 md:top-6 right-6 z-[60] w-11 h-11 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors duration-200"
                        >
                            <X className="w-5 h-5 text-gray-600" />
                        </button>

                        <div className="flex flex-col">
                            <div className="min-h-screen flex flex-col lg:flex-row">
                                {/* MOBILE ONLY — metadata sits at the top */}
                                <motion.div
                                    key={`mobile-meta-${activeCaseStudyIndex}`}
                                    initial={{ opacity: 0, y: -16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                                    className="flex lg:hidden flex-col px-6 pt-16 pb-8"
                                >
                                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-5">
                                        Brand Solutions | Case Study
                                    </p>
                                    <h2 className="font-display text-[32px] font-bold text-gray-800 leading-none mb-7">
                                        {activeCaseStudy.title}
                                    </h2>

                                    <div className="space-y-0 mb-6">
                                        <div className="grid grid-cols-[100px_1fr] items-baseline border-b border-gray-300 py-2.5">
                                            <span className="text-gray-400 text-xs uppercase tracking-wide">
                                                Client
                                            </span>
                                            <span className="text-gray-800 font-bold uppercase tracking-wide text-xs">
                                                {activeCaseStudy.client}
                                            </span>
                                        </div>
                                        <div className="grid grid-cols-[100px_1fr] items-baseline border-b border-gray-300 py-2.5">
                                            <span className="text-gray-400 text-xs uppercase tracking-wide">
                                                Service
                                            </span>
                                            <span className="text-gray-800 font-bold uppercase tracking-wide text-xs">
                                                {activeCaseStudy.service}
                                            </span>
                                        </div>
                                        <div className="grid grid-cols-[100px_1fr] items-baseline border-b border-gray-300 py-2.5">
                                            <span className="text-gray-400 text-xs uppercase tracking-wide">
                                                Year
                                            </span>
                                            <span className="text-gray-800 font-bold text-xs">
                                                {activeCaseStudy.year}
                                            </span>
                                        </div>
                                        {activeCaseStudy.videoHighlight && (
                                            <div className="grid grid-cols-[100px_1fr] items-baseline border-b border-gray-300 py-2.5">
                                                <span className="text-gray-400 text-xs uppercase tracking-wide">
                                                    Reach
                                                </span>
                                                <span className="text-[#1498e1] font-bold text-xs">
                                                    {activeCaseStudy.videoHighlight}
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {(activeCaseStudy.objective ||
                                        activeCaseStudy.approach ||
                                        activeCaseStudy.impact) && (
                                            <div className="mb-7 space-y-4">
                                                {activeCaseStudy.objective && (
                                                    <div>
                                                        <p className="text-gray-400 text-[10px] uppercase tracking-widest mb-1.5">
                                                            Objective
                                                        </p>
                                                        <p className="text-gray-600 text-sm leading-snug">
                                                            {activeCaseStudy.objective}
                                                        </p>
                                                    </div>
                                                )}
                                                {activeCaseStudy.approach && (
                                                    <div>
                                                        <p className="text-gray-400 text-[10px] uppercase tracking-widest mb-1.5">
                                                            Approach
                                                        </p>
                                                        <p className="text-gray-600 text-sm leading-snug">
                                                            {activeCaseStudy.approach}
                                                        </p>
                                                    </div>
                                                )}
                                                {activeCaseStudy.impact && (
                                                    <div>
                                                        <p className="text-gray-400 text-[10px] uppercase tracking-widest mb-1.5">
                                                            Impact
                                                        </p>
                                                        <p className="text-gray-600 text-sm leading-snug">
                                                            {activeCaseStudy.impact}
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                    {activeCaseStudy.galleryImages?.length ? (
                                        <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400 mb-4">
                                            ↓ Scroll to view gallery (
                                            {activeCaseStudy.galleryImages.length} images)
                                        </p>
                                    ) : null}

                                    <button
                                        onClick={closeCaseStudy}
                                        className="self-start text-xs uppercase tracking-widest text-gray-400 hover:text-gray-700 transition-colors duration-200 border-b border-gray-300 hover:border-gray-600 pb-0.5"
                                    >
                                        ← Back to Showcase
                                    </button>
                                </motion.div>

                                {/* Hero image */}
                                <motion.div
                                    key={`hero-${activeCaseStudyIndex}`}
                                    initial={{ opacity: 0, x: -24 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                                    className="w-full lg:w-[55%] relative h-[80vw] lg:h-auto lg:min-h-screen"
                                >
                                    <div className="absolute inset-0 bg-theme-primaryBg2" />
                                    <div className="absolute inset-0 flex flex-col items-center justify-center px-2 md:px-4 lg:px-6">
                                        <div className="relative w-full h-full flex items-center justify-center">
                                            <div className="overflow-hidden bg-transparent w-[280px] h-[200px] sm:w-[360px] sm:h-[260px] lg:w-[700px] lg:h-[500px] max-w-full">
                                                {/*
                          FIX 6: Hero case study image gets fetchPriority="high" so
                          the browser fetches it the moment the overlay opens,
                          before anything else. Combined with the idle-time preload
                          (FIX 1) it will usually already be cached.
                        */}
                                                <img
                                                    src={
                                                        activeCaseStudy.caseStudyImage ??
                                                        activeCaseStudy.image
                                                    }
                                                    alt={`${activeCaseStudy.title} case study`}
                                                    fetchPriority="high"
                                                    loading="eager"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* DESKTOP ONLY — right metadata panel */}
                                <motion.div
                                    key={`desktop-meta-${activeCaseStudyIndex}`}
                                    initial={{ opacity: 0, x: 24 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                                    className="hidden lg:flex w-full lg:w-[45%] flex-col justify-start px-4 md:px-6 lg:px-8 pt-20 lg:pt-24 pb-16"
                                >
                                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-8">
                                        Brand Solutions | Case Study
                                    </p>
                                    <h2 className="font-display text-[36px] md:text-[52px] font-bold text-gray-800 leading-none mb-10">
                                        {activeCaseStudy.title}
                                    </h2>

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

                                    {(activeCaseStudy.objective ||
                                        activeCaseStudy.approach ||
                                        activeCaseStudy.impact) && (
                                            <div className="mb-10 space-y-6">
                                                {activeCaseStudy.objective && (
                                                    <div>
                                                        <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">
                                                            Objective
                                                        </p>
                                                        <p className="text-gray-600 text-[15px] leading-snug">
                                                            {activeCaseStudy.objective}
                                                        </p>
                                                    </div>
                                                )}
                                                {activeCaseStudy.approach && (
                                                    <div>
                                                        <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">
                                                            Approach
                                                        </p>
                                                        <p className="text-gray-600 text-[15px] leading-snug">
                                                            {activeCaseStudy.approach}
                                                        </p>
                                                    </div>
                                                )}
                                                {activeCaseStudy.impact && (
                                                    <div>
                                                        <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">
                                                            Impact
                                                        </p>
                                                        <p className="text-gray-600 text-[15px] leading-snug">
                                                            {activeCaseStudy.impact}
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                    {activeCaseStudy.galleryImages?.length ? (
                                        <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400 mb-6">
                                            ↓ Scroll to view gallery (
                                            {activeCaseStudy.galleryImages.length} images)
                                        </p>
                                    ) : null}

                                    <button
                                        onClick={closeCaseStudy}
                                        className="self-start text-xs uppercase tracking-widest text-gray-400 hover:text-gray-700 transition-colors duration-200 border-b border-gray-300 hover:border-gray-600 pb-0.5"
                                    >
                                        ← Back to Showcase
                                    </button>
                                </motion.div>
                            </div>

                            {/* Gallery images */}
                            {(() => {
                                if (!activeCaseStudy.galleryImages?.length) return null;

                                // Temporarily disable the mobile-specific gallery so mobile and desktop
                                // render the same image set.
                                // const galleryList =
                                //     isMobile && activeCaseStudy.mobileGalleryImages?.length
                                //         ? activeCaseStudy.mobileGalleryImages
                                //         : activeCaseStudy.galleryImages;

                                const galleryList = activeCaseStudy.galleryImages;

                                return (
                                    <div className="flex flex-col">
                                        <div className="sticky top-0 z-40 bg-theme-secondaryBg2 border-t border-b border-gray-300 px-4 md:px-8 py-4 backdrop-blur-sm">
                                            <div className="flex items-center gap-4">
                                                <img
                                                    src="/RDL_Logo.png"
                                                    alt="Resonance Digital"
                                                    className="h-10 w-auto object-contain"
                                                />
                                                    <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400">
                                                        Brand Solutions
                                                    <h2 className="font-display text-lg md:text-2xl font-bold text-gray-800 leading-none">
                                                        Case Studies
                                                    </h2>
                                                    </p>
                                            </div>
                                        </div>

                                        <div
                                            className={
                                                isMobile ? "flex flex-col gap-2 px-0" : "flex flex-col"
                                            }
                                        >
                                            {galleryList.map((image, idx) => {
                                                // Killer Jeans special paired layout — desktop only
                                                if (
                                                    !isMobile &&
                                                    activeCaseStudy.title === "Killer Jeans" &&
                                                    image.includes("Killer2.png")
                                                ) {
                                                    return (
                                                        <div
                                                            key={idx}
                                                            className="relative w-full flex items-center justify-center gap-6 px-8"
                                                            style={{ height: "100svh" }}
                                                        >
                                                            <GalleryImage
                                                                src="/assets/images/CaseStudies/Killer2.png"
                                                                alt="Killer Jeans 2"
                                                                idx={idx}
                                                                className="w-1/2 h-full"
                                                            />
                                                            <GalleryImage
                                                                src="/assets/images/CaseStudies/Killer3.png"
                                                                alt="Killer Jeans 3"
                                                                idx={idx + 1}
                                                                className="w-1/2 h-full"
                                                            />
                                                        </div>
                                                    );
                                                }

                                                if (
                                                    !isMobile &&
                                                    activeCaseStudy.title === "Killer Jeans" &&
                                                    image.includes("Killer3.png")
                                                ) {
                                                    return null;
                                                }

                                                return (
                                                    <div
                                                        key={idx}
                                                        className="relative w-full"
                                                        style={isMobile ? undefined : { height: "100svh" }}
                                                    >
                                                        {/*
                              FIX 7: GalleryImage component handles per-image
                              priority, skeleton placeholder, and fade-in.
                              First image (idx 0) is high-priority + eager;
                              the rest are lazy + async-decoded.
                            */}
                                                        <GalleryImage
                                                            src={image}
                                                            alt={`${activeCaseStudy.title} — ${idx + 1} of ${galleryList.length}`}
                                                            idx={idx}
                                                            className={isMobile ? "w-full" : "w-full h-full"}
                                                        />
                                                        {/* Conditional overlay for MORDE gallery image */}
                                                        {activeCaseStudy.title === "MORDE" && image.includes("Morde-49-01.png") && (
                                                            <>
                                                                <div className="absolute left-1/2 top-[85%] left-[66%] text-[#7a7a7a] text-xl md:text-3xl font-bold tracking-tight pointer-events-none">
                                                                    Social Media
                                                                </div>
                                                            </>
                                                        )}
                                                        {/* Conditional overlay for Killer Jeans gallery image */}
                                                        {activeCaseStudy.title === "Killer Jeans" && image.includes("Killer4.png") && (
                                                            <div className="absolute bottom-[12%] left-[70%] text-[#7a7a7a] text-xl md:text-3xl font-bold tracking-tight pointer-events-none">
                                                                Social Media
                                                            </div>
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        <div className="py-10 md:py-12 flex justify-center border-t border-gray-300 bg-theme-secondaryBg2">
                                            <button
                                                onClick={closeCaseStudy}
                                                className="text-xs uppercase tracking-widest text-gray-400 hover:text-gray-700 transition-colors duration-200 border-b border-gray-300 hover:border-gray-600 pb-0.5"
                                            >
                                                ← Back to Showcase
                                            </button>
                                        </div>
                                    </div>
                                );
                            })()}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer theme="light" />
        </>
    );
};

export default BrandSolutions;
