'use client';

import AquapharmaLogo from '@/assets/images/logo/logo.png';
import { useDisableBodyScroll } from '@/hooks/disableBackgroundMoving';
import { useNextNavigationEvent } from '@/hooks/useNextNavigationEvent';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Container from '../Container';
import NavbarLink, { MobileNavbarLink } from '../NavbarLink';
import { NAVBAR_LINKS } from './data';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(window.scrollY > 50);
    const [menuOpen, setMenuOpen] = useState(false);

    useDisableBodyScroll({ isNavBarOpen: menuOpen });

    const closeMobileMenu = () => setMenuOpen(false);

    useNextNavigationEvent({ routeChangedCallback: closeMobileMenu });

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 z-50 w-full overflow-x-hidden py-8 transition-colors duration-300 ease-linear',
                `${isScrolled || menuOpen ? 'bg-white shadow-md' : 'bg-transparent'}`,
                `${menuOpen ? 'inset-0 flex flex-col gap-8' : ''}`
            )}
        >
            <Container>
                <div className="flex w-full items-center justify-between">
                    <Link className="relative block" href="/">
                        <Image
                            priority
                            src={AquapharmaLogo}
                            sizes="100vw"
                            alt="Logo da Aquapharma"
                            className="h-auto w-full max-w-[8rem] lg:max-w-[10rem]"
                        />
                    </Link>
                    <MobileMenu
                        className={cn('block lg:hidden')}
                        menuOpen={menuOpen}
                        setMenuOpen={setMenuOpen}
                    />
                    <DesktopMenu
                        className={cn(
                            'hidden lg:flex',
                            `${isScrolled ? 'text-black' : 'text-white'}`
                        )}
                    />
                </div>
            </Container>
            <div className={cn('lg:hidden', `${menuOpen ? 'border-t border-black' : 'hidden'}`)}>
                <div className={cn(`flex w-full flex-col`)}>
                    {NAVBAR_LINKS.map((link, index) => (
                        <MobileNavbarLink key={index} closeMobileMenu={closeMobileMenu} {...link} />
                    ))}
                </div>
            </div>
        </nav>
    );
};

const DesktopMenu = ({ className }: { className?: string }) => (
    <div className={cn('flex gap-x-6', className)}>
        {NAVBAR_LINKS.map((link, index) => (
            <NavbarLink key={index} {...link} />
        ))}
    </div>
);

const MobileMenu = ({
    className,
    menuOpen,
    setMenuOpen,
}: {
    className?: string;
    menuOpen: boolean;
    setMenuOpen: Dispatch<SetStateAction<boolean>>;
}) => {
    return (
        <>
            <div className={cn('flex h-full items-center', className)}>
                <button
                    role="navigation"
                    aria-label={`${
                        menuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'
                    }`}
                    onClick={() => setMenuOpen((prevValue) => !prevValue)}
                    className={cn('block text-black')}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {menuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        )}
                    </svg>
                </button>
            </div>
        </>
    );
};

export default Navbar;
