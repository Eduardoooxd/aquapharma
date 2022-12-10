import Link from "next/link";
import { FunctionComponent } from "react";

export interface NavbarLinkProps {
	href: string;
	text: string;
}

const NavbarLink: FunctionComponent<NavbarLinkProps> = ({ href, text }) => {
	return (
		<Link href={href}>
			<a className="uppercase font-Montserrat transition duration-200 ease-linear hover:underline shadow-2xl  hover:drop-shadow-2xl">
				{text}
			</a>
		</Link>
	);
};

export const HamburgerNavbarLink: FunctionComponent<NavbarLinkProps> = ({
	href,
	text,
}) => {
	return (
		<Link href={href}>
			<a className="font-Montserrat p-5 border-b text-left text-xl uppercase transition duration-200 ease-linear hover:text-blue-600  hover:scale-105 hover:drop-shadow-2xl">
				{text}
			</a>
		</Link>
	);
};

export default NavbarLink;
