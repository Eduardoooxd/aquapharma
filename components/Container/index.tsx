import { FunctionComponent } from "react";

interface ContainerProps {
	children: React.ReactNode;
}

const Container: FunctionComponent<ContainerProps> = ({ children }) => {
	return (
		<div className="max-w-screen-2xl w-full px-10 flex items-center justify-center">
			{children}
		</div>
	);
};

export default Container;
