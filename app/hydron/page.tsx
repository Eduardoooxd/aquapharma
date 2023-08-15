import Products from '../../components/Products';
import { ProductsSectionData } from '../../public/assets/data';

export const metadata = {
    title: 'Hydron',
};

async function HydronPage() {
    return <Products productsTypes={ProductsSectionData} />;
}

export default HydronPage;
