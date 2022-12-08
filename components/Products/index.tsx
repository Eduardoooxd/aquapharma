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
				{productsTypes.map((productType, index) => {
					return <ProductsType key={index} {...productType} />;
				})}
			</Container>
		</SectionContent>
	);
};

export default Products;
