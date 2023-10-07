import { cn } from '@/lib/utils';
import styles from './style.module.css';

interface SectionTitleProps {
    children: React.ReactNode;
    className?: string;
}

const SectionTitle = ({ children, className }: SectionTitleProps) => {
    return (
        <h2
            className={cn(
                `text-balance mb-8 text-center text-3xl uppercase lg:text-4xl ${styles.section__title}`,
                className
            )}
        >
            {children}
        </h2>
    );
};

export default SectionTitle;
