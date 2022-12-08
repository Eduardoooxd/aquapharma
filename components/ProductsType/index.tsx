import { FunctionComponent } from "react";
import Product, { ProductProps } from "../Product";

type TypeProduct = "SOLUÇÕES EMPRESARIAIS" | "SOLUÇÕES DOMICILIARES";

export interface ProductsTypeProps {
	type: TypeProduct;
	products: ProductProps[];
}

const ProductsType: FunctionComponent<ProductsTypeProps> = ({
	type,
	products,
}) => {
	return (
		<div className="text-center">
			<h3 className="text-2xl">{type}</h3>

			<div className="mt-8 gap-6 grid place-center place-content-center grid-cols-responsiveness-250px-columns">
				{products.map((product, index) => (
					<Product key={index} {...product} />
				))}
			</div>
		</div>
	);
};

export default ProductsType;
