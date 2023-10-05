import Image from 'next/image';
import Link from 'next/link';

export interface ProductProps {
    name: string;
    image: string;
    alt: string;
    link: string;
}

const ProductCard = ({ name, image, alt, link }: ProductProps) => {
    return (
        <Link
            className="flex flex-col items-center justify-center transition duration-300 hover:drop-shadow-xl-aquapharma-blue"
            href={link}
        >
            <Image
                className="aspect-[3/2] cursor-pointer object-contain "
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
