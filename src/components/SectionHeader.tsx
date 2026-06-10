interface SectionHeaderProps {
    label?: string;
    title: string;
    description?: string;
    align?: "left" | "center";
}

const SectionHeader = ({ label, title, description, align = "left" }: SectionHeaderProps) => {
    return (
        <div className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : ""}`}>
            {label && (
                <span className="block text-xs uppercase tracking-widest text-primary mb-4">
                    {label}
                </span>
            )}
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
                {title}
            </h2>
            {description && (
                <p className={`mt-4 text-muted-foreground max-w-2xl ${align === "center" ? "mx-auto" : ""}`}>
                    {description}
                </p>
            )}
        </div>
    );
};

export default SectionHeader;
