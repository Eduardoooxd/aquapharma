import Products from '../../components/Products';
import { ProductsSectionData } from '../../public/assets/data';

export const metadata = {
    title: 'Magnetoterapia',
};

async function MagnetoterapiaPage() {
    return <Products productsTypes={ProductsSectionData} />;
}

export default MagnetoterapiaPage;
