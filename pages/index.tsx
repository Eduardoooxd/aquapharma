import type { NextPage } from "next";
import Head from "next/head";
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
			<Head>
				<title>AQUAPHARMA</title>
				<meta
					name="description"
					content="A AquaPharma está no mercado desde 2018. Nasceu da ambição de fornecer produtos e serviços de qualidade, com eficiência e a máxima exigência."
				/>
			</Head>

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
