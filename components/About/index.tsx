import { FunctionComponent } from "react";

interface AboutProps {}

const About: FunctionComponent<AboutProps> = () => {
	return (
		<section>
			<h2 className="">A nossa missão</h2>
			<div className="flex flex-col">
				<div>
					<span>Visionários</span>
					<span>Atenciosos</span>
					<span>Compaixão</span>
				</div>
				<p>
					A AquaPharma está no mercado desde 2018. Nasceu da ambição
					de fornecer produtos e serviços de qualidade, com eficiência
					e a máxima exigência, a todos os clientes que queiram
					fomentar uma relação duradoura, de confiança e bastante
					direta. Fornecer ao mercado produtos e serviços inovadores e
					sofisticados que contribuam para incrementar os níveis de
					saúde e bem-estar dos nossos clientes, assegurado uma
					relação preço/qualidade que seja uma mais-valia para o
					cliente.
				</p>
			</div>
		</section>
	);
};

export default About;
