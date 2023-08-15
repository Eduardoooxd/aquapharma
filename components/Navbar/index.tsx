import Image from "next/image";
import Link from "next/link";
import { FunctionComponent, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import Container from "../Container";
import HamburgerMenu from "../HamburgerMenu";
import NavbarLink, { NavbarLinkProps } from "../NavbarLink";

const Navbar: FunctionComponent = () => {
	const navBarLinks: NavbarLinkProps[] = [
		{
			href: "#about",
			text: "A nossa missão",
		},
		{
			href: "./produtos",
			text: "Produtos",
		},
		{
			href: "#contact",
			text: "Contactos",
		},
	];

	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });

	const navBarRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		// Set up a scroll event listener
		window.addEventListener("scroll", handleScroll);

		// Clean up the event listener when the component is unmounted
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});

	const handleScroll = () => {
		const navBar = navBarRef.current;
		if (navBar === null) return;

		if (window.scrollY > 20) {
			navBar.classList.add("sticky--nav");
		} else {
			navBar.classList.remove("sticky--nav");
		}
	};

	const DesktopMenu = () => (
		<div className="flex gap-x-6 text-white">
			{navBarLinks.map((link, index) => (
				<NavbarLink key={index} {...link} />
			))}
		</div>
	);

	return (
        <nav
			ref={navBarRef}
			className="fixed bg-transparent w-full py-8 top-0 z-50 transition-all ease-linear duration-300 overflow-x-hidden flex justify-center">
			<Container>
				<div className="w-full flex justify-between items-center">
					<div>
						<Link href="/">

                            <Image
                                priority
                                src="/assets/images/logo/logo.jpg"
                                alt="Logo da Aquapharma"
                                height={70}
                                width={170}
                                className="object-contain "
                            />

                        </Link>
					</div>
					{isTabletOrMobile ? (
						<HamburgerMenu navBarLinks={navBarLinks} />
					) : (
						<DesktopMenu />
					)}
				</div>
			</Container>
		</nav>
    );
};

export default Navbar;
