'use client';
import { cn } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';
import { ReactNode, useEffect, useState } from 'react';

export interface HeroCarouselItemProps {
    alt: string;
    image: StaticImageData;
    title: ReactNode;
    description: ReactNode;
}

export interface HeroCarouselProps {
    carouselItems: HeroCarouselItemProps[];
}

const HeroCarouselImages = ({ carouselItems }: HeroCarouselProps) => {
    const [imageIndex, setImageIndex] = useState(0);

    function showNextImage(): void {
        setImageIndex((prevIndex) => {
            setImageIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);

            return prevIndex + 1;
        });
    }

    function isIndexOfVisibleImage(indexToVerify: number) {
        return indexToVerify === imageIndex;
    }

    useEffect(() => {
        const interval = setInterval(() => showNextImage(), 6000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="flex h-full min-h-screen w-full overflow-hidden">
            {carouselItems.map(({ alt, image, title, description }, index) => (
                <section
                    style={{ translate: `${-100 * imageIndex}%` }}
                    key={image.src}
                    className="relative h-full min-h-screen w-full shrink-0 grow-0"
                >
                    <Image
                        priority
                        className={cn(
                            'h-screen',
                            `${isIndexOfVisibleImage(index) ? 'scale-125 animate-zoomIn' : ''}`
                        )}
                        aria-hidden={!isIndexOfVisibleImage(index)}
                        src={image}
                        alt={alt}
                        sizes="100vw"
                        style={{ objectFit: 'cover' }}
                    />
                    <div className="absolute-center text-balance flex flex-col gap-4 text-center text-white">
                        <h4 className="text-4xl font-bold">{title}</h4>
                        <p className="text-lg">{description}</p>
                    </div>
                </section>
            ))}
        </section>
    );
};

export default HeroCarouselImages;
