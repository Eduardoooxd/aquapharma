import Products from '../../components/Products';
import { ProductsSectionData } from '../../public/assets/data';

export const metadata = {
    title: 'Purificador Água',
};

async function WaterPurifierPage() {
    return <Products productsTypes={ProductsSectionData} />;
}

export default WaterPurifierPage;
