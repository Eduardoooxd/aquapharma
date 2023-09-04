import { cn } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';

interface GenericHeroProps {
    backgroundImage: StaticImageData;
    children?: React.ReactNode;
    className?: string;
}

export default function GenericHero({
    backgroundImage,
    children,
    className,
    ...props
}: GenericHeroProps) {
    return (
        <section
            className={cn(`relative flex min-h-screen items-center justify-center`, className)}
            {...props}
        >
            <div className="absolute inset-0 z-0">
                <Image
                    src={backgroundImage}
                    className={`absolute h-auto w-full`}
                    sizes="100vw"
                    fill
                    style={{ objectFit: 'cover' }}
                    alt="Aquapharma Hydron Background Image"
                />
            </div>
            {children}
        </section>
    );
}
