import { Helmet } from "react-helmet-async";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { Play } from "lucide-react";

const showcaseItems = [
    { title: "Campaign Alpha", type: "Brand Film", duration: "2:30" },
    { title: "Product Launch", type: "Commercial", duration: "0:45" },
    { title: "Documentary Series", type: "Long Form", duration: "45:00" },
    { title: "Social Campaign", type: "Digital Content", duration: "0:15" },
];

const contentBlocks = [
    {
        title: "Brand Films",
        description: "Cinematic storytelling that captures brand essence and connects with audiences on an emotional level.",
    },
    {
        title: "Commercials",
        description: "High-impact advertising content designed for broadcast, streaming, and digital platforms.",
    },
    {
        title: "Social Content",
        description: "Platform-optimized content that drives engagement and builds community.",
    },
    {
        title: "Documentary",
        description: "Long-form content that tells authentic stories and builds brand authority.",
    },
];

const Content = () => {
    return (
        <>
            <Helmet>
                <title>Content Production | Resonance Digital</title>
                <meta
                    name="description"
                    content="Full-service content production from concept to delivery. Brand films, commercials, documentaries, and campaign content."
                />
            </Helmet>

            <PageLayout>
                <PageHero
                    subtitle="Content Production"
                    title="Stories That Resonate"
                    description="Full-service content creation built on strategy, creativity, and technical excellence. From concept to final delivery."
                />

                {/* Video Showcase Grid */}
                <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 border-t border-border">
                    <SectionHeader
                        label="Showcase"
                        title="Featured Content"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {showcaseItems.map((item, index) => (
                            <div key={index} className="group cursor-pointer">
                                <div className="aspect-video bg-secondary/50 relative overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/40 transition-colors duration-300">
                                            <Play className="w-6 h-6 text-foreground ml-1" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                                        <div>
                                            <span className="text-xs text-primary uppercase tracking-widest">{item.type}</span>
                                            <h3 className="font-display text-xl font-semibold text-foreground mt-1">{item.title}</h3>
                                        </div>
                                        <span className="text-sm text-muted-foreground">{item.duration}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Content Types */}
                <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 border-t border-border">
                    <SectionHeader
                        label="Capabilities"
                        title="What We Create"
                        description="Modular content solutions tailored to your goals and platforms."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {contentBlocks.map((block, index) => (
                            <div
                                key={index}
                                className="p-8 md:p-12 border border-border hover:border-primary/30 transition-colors duration-300"
                            >
                                <span className="text-6xl font-display font-bold text-primary/10">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <h3 className="mt-4 font-display text-2xl font-semibold text-foreground">
                                    {block.title}
                                </h3>
                                <p className="mt-4 text-muted-foreground">
                                    {block.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Campaign Section */}
                <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 border-t border-border bg-secondary/10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-xs text-primary uppercase tracking-widest">Campaign-Driven</span>
                            <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold text-foreground">
                                Video-First Storytelling
                            </h2>
                            <p className="mt-6 text-muted-foreground">
                                In a world where attention is currency, we craft content that captures, holds, and converts. Every frame is intentional, every story authentic.
                            </p>
                            <a href="/contact" className="inline-block mt-8 btn-primary">
                                Start Your Project
                            </a>
                        </div>
                        <div className="aspect-video bg-secondary/50 flex items-center justify-center">
                            <span className="text-muted-foreground text-sm">Featured Campaign Video</span>
                        </div>
                    </div>
                </section>
            </PageLayout>
        </>
    );
};

export default Content;
