import type { NextPage } from "next";
import About from "../components/About";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
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
			</Layout>
		</>
	);
};

export default Home;
