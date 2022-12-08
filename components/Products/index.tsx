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

				<div>
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

				<div>
					<h1 className="produtos-title">SOLUÇÕES DOMICILIARES</h1>

					<div className="grid-container">
						<div className="responsive">
							<div className="gallery">
								<div className="des">Hydron</div>
								<a href="hydron" className="work">
									<img
										src="images/produtos/hydron.png"
										alt="aquapharma hydron"
									/>
								</a>
							</div>
						</div>

						<div className="responsive">
							<div className="gallery">
								<div className="des">Purificadores</div>
								<a href="purificadoragua" className="work">
									<img
										src="images/produtos/advance2.png"
										alt="aquapharma purificador agua"
									/>
								</a>
							</div>
						</div>

						<div className="responsive">
							<div className="gallery">
								<div className="des">Magnetoterapia</div>
								<a href="magnetoterapia" className="work">
									<img
										src="images/produtos/magnetoSecundary.png"
										alt="aquapharma magneto"
									/>
								</a>
							</div>
						</div>

						<div className="responsive">
							<div className="gallery">
								<div className="des">Laundry Pro</div>
								<a href="laundry" className="work">
									<img
										src="images/produtos/Laundry-Pro-Vipur-2.png"
										alt="aquapharma Laundry-Pro"
									/>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Products;
