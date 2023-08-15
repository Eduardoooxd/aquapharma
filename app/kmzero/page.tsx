import Products from '../../components/Products';
import { ProductsSectionData } from '../../public/assets/data';

export const metadata = {
    title: 'KMZero',
};

async function KMZeroPage() {
    return <Products productsTypes={ProductsSectionData} />;
}

export default KMZeroPage;
