import { FunctionComponent } from "react";
import utilStyles from "../../styles/utils.module.scss";
import styles from "./Footer.module.scss";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
	return (
		<footer className={styles.footer}>
			a{/* TODO Continuar daqui*/}
			<div className={utilStyles.container}>
				<div className="sm">
					<a href="#" className="fab fa-facebook-f"></a>
					<a href="#" className="fab fa-twitter"></a>
					<a href="#" className="fab fa-instagram"></a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
