import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedColorText from "@/components/AnimatedColorText";
import { Globe, BriefcaseBusiness, TrendingUp } from "lucide-react";

const About = () => {
    return (
        <>
            <Helmet>
                <title>About Us | Resonance Digital</title>
                <meta
                    name="description"
                    content="Learn about Resonance Digital's story, philosophy, and the team behind our award-winning VFX and creative work."
                />
            </Helmet>

            <Header />

            {/* Hero Section with Animated Text */}
            <section className="relative w-full min-h-screen bg-theme-primaryBg1 flex flex-col justify-center px-6 md:px-12 lg:px-24 py-24">
                <div className="max-w-7xl w-full mt-20">
                    <h1 className="font-display text-[65px] md:text-[85px] lg:text-[105px] font-bold text-theme-primaryText mb-16 leading-tight">
                        About us
                    </h1>

                    <div className="max-w-[1400px]">
                        <AnimatedColorText
                            whiteText="From concept to execution, Resonance Digital delivers end-to-end creative, tech, production, and post-production solutions tailored for world-class"
                            blueText="brands. With a global footprint spanning countries like the United States, Canada, Europe, and APAC, we bring bold ideas to life across screens. We don't merely support brand ambition, we accelerate it."
                        />
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="w-full bg-theme-secondaryBg1 py-20 px-10 md:px-16">
                {/* Stats Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
                    {/* Stat 1 */}
                    <div className="text-center">
                        <div className="flex items-end justify-center gap-3 mb-4">
                            <BriefcaseBusiness
                                className="w-10 h-10 md:w-20 md:h-20 text-white mb-2"
                                strokeWidth={1.75}
                            />
                            <span className="text-[80px] md:text-[100px] font-display font-light text-white leading-none">
                                250
                            </span>
                            <span className="text-[50px] md:text-[60px] font-display font-bold text-white leading-none translate-y-[-80%] translate-x-[-40%]">
                                +
                            </span>
                        </div>
                        <p className="text-white text-sm md:text-base tracking-wide">
                            Experts in our team
                        </p>
                    </div>

                    {/* Stat 2 */}
                    <div className="text-center">
                        <div className="flex items-end justify-center gap-3 mb-4">
                            <Globe
                                className="w-10 h-10 md:w-20 md:h-20 text-white mb-2"
                                strokeWidth={1.75}
                            />
                            <span className="text-[80px] md:text-[100px] font-display font-light text-white leading-none">
                                20
                            </span>
                            <span className="text-[50px] md:text-[60px] font-display font-bold text-white leading-none translate-y-[-80%] translate-x-[-40%]">
                                +
                            </span>
                        </div>
                        <p className="text-white text-sm md:text-base tracking-wide">
                            Countries served
                        </p>
                    </div>

                    {/* Stat 3 */}
                    <div className="text-center">
                        <div className="flex items-end justify-center gap-3 mb-4">
                            <TrendingUp
                                className="w-10 h-10 md:w-20 md:h-20 text-white mb-2"
                                strokeWidth={1.75}
                            />
                            <span className="text-[80px] md:text-[100px] font-display font-light text-white leading-none">
                                10
                            </span>
                            <span className="text-[50px] md:text-[60px] font-display font-bold text-white leading-none translate-y-[-80%] translate-x-[-40%]">
                                +
                            </span>
                        </div>
                        <p className="text-white text-sm md:text-base tracking-wide">
                            Years of lagecy
                        </p>
                    </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
                    {/* VFX: Movies & Ads */}
                    <div>
                        <h3 className="font-display text-xl md:text-2xl font-normal text-white mb-4">
                            VFX: Movies & Ads
                        </h3>
                        <p className="text-white text-sm leading-relaxed mb-4">
                            Successfully delivered visual effects for more than 200 Hollywood projects & 50 Bollywood projects.
                        </p>
                        <p className="text-white text-sm leading-relaxed">
                            Films, Episodic, Commercials, Automobiles, Architectural & more.
                        </p>
                    </div>

                    {/* Brand Solutions */}
                    <div>
                        <h3 className="font-display text-xl md:text-2xl font-normal text-white mb-4">
                            Brand Solutions
                        </h3>
                        <p className="text-white text-sm leading-relaxed mb-4">
                            Multiple campaigns for more than 50 brands/corporates in varied mediums.
                        </p>
                        <p className="text-white text-sm leading-relaxed">
                            Branding, Digital Marketing, Mainline advertising, Product photography, TVC production, Audio Visual films and Content creation.
                        </p>
                    </div>

                    {/* Real Estate Mar-tech */}
                    <div>
                        <h3 className="font-display text-xl md:text-2xl font-normal text-white mb-4">
                            Real Estate Mar-tech
                        </h3>
                        <p className="text-white text-sm leading-relaxed mb-4">
                            Ideated and designed technology campaigns for large scale brands and corporates across India.
                        </p>
                        <p className="text-white text-sm leading-relaxed">
                            AR, VR, MR, Projection Mapping, Interactive Media, Custom Web & App development.
                        </p>
                    </div>

                    {/* Motion Pictures */}
                    <div>
                        <h3 className="font-display text-xl md:text-2xl font-normal text-white mb-4">
                            Motion Pictures
                        </h3>
                        <p className="text-white text-sm leading-relaxed mb-4">
                            Produced IP's ranging from web series, documentaries to short films.
                        </p>
                        <p className="text-white text-sm leading-relaxed">
                            Series, documentaries & short films.
                        </p>
                    </div>
                </div>
            </section>

            {/* Meet Our Team Section */}
            <section className="relative w-full overflow-hidden bg-theme-primaryBg1 py-24 px-6 md:px-12 lg:px-20">
                {/* Background Glow */}
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top,rgba(74,182,255,0.25),transparent_55%)]" />

                <div className="relative z-10 max-w-7xl mx-auto">
                    {/* Heading */}
                    <div className="max-w-5xl relative z-10">
                        <h2 className="font-display text-[56px] md:text-[80px] lg:text-[100px] font-bold text-theme-primaryText leading-[0.95] mb-8">
                            Meet our team
                        </h2>

                        <div className="max-w-[1100px] text-white text-[32px] md:text-[46px] lg:text-[58px] font-semibold leading-[0.95] tracking-tight">
                            Guided by strong vision and thoughtful, Resonance is proud to be a reliable
                            <span className="text-[#1c4e63]"> partner for major creative initiatives in India and beyond.</span>
                        </div>
                    </div>

                    {/* Team Visual Composition */}
                    <div className="relative z-30 mt-2 md:mt-1 min-h-[700px] md:min-h-[500px] flex flex-col md:flex-row items-center md:items-end justify-center gap-6 md:gap-0">
                        {/* Left Info Card */}
                        <div className="relative md:absolute md:left-0 md:bottom-8 z-50 bg-[#2b6177]/70 backdrop-blur-sm p-6 w-full max-w-[320px] md:w-[280px] text-white shadow-2xl">
                            <h3 className="text-[#29a7ff] font-semibold text-lg mb-3">
                                Abhyuday Grover
                            </h3>

                            <p className="text-sm leading-relaxed text-white/85 mb-3">
                                Multiple campaigns for more than 50 brands/corporates in varied mediums.
                            </p>

                            <p className="text-sm leading-relaxed text-white/70">
                                Branding, Digital Marketing, Mainline advertising, Product photography, TVC production, Audio Visual films and Content creation.
                            </p>
                        </div>

                        {/* Main Team Images */}
                        <div className="relative z-30 flex items-end justify-center my-4 md:my-0 md:translate-y-16">
                            {/* Back Person */}
                            <img
                                src="/assets/images/team/team-1.png"
                                alt="Team member"
                                className="relative z-30 w-[220px] sm:w-[260px] md:w-[420px] lg:w-[500px] object-contain grayscale contrast-125 brightness-90"
                            />

                            {/* Front Person */}
                            <img
                                src="/assets/images/team/team-2.png"
                                alt="Team member"
                                className="absolute bottom-0 right-[-15%] md:right-[-20%] z-40 w-[190px] sm:w-[230px] md:w-[360px] lg:w-[440px] object-contain grayscale contrast-125 brightness-90"
                            />
                        </div>

                        {/* Right Info Card */}
                        <div className="relative md:absolute md:right-0 md:bottom-0 z-50 bg-[#2b6177]/70 backdrop-blur-sm p-6 w-full max-w-[320px] md:w-[280px] text-white shadow-2xl">
                            <h3 className="text-[#29a7ff] font-semibold text-lg mb-3">
                                Utsarg Grover
                            </h3>

                            <p className="text-sm leading-relaxed text-white/85 mb-3">
                                Multiple campaigns for more than 50 brands/corporates in varied mediums.
                            </p>

                            <p className="text-sm leading-relaxed text-white/70">
                                Branding, Digital Marketing, Mainline advertising, TVC production, Audio Visual films and Content creation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Members Grid */}
            <section className="w-full bg-theme-secondaryBg1 px-[5%] md:px-[8%] lg:px-[10%] pb-24 pt-24">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-[2px]">
                    {[
                        {
                            name: "Rohit Raghuvanshi",
                            role: "Executive Producer - Commercials",
                            image: "/assets/images/team/Rohit.png",
                        },
                        {
                            name: "Pooja Verma",
                            role: "Head - Business Development",
                            image: "/assets/images/team/Pooja.png",
                        },
                        {
                            name: "Sajan Raj",
                            role: "VFX Producer",
                            image: "/assets/images/team/Sajan-Raj.png",
                        },
                        {
                            name: "Maninder Singh",
                            role: "Business Head - VFX",
                            image: "/assets/images/team/Maninder-Singh.png",
                        },
                        {
                            name: "Somak Mukherjee",
                            role: "Creative Director",
                            image: "/assets/images/team/Somak-Mukherjee.png",
                        },
                        {
                            name: "Himanshu Pandey",
                            role: "Creative Director - Commercials",
                            image: "/assets/images/team/Himanshu-Pandey.png",
                        },
                        {
                            name: "Manpreet Singh",
                            role: "VFX Supervisor - Commercials",
                            image: "/assets/images/team/Manpreet-Singh.png",
                        },
                        {
                            name: "Mahim Kumar Chaudhuri",
                            role: "Creative Director - Brand Solutions",
                            image: "/assets/images/team/Mahim-Kumar-Chaudhuri.png",
                        },
                        {
                            name: "Vinay Khilnani",
                            role: "Head - Strategic Alliances & Growth",
                            image: "/assets/images/team/Vinay-Khilnani.png",
                        },
                        {
                            name: "Mansi Solanki",
                            role: "Senior People Partner",
                            image: "/assets/images/team/Mansi-Solanki.png",
                        },
                        {
                            name: "Sandeep Avhad",
                            role: "IT Manager",
                            image: "/assets/images/team/Sandeep.png",
                        },
                        {
                            info: true,
                            name: "What We Do",
                        },
                    ].map((member, index) => (
                        <div
                            key={index}
                            className="relative aspect-[0.8] overflow-hidden bg-[#1e566b]"
                        >
                            {member.info ? (
                                <div className="w-full h-full bg-theme-primaryBg1 p-6 md:p-8 flex flex-col justify-start text-white">
                                    <h3 className="text-[#29a7ff] text-lg md:text-xl font-semibold mb-4">
                                        {member.name}
                                    </h3>

                                    <p className="text-xs md:text-sm leading-relaxed text-white/90 mb-2">
                                        Multiple campaigns for more than 50 brands/corporates in varied mediums.
                                    </p>

                                    <p className="text-xs md:text-sm leading-relaxed text-white/75">
                                        Branding, Digital Marketing, Mainline advertising, Product photography, TVC production, Audio Visual films and Content Creation.
                                    </p>
                                </div>
                            ) : (
                                <>
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />

                                    <div className="absolute inset-x-0 bottom-0 h-20 md:h-20 bg-black/70 backdrop-blur-sm" />

                                    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-[90%] text-center">
                                        <div className="text-[#29a7ff] font-semibold text-sm md:text-xl leading-tight">
                                            {member.name}
                                        </div>
                                        <div className="text-white/85 text-[10px] md:text-sm mt-1 leading-tight">
                                            {member.role}
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Awards Showcase Image */}
            <section className="relative w-full bg-theme-primaryBg1 flex flex-col items-center justify-center">
                <div className="w-full px-6 md:px-12 lg:px-20 pt-16 pb-8">
                    <h2 className="font-display text-[56px] leading-[0.95] md:text-[84px] lg:text-[110px] font-bold text-theme-primaryText tracking-tight text-center">
                        Awards Showcase
                    </h2>
                </div>

                <picture>
                    <source
                        media="(max-width: 768px), (max-aspect-ratio: 4/5)"
                        srcSet="/assets/images/awards/awardshowcase-mobile.png"
                    />
                    <img
                        src="/assets/images/awards/awardshowcase.png"
                        alt="Awards Showcase"
                        className="w-full h-auto block"
                    />
                </picture>
            </section>

            <Footer theme="dark" />
        </>
    );
};

export default About;
