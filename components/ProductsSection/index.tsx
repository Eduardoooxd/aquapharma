import { FunctionComponent } from 'react';
import ProductCard, { ProductProps } from '../ProductCard';

type TypeProduct = 'SOLUÇÕES EMPRESARIAIS' | 'SOLUÇÕES DOMICILIARES';

export interface ProductsTypeProps {
    type: TypeProduct;
    products: ProductProps[];
}

const ProductsSection: FunctionComponent<ProductsTypeProps> = ({ type, products }) => {
    return (
        <div className="flex flex-col gap-8 text-center">
            <h3 className="text-2xl">{type}</h3>

            <div className="grid grid-cols-responsiveness-250px-columns items-center justify-center gap-6">
                {products.map((product, index) => (
                    <ProductCard key={index} {...product} />
                ))}
            </div>
        </div>
    );
};

export default ProductsSection;
