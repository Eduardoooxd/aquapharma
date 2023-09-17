import { FunctionComponent } from 'react';

interface SectionContentProps {
    children: React.ReactNode;
}

const SectionContent: FunctionComponent<SectionContentProps> = ({ children }) => {
    return <section className="my-12 sm:my-20 ">{children}</section>;
};

export default SectionContent;
