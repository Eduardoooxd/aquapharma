import { FunctionComponent } from "react";
import Navbar from "../Navbar/Navbar";

interface LayoutProps {}

const Layout: FunctionComponent<LayoutProps> = () => {
	return (
		<div className="">
			<Navbar />
		</div>
	);
};

export default Layout;
