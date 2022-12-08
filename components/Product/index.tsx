import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";

export interface ProductProps {
	name: string;
	image: string;
	alt?: string;
	link: string;
}

const Product: FunctionComponent<ProductProps> = ({
	name,
	image,
	alt,
	link,
}) => {
	return (
		<div className="gallery">
			<Link href={link}>
				<Image
					className="aspect-[3/2] object-contain cursor-pointer hover:drop-shadow-2xl transition duration-300"
					src={image}
					width={300}
					height={200}
					alt={alt}
				/>
			</Link>
			<h5 className="text-xl font-light">{name}</h5>
		</div>
	);
};

export default Product;
