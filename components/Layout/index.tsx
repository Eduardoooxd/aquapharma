import { FunctionComponent } from "react";
import Footer from "../Footer";
import GoToTopButton from "../GoToTopButton";
import Navbar from "../Navbar";

interface LayoutProps {
	children?: React.ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
	return (
		<div className="">
			<Navbar />
			{children}
			<GoToTopButton />
			<Footer />
		</div>
	);
};

export default Layout;
