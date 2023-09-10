import Link from 'next/link';
import { FunctionComponent } from 'react';

export interface NavbarLinkProps {
    href: string;
    text: string;
}

const NavbarLink: FunctionComponent<NavbarLinkProps> = ({ href, text }) => {
    return (
        <Link
            href={href}
            className="font-Montserrat uppercase shadow-2xl transition duration-200 ease-linear hover:underline hover:drop-shadow-2xl"
        >
            {text}
        </Link>
    );
};

export const HamburgerNavbarLink: FunctionComponent<NavbarLinkProps> = ({ href, text }) => {
    return (
        <Link
            href={href}
            className="w-full border-b p-2 text-left font-Montserrat text-base uppercase transition duration-200 ease-linear hover:scale-105 hover:text-blue-600 hover:drop-shadow-2xl"
        >
            {text}
        </Link>
    );
};

export default NavbarLink;
