import ProductsSection from '../../components/Products';
import { ProductsSectionData } from '../../public/assets/data';

export const metadata = {
    title: 'Laundry',
};

async function LaundryPage() {
    return <ProductsSection productsTypes={ProductsSectionData} />;
}

export default LaundryPage;
