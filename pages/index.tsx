import type { NextPage } from "next";
import About from "../components/About";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import { CAROUSEL_ITEMS } from "../public/assets/data/index";

const Home: NextPage = () => {
	return (
		<>
			<Layout>
				<Hero carouselItems={CAROUSEL_ITEMS} />
				<About />
				<hr />
			</Layout>
		</>
	);
};

export default Home;
