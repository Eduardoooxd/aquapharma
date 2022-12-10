import { FunctionComponent } from "react";
import { FaArrowUp } from "react-icons/fa";
import Footer from "../Footer";
import Navbar from "../Navbar";

interface LayoutProps {
	children?: React.ReactNode;
}

const GoToTopButton: FunctionComponent = () => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<button
			hidden
			onClick={scrollToTop}
			className="group fixed bg-aquapharma-blue bottom-10 right-10 aspect-square w-10 rounded-lg flex justify-center items-center ">
			<FaArrowUp className="group-hover:scale-125 transition duration-300 text-white w-full " />
		</button>
	);
};

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
