import type { NextPage } from "next";
import About from "../components/About";
import ContactSection from "../components/ContactSection";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Map from "../components/Map";
import Products from "../components/Products";
import {
	CAROUSEL_ITEMS,
	ProductsSectionData,
} from "../public/assets/data/index";

const Home: NextPage = () => {
	return (
		<>
			<Layout>
				<Hero carouselItems={CAROUSEL_ITEMS} />
				<About />
				<hr />
				<Products productsTypes={ProductsSectionData} />
				<hr />
				<ContactSection />
				<Map />
			</Layout>
		</>
	);
};

export default Home;
