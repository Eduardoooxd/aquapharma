import Link from "next/link";
import { FunctionComponent } from "react";

export interface NavbarLinkProps {
	href: string;
	text: string;
}

const NavbarLink: FunctionComponent<NavbarLinkProps> = ({ href, text }) => {
	return (
        (<Link
            href={href}
            className="uppercase font-Montserrat transition duration-200 ease-linear hover:underline shadow-2xl  hover:drop-shadow-2xl">

            {text}

        </Link>)
    );
};

export const HamburgerNavbarLink: FunctionComponent<NavbarLinkProps> = ({
	href,
	text,
}) => {
	return (
        (<Link
            href={href}
            className=" font-Montserrat w-4/5 mx-auto py-2 border-b text-left text-base uppercase transition duration-200 ease-linear hover:text-blue-600  hover:scale-105 hover:drop-shadow-2xl">

            {text}

        </Link>)
    );
};

export default NavbarLink;
