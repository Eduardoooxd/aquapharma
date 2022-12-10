import { Fade as Hamburger } from "hamburger-react";
import { FunctionComponent, useState } from "react";
import { useDisableBodyScroll } from "../../hooks/disableBackgroundMoving";
import { HamburgerNavbarLink, NavbarLinkProps } from "../NavbarLink";

interface HamburgerMenuProps {
	navBarLinks: NavbarLinkProps[];
}

const HamburgerMenu: FunctionComponent<HamburgerMenuProps> = ({
	navBarLinks,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	useDisableBodyScroll({ isNavBarOpen: isOpen });

	const OpenHamburgerMenu = () => {
		const openedMenuAtRight = isOpen && "-translate-x-full";

		return (
			<div
				className={`fixed ${openedMenuAtRight} py-20 left-full max-w-sm w-full z-[-1] top-0 min-h-screen bg-white flex flex-col  gap-8 transition-all duration-500`}>
				{navBarLinks.map((link, index) => (
					<HamburgerNavbarLink key={index} {...link} />
				))}
			</div>
		);
	};

	return (
		<div>
			<Hamburger toggled={isOpen} toggle={setIsOpen} />
			<OpenHamburgerMenu />
		</div>
	);
};

export default HamburgerMenu;
