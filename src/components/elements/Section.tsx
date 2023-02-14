import React from "react";

interface SectionProps {
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children }) => {
    return (
        <section className="pl-4 pr-4 md:pl-8 md:pr-8 max-w-[1250px] mx-auto">
            {children}
        </section>
    );
};

Section.displayName = "Section";

export default Section;