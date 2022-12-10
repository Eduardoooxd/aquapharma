import { FunctionComponent } from "react";

interface SectionContentProps {
	children: React.ReactNode;
}

const SectionContent: FunctionComponent<SectionContentProps> = ({
	children,
}) => {
	/*
	const targetRef = useRef(null);

	useEffect(() => {
		
		const observer = new IntersectionObserver(onIntersection);

		observer.observe(targetRef.current);

		return () => observer.unobserve(targetRef?.current);
	}, []);

	const onIntersection = (entries) => {
		// Check if the target element intersects with the viewport or the root element

		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("show");
			} else {
				entry.target.classList.remove("show");
			}
		});
	};*/

	return <section className="my-12 ">{children}</section>;
};

export default SectionContent;
