import { FunctionComponent } from 'react';
import styles from './style.module.css';

interface SectionTitleProps {
    children: React.ReactNode;
}

const SectionTitle: FunctionComponent<SectionTitleProps> = ({ children }) => {
    return (
        <h2
            className={`text-balance mb-8 text-center text-3xl uppercase lg:text-4xl ${styles.section__title}`}
        >
            {children}
        </h2>
    );
};

export default SectionTitle;
