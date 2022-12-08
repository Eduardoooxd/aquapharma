import { FunctionComponent } from "react";
import styles from "./style.module.css";

interface SectionTitleProps {
	children: React.ReactNode;
}

const SectionTitle: FunctionComponent<SectionTitleProps> = ({ children }) => {
	return (
		<h2
			className={`text-4xl mb-8 uppercase text-center ${styles.section__title}`}>
			{children}
		</h2>
	);
};

export default SectionTitle;
