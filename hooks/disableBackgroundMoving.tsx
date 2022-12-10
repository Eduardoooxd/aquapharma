import { useEffect } from "react";

interface disableBodyScrollProps {
	isNavBarOpen: boolean;
}

export const useDisableBodyScroll = ({
	isNavBarOpen: isNavBarOpen,
}: disableBodyScrollProps) => {
	useEffect(() => {
		if (isNavBarOpen) {
			document.body.style.overflow = "hidden";
			return;
		}
		document.body.style.overflow = "unset";
	}, [isNavBarOpen]);
};
