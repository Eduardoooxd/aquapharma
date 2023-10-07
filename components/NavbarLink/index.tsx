import Link from 'next/link';

export interface NavbarLinkProps {
    href: string;
    text: string;
}

const NavbarLink = ({ href, text }: NavbarLinkProps) => {
    return (
        <Link
            href={href}
            className="font-Montserrat uppercase shadow-2xl transition duration-200 ease-linear hover:underline hover:drop-shadow-2xl"
        >
            {text}
        </Link>
    );
};

export interface MobileNavbarLinkProps {
    href: string;
    text: string;
    closeMobileMenu: () => void;
}

export const MobileNavbarLink = ({ href, text, closeMobileMenu }: MobileNavbarLinkProps) => {
    return (
        <Link
            href={href}
            onClick={() => closeMobileMenu()}
            className="w-full border-b border-black px-1 py-4 text-left font-Montserrat text-base uppercase transition duration-200 ease-linear hover:text-aquapharma-blue hover:drop-shadow-2xl"
        >
            {text}
        </Link>
    );
};

export default NavbarLink;
