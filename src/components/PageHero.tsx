interface PageHeroProps {
    title: string;
    subtitle?: string;
    description?: string;
}

const PageHero = ({ title, subtitle, description }: PageHeroProps) => {
    return (
        <section className="min-h-[60vh] md:min-h-[70vh] flex flex-col justify-end px-6 md:px-12 lg:px-24 pb-16 md:pb-24 pt-32">
            <div className="max-w-4xl">
                {subtitle && (
                    <span
                        className="block text-xs uppercase tracking-widest text-primary mb-4 opacity-0 animate-fade-up"
                        style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
                    >
                        {subtitle}
                    </span>
                )}
                <h1
                    className="font-display text-4xl md:text-6xl lg:text-8xl font-semibold text-foreground opacity-0 animate-fade-up"
                    style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
                >
                    {title}
                </h1>
                {description && (
                    <p
                        className="mt-6 md:mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl opacity-0 animate-fade-up"
                        style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
                    >
                        {description}
                    </p>
                )}
            </div>
        </section>
    );
};

export default PageHero;
