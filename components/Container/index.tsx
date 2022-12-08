import { FunctionComponent } from "react";

interface ContainerProps {
	children: React.ReactNode;
}

const Container: FunctionComponent<ContainerProps> = ({ children }) => {
	return (
		<div className="max-w-screen-xl w-full px-10 mx-auto">{children}</div>
	);
};

interface ContentContainerProps {
	children: React.ReactNode;
}

export const ContentContainer: FunctionComponent<ContentContainerProps> = ({
	children,
}) => {
	return (
		<Container>
			<div className="flex flex-col items-center justify-center w-full">
				{children}
			</div>
		</Container>
	);
};

export default Container;
