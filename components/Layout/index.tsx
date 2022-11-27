import { FunctionComponent } from "react";
import Navbar from "../Navbar";

interface LayoutProps {
	children?: React.ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
	return (
		<div className="">
			<Navbar />
			{children}
		</div>
	);
};

export default Layout;
