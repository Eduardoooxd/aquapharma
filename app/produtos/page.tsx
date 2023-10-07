import ProductsSection from '../../components/Products';
import { ProductsSectionData } from '../../public/assets/data';

export const metadata = {
    title: 'Produtos',
};

async function ProductsPage() {
    return <ProductsSection productsTypes={ProductsSectionData} />;
}

export default ProductsPage;
