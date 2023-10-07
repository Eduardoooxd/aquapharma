import { cn } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';

interface GenericHeroProps {
    backgroundImage: StaticImageData;
    children?: React.ReactNode;
    className?: string;
    backgroundPosition?: string;
}

export default function GenericHero({
    backgroundImage,
    children,
    className,
    backgroundPosition,
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
                    quality={100}
                    style={{ objectFit: 'cover', objectPosition: backgroundPosition }}
                    alt="Aquapharma Hydron Background Image"
                    priority
                />
            </div>
            {children}
        </section>
    );
}
