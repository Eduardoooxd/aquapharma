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
	const menuClass = isOpen ? "left-0" : "left-full";
	useDisableBodyScroll({ isNavBarOpen: isOpen });

	return (
		<div>
			<Hamburger toggled={isOpen} toggle={setIsOpen} />
			<div
				className={`fixed  py-32  max-w-sm w-full z-[-1] top-0  ${menuClass}  min-h-screen bg-white flex flex-col  gap-8 transition-all duration-500`}>
				<hr />
				{navBarLinks.map((link, index) => (
					<HamburgerNavbarLink key={index} {...link} />
				))}
			</div>
		</div>
	);
};

export default HamburgerMenu;
