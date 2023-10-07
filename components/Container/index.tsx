import { cn } from '@/lib/utils';

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
    return <div className={cn('mx-auto w-full max-w-screen-xl px-10', className)}>{children}</div>;
};

interface ContentContainerProps {
    children: React.ReactNode;
}

export const ContentContainer = ({ children }: ContentContainerProps) => {
    return (
        <Container>
            <div className="flex w-full flex-col items-center justify-center">{children}</div>
        </Container>
    );
};

export default Container;
