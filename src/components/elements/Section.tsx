import React from "react";

interface SectionProps {
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children }) => {
    return (
        <section className="p-4 md:p-8">
            {children}
        </section>
    );
};

Section.displayName = "Section";

export default Section;