import { FunctionComponent } from "react";

interface ContainerProps {
	children: React.ReactNode;
}

const Container: FunctionComponent<ContainerProps> = ({ children }) => {
	return (
		<div className="max-w-screen-2xl px-10 flex items-center justify-between">
			{children}
		</div>
	);
};

export default Container;
