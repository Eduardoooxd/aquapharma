import { cn } from '@/lib/utils';
import { FunctionComponent } from 'react';

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

const Container: FunctionComponent<ContainerProps> = ({ children, className }) => {
    return <div className={cn('mx-auto w-full max-w-screen-xl px-10', className)}>{children}</div>;
};

interface ContentContainerProps {
    children: React.ReactNode;
}

export const ContentContainer: FunctionComponent<ContentContainerProps> = ({ children }) => {
    return (
        <Container>
            <div className="flex w-full flex-col items-center justify-center">{children}</div>
        </Container>
    );
};

export default Container;
