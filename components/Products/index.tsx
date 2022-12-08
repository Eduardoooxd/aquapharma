import { FunctionComponent } from "react";
import Container from "../Container";
import ProductsType, { ProductsTypeProps } from "../ProductsType";
import SectionContent from "../SectionContent";
import SectionTitle from "../SectionTitle";

interface ProductSectionsProps {
	productsTypes: ProductsTypeProps[];
}

const Products: FunctionComponent<ProductSectionsProps> = ({
	productsTypes,
}) => {
	return (
		<SectionContent>
			<Container>
				<SectionTitle>OS NOSSOS PRODUTOS</SectionTitle>
				<div className="flex justify-center flex-col gap-12">
					{productsTypes.map((productType, index) => {
						return <ProductsType key={index} {...productType} />;
					})}
				</div>
			</Container>
		</SectionContent>
	);
};

export default Products;
