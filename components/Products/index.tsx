import { FunctionComponent } from 'react';
import Container from '../Container';
import ProductsSection, { ProductsTypeProps } from '../ProductsSection';
import SectionContent from '../SectionContent';
import SectionTitle from '../SectionTitle';

interface ProductSectionsProps {
    productsTypes: ProductsTypeProps[];
}

const Products: FunctionComponent<ProductSectionsProps> = ({ productsTypes }) => {
    return (
        <SectionContent>
            <Container>
                <SectionTitle>OS NOSSOS PRODUTOS</SectionTitle>

                <div className="flex flex-col justify-center gap-12">
                    {productsTypes.map((productType, index) => {
                        return <ProductsSection key={index} {...productType} />;
                    })}
                </div>
            </Container>
        </SectionContent>
    );
};

export default Products;
