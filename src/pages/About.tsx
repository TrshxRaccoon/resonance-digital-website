import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedColorText from "@/components/AnimatedColorText";
import AnimatedCounter from "@/components/AnimatedCounter";


const members = [
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
];

const renderMember = (member: { name: string; role: string; image: string }, index: number) => (
    <div
        key={index}
        className="relative aspect-[0.8] overflow-hidden bg-theme-secondaryBg1"
    >
        <img
            src={member.image}
            alt={member.name}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-x-0 bottom-0 h-20 bg-[#f2eee2]/90 backdrop-blur-sm border-t border-black/[0.04]" />

        <div className="absolute inset-x-0 bottom-0 h-20 flex flex-col items-center justify-center px-3 text-center overflow-hidden">
            <div className="text-gray-800 font-semibold text-[11px] md:text-lg leading-tight max-w-full break-words">
                {member.name}
            </div>
            <div className="text-gray-600 text-[9px] md:text-sm mt-1 leading-tight max-w-full break-words">
                {member.role}
            </div>
        </div>
    </div>
);

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
            <section className="relative w-full min-h-screen bg-[#f2eee2] flex flex-col justify-center px-6 md:px-12 lg:px-24 py-24">
                <div className="w-full max-w-[1700px] mx-auto mt-20">
                    <h1 className="font-display text-[65px] md:text-[85px] lg:text-[105px] font-bold text-gray-800 mb-16 leading-tight">
                        About us
                    </h1>

                    <div className="max-w-[1400px]">
                        <AnimatedColorText
                            theme="light"
                            whiteText="From concept to execution, Resonance Digital delivers end-to-end creative, tech, production, and post-production solutions tailored for world-class"
                            blueText="brands. With a global footprint spanning countries like the United States, Canada, Europe, and APAC, we bring bold ideas to life across screens. We don't merely support brand ambition, we accelerate it."
                        />
                    </div>
                </div>
            </section>

            {/* Stats and Services Section */}
                                <section className="w-full bg-[#f7f5ee] px-6 md:px-12 lg:px-24 border-b border-black/[0.06] flex items-center py-20">
                                    <div className="w-full max-w-[1700px] mx-auto flex flex-col justify-center">
            
                                        {/* Stats Grid */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.05fr_1.2fr_0.9fr_0.85fr] gap-12 lg:gap-16 xl:gap-20 justify-items-center mb-14">
                                            {/* Stat 1 */}
                                            <div className="w-full max-w-[340px] mx-auto text-center flex flex-col items-center">
                                                <div className="flex items-center justify-center -mb-3">
                                                    <span className="relative inline-block text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold text-[#8e8e8e] leading-none ml-2">
                                                        <AnimatedCounter value={200} />
                                                        <span className="absolute -top-1 md:-top-2 lg:-top-3 -right-6 md:-right-8 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#8e8e8e] leading-none">+</span>
                                                    </span>
                                                </div>
                                                <p className="text-[#58595b] text-sm md:text-base lg:text-lg font-sans font-bold tracking-wide">
                                                    Experts in our team
                                                </p>
                                            </div>
            
                                            {/* Stat 2 */}
                                            <div className="w-full max-w-[340px] mx-auto text-center flex flex-col items-center">
                                                <div className="flex items-center justify-center -mb-3">
                                                    <span className="relative inline-block text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold text-[#8e8e8e] tracking-tight leading-none ml-2">
                                                        <AnimatedCounter value={1000} />
                                                        <span className="absolute -top-1 md:-top-2 lg:-top-3 -right-6 md:-right-8 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#8e8e8e] leading-none">+</span>
                                                    </span>
                                                </div>
                                                <p className="text-[#58595b] text-sm md:text-base lg:text-lg font-sans font-bold tracking-wide">
                                                    Projects Delivered
                                                </p>
                                            </div>
            
                                            {/* Stat 3 */}
                                            <div className="w-full max-w-[340px] mx-auto text-center flex flex-col items-center">
                                                <div className="flex items-center justify-center -mb-3">
                                                    <span className="relative inline-block text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold text-[#8e8e8e] leading-none ml-2">
                                                        <AnimatedCounter value={20} />
                                                        <span className="absolute -top-1 md:-top-2 lg:-top-3 -right-6 md:-right-8 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#8e8e8e] leading-none">+</span>
                                                    </span>
                                                </div>
                                                <p className="text-[#58595b] text-sm md:text-base lg:text-lg font-sans font-bold tracking-wide">
                                                    Countries served
                                                </p>
                                            </div>
            
                                            {/* Stat 4 */}
                                            <div className="w-full max-w-[340px] mx-auto text-center flex flex-col items-center">
                                                <div className="flex items-center justify-center -mb-3">
                                                    <span className="relative inline-block text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold text-[#8e8e8e] leading-none ml-2">
                                                        <AnimatedCounter value={10} />
                                                        <span className="absolute -top-1 md:-top-2 lg:-top-3 -right-6 md:-right-8 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#8e8e8e] leading-none">+</span>
                                                    </span>
                                                </div>
                                                <p className="text-[#58595b] text-sm md:text-base lg:text-lg font-sans font-bold tracking-wide">
                                                    Years of legacy
                                                </p>
                                            </div>
                                        </div>
            
                                        {/* Divider and Text Statement */}
                                        <div className="w-full border-t border-black/[0.15] pt-12">
                                            <p className="font-display text-[32px] sm:text-[40px] md:text-[54px] lg:text-[68px] xl:text-[76px] font-bold text-[#58595b] leading-[0.9] tracking-tight max-w-[1400px]">
                                                Where Creativity Meets Intelligence.
                                                <br />
                                                AI. VFX. Immersive. Brand Experiences. One Creative Technology Partner.
                                            </p>
                                        </div>
                                    </div>
                                </section>

            {/* Meet Our Team Section */}
            <section className="relative w-full overflow-hidden bg-[#f2eee2] pt-24 px-6 md:px-12 lg:px-24">
                {/* Background Glow */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.05),transparent_55%)]" />

                <div className="relative z-10 w-full max-w-[1700px] mx-auto">
                    {/* Heading */}
                    <div className="max-w-[1400px] relative z-10 mb-12">
                        <h2 className="text-[56px] md:text-[80px] lg:text-[100px] font-bold text-black leading-[0.95] mb-8 font-display">
                            Meet our team
                        </h2>

                        <div className="max-w-[1100px] text-theme-secondaryText text-[32px] md:text-[46px] lg:text-[58px] font-bold font-display leading-[0.95] tracking-tight">
                            Guided by strong thought and vision,
                            <br />
                            Resonance is proud to be a reliable partner for major
                            creative initiatives worldwide.
                        </div>
                    </div>

                    {/* Leaders Image */}
                    <div className="w-full overflow-hidden flex justify-center -mb-[6px] md:-mb-[10px]">
                        <img
                            src="/assets/images/team/leaders.png"
                            alt="Resonance Leadership Team"
                            loading="lazy"
                            decoding="async"
                            className="w-full h-auto object-contain select-none block"
                        />
                    </div>
                </div>
            </section>

            {/* Team Members Grid */}
            <section className="w-full bg-[#f2eee2] px-6 md:px-12 lg:px-24 pb-24 pt-20">
                <div className="max-w-[1700px] mx-auto flex flex-col gap-[2px] bg-{#f2eee2}">
                    {/* Row 1 */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-[2px]">
                        {members.slice(0, 4).map((member, i) => renderMember(member, i))}
                    </div>
                    {/* Row 2 */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-[2px]">
                        {members.slice(4, 8).map((member, i) => renderMember(member, i + 4))}
                    </div>
                    {/* Row 3 */}
                    <div className="flex justify-center">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-[2px] w-full md:w-[75%]">
                            {members.slice(8, 11).map((member, i) => renderMember(member, i + 8))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer theme="light" />
        </>
    );
};

export default About;
