import { FunctionComponent } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import styles from "./Layout.module.scss";

interface LayoutProps {}

const Layout: FunctionComponent<LayoutProps> = () => {
	return (
		<div className={styles.body__container}>
			<Navbar />
			<Footer />
		</div>
	);
};

export default Layout;
