type SectionContentProps = React.ComponentProps<'section'> & {
    children: React.ReactNode;
};

const SectionContent = ({ children, ...props }: SectionContentProps) => {
    return (
        <section className="my-12 sm:my-20" {...props}>
            {children}
        </section>
    );
};

export default SectionContent;
