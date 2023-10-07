import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

export interface ProductProps {
    name: string;
    image: StaticImageData;
    alt: string;
    link: string;
}

const ProductCard = ({ name, image, alt, link }: ProductProps) => {
    return (
        <Link
            className="group flex flex-col items-center justify-center gap-4 transition duration-300"
            href={link}
        >
            <Image
                className="aspect-[3/2] cursor-pointer object-contain group-hover:drop-shadow-xl-aquapharma-blue"
                src={image}
                width={300}
                height={200}
                alt={alt}
            />
            <h5 className="text-xl font-light">{name}</h5>
        </Link>
    );
};

export default ProductCard;
