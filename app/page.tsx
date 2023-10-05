import About from '../components/About';
import ContactSection from '../components/ContactSection';
import HeroCarouselImages from '../components/Hero';
import Map from '../components/Map';
import Products from '../components/Products';
import { CAROUSEL_ITEMS, ProductsSectionData } from '../public/assets/data';

export default async function RootPage() {
    return (
        <>
            <HeroCarouselImages carouselItems={CAROUSEL_ITEMS} />
            <About />
            <Products productsTypes={ProductsSectionData} />
            <ContactSection />
            <Map />
        </>
    );
}
