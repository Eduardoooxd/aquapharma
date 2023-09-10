import { FunctionComponent } from 'react';
import Product, { ProductProps } from '../Product';

type TypeProduct = 'SOLUÇÕES EMPRESARIAIS' | 'SOLUÇÕES DOMICILIARES';

export interface ProductsTypeProps {
    type: TypeProduct;
    products: ProductProps[];
}

const ProductsSection: FunctionComponent<ProductsTypeProps> = ({ type, products }) => {
    return (
        <div className="flex flex-col gap-8 text-center">
            <h3 className="text-2xl">{type}</h3>

            <div className="grid items-center justify-center gap-6 grid-cols-responsiveness-250px-columns">
                {products.map((product, index) => (
                    <Product key={index} {...product} />
                ))}
            </div>
        </div>
    );
};

export default ProductsSection;
