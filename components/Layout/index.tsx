import { FunctionComponent } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

interface LayoutProps {
	children?: React.ReactNode;
}

const GoToTopButton: FunctionComponent = () => {
	return <button className="goTop fas fa-arrow-up"></button>;
};

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
	return (
		<div className="">
			<Navbar />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
