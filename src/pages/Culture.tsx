import { Helmet } from "react-helmet-async";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { Link } from "react-router-dom";

const cultureBlocks = [
    {
        title: "Creative Environment",
        description: "A space designed for inspiration and collaboration, where ideas flow freely.",
    },
    {
        title: "Continuous Learning",
        description: "We invest in our team's growth through workshops, conferences, and mentorship.",
    },
    {
        title: "Work-Life Balance",
        description: "Flexible schedules and remote options that support our team's wellbeing.",
    },
    {
        title: "Diverse Perspectives",
        description: "A team from varied backgrounds bringing unique viewpoints to every project.",
    },
];

const Culture = () => {
    return (
        <>
            <Helmet>
                <title>Culture | Resonance Digital</title>
                <meta
                    name="description"
                    content="Discover life at Resonance Digital. Our culture, values, and what makes our creative studio a great place to work."
                />
            </Helmet>

            <PageLayout>
                <PageHero
                    subtitle="Life at Resonance"
                    title="Our Culture"
                    description="Where creativity meets collaboration. A look inside the studio that brings visual stories to life."
                />

                {/* Documentary-style Hero Image */}
                <section className="px-6 md:px-12 lg:px-24 py-8">
                    <div className="aspect-[21/9] bg-secondary/30 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
                        <div className="absolute bottom-8 left-8">
                            <span className="text-xs text-primary uppercase tracking-widest">Behind The Scenes</span>
                        </div>
                    </div>
                </section>

                {/* Culture Blocks */}
                <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 border-t border-border">
                    <SectionHeader
                        label="What Defines Us"
                        title="The Resonance Way"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {cultureBlocks.map((block, index) => (
                            <div key={index} className="p-8 border border-border">
                                <h3 className="font-display text-xl font-semibold text-foreground">
                                    {block.title}
                                </h3>
                                <p className="mt-4 text-muted-foreground">
                                    {block.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Gallery Grid */}
                <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 border-t border-border">
                    <SectionHeader
                        label="Moments"
                        title="Life Inside The Studio"
                    />
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                            <div
                                key={i}
                                className={`bg-secondary/30 ${i === 1 || i === 4 ? 'aspect-[3/4]' : 'aspect-square'}`}
                            />
                        ))}
                    </div>
                </section>

                {/* Video Section */}
                <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 border-t border-border bg-secondary/10">
                    <div className="aspect-video bg-secondary/50 flex items-center justify-center">
                        <span className="text-muted-foreground text-sm uppercase tracking-widest">
                            Culture Documentary Video
                        </span>
                    </div>
                    <p className="mt-8 text-center text-muted-foreground max-w-2xl mx-auto">
                        "At Resonance, we don't just create visuals—we create experiences. Every project is an opportunity to push boundaries and tell stories that matter."
                    </p>
                </section>

                {/* Join Us CTA */}
                <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32 border-t border-border text-center">
                    <span className="text-xs text-primary uppercase tracking-widest">Join The Team</span>
                    <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold text-foreground">
                        Ready to make an impact?
                    </h2>
                    <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                        We're always looking for talented individuals who share our passion for visual excellence.
                    </p>
                    <Link to="/contact" className="inline-block mt-8 btn-primary">
                        View Open Positions
                    </Link>
                </section>
            </PageLayout>
        </>
    );
};

export default Culture;
