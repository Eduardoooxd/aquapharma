import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent } from 'react';

export interface ProductProps {
    name: string;
    image: string;
    alt: string;
    link: string;
}

const Product: FunctionComponent<ProductProps> = ({ name, image, alt, link }) => {
    return (
        <Link
            className="flex flex-col items-center justify-center transition duration-300 hover:drop-shadow-2xl"
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

export default Product;
