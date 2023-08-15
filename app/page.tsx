import About from "../components/About";
import ContactSection from "../components/ContactSection";
import Hero from "../components/Hero";
import Map from "../components/Map";
import Products from "../components/Products";
import { CAROUSEL_ITEMS, ProductsSectionData } from "../public/assets/data";

export default async function RootPage() {
	return (
		<>
			<Hero carouselItems={CAROUSEL_ITEMS} />
			<About />
			<Products productsTypes={ProductsSectionData} />
			<ContactSection />
			<Map />
		</>
	);
}
