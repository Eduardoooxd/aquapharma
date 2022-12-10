import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import Products from "../components/Products";
import { ProductsSectionData } from "../public/assets/data/index";

const Produtos: NextPage = () => {
	return (
		<>
			<Head>
				<title>Produtos | AQUAPHARMA</title>
				<meta
					name="description"
					content="A AquaPharma está no mercado desde 2018. Nasceu da ambição de fornecer produtos e serviços de qualidade, com eficiência e a máxima exigência."
				/>
			</Head>

			<Layout>
				<Products productsTypes={ProductsSectionData} />
			</Layout>
		</>
	);
};

export default Produtos;
