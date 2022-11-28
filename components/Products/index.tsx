import { FunctionComponent } from "react";

export interface Product {
	name: string;
	altName: string;
	image: string;
}

export interface TypeProducts {
	type: String;
	products: Product[];
}

export interface ProductsProps {
	typeProducts: TypeProducts[]; // SOLUÇÕES EMPRESARIAIS |  SOLUÇÕES DOMICILIARES
}

const Products: FunctionComponent<ProductsProps> = () => {
	return (
		<section>
			<div className="inner-width">
				<h2 className="section-title">OS NOSSOS PRODUTOS</h2>
				<h3 className="produtos-title">SOLUÇÕES EMPRESARIAIS</h3>

				<div className="grid-container grid-uso-industrial">
					<div className="responsive">
						<div className="gallery">
							<div className="des">Água KMZERO</div>
							<a href="kmzero" className="work">
								{/**<Image src="images/produtos/kmzero-transparente.png" />*/}
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Products;
