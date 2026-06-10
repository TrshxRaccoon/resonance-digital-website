import { Helmet } from "react-helmet-async";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { Eye, Box, Video, Image } from "lucide-react";

const services = [
    {
        icon: Box,
        title: "3D Visualization",
        description: "Photorealistic architectural renders that bring designs to life before construction.",
    },
    {
        icon: Eye,
        title: "Virtual Tours",
        description: "Interactive 360° experiences that let clients explore properties from anywhere.",
    },
    {
        icon: Video,
        title: "Flythrough Animation",
        description: "Cinematic property walkthroughs that showcase every detail.",
    },
    {
        icon: Image,
        title: "Still Imagery",
        description: "High-resolution marketing images for print and digital campaigns.",
    },
];

const projects = [
    { title: "Skyline Tower", type: "Commercial", location: "Dubai" },
    { title: "The Residences", type: "Luxury Living", location: "Miami" },
    { title: "Urban Oasis", type: "Mixed-Use", location: "Singapore" },
];

const RealEstate = () => {
    return (
        <>
            <Helmet>
                <title>Real Estate Visualization | Resonance Digital</title>
                <meta
                    name="description"
                    content="Photorealistic renders, virtual tours, and immersive 3D experiences for real estate and architectural projects worldwide."
                />
            </Helmet>

            <PageLayout>
                <PageHero
                    subtitle="Real Estate Visualization"
                    title="Immersive Property Experiences"
                    description="We transform architectural visions into stunning visual experiences, helping developers and agencies sell spaces before they exist."
                />

                {/* Interactive Preview Area */}
                <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 border-t border-border">
                    <div className="aspect-[21/9] bg-secondary/30 border border-border flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                        <div className="text-center relative z-10">
                            <Box className="w-16 h-16 text-primary/50 mx-auto mb-4" />
                            <span className="text-muted-foreground text-sm uppercase tracking-widest block">
                                3D / Virtual Tour Ready
                            </span>
                            <p className="mt-2 text-xs text-muted-foreground">
                                Three.js / R3F integration placeholder
                            </p>
                        </div>
                    </div>
                </section>

                {/* Services */}
                <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 border-t border-border">
                    <SectionHeader
                        label="Services"
                        title="Visualization Capabilities"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="group p-6 border border-border hover:border-primary/50 transition-all duration-300">
                                <service.icon className="w-8 h-8 text-primary mb-6" />
                                <h3 className="font-display text-xl font-semibold text-foreground">{service.title}</h3>
                                <p className="mt-3 text-sm text-muted-foreground">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Featured Projects */}
                <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 border-t border-border">
                    <SectionHeader
                        label="Portfolio"
                        title="Featured Projects"
                        description="A selection of our most immersive real estate visualization work."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <div key={index} className="group cursor-pointer">
                                <div className="aspect-[4/5] bg-secondary/50 mb-6 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <span className="text-xs text-primary uppercase tracking-widest">{project.type}</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-start">
                                    <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <span className="text-sm text-muted-foreground">{project.location}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Virtual Tour CTA */}
                <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32 border-t border-border bg-secondary/10 text-center">
                    <Eye className="w-12 h-12 text-primary mx-auto mb-6" />
                    <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground">
                        Experience properties like never before.
                    </h2>
                    <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                        Immersive virtual tours and photorealistic visualization that sell spaces before they're built.
                    </p>
                    <a href="/contact" className="inline-block mt-8 btn-primary">
                        Request a Demo
                    </a>
                </section>
            </PageLayout>
        </>
    );
};

export default RealEstate;
