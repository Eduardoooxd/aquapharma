import { FunctionComponent } from "react";
import ContactForm from "../ContactForm";
import Container from "../Container";
import SectionContent from "../SectionContent";
import SectionTitle from "../SectionTitle";

const ContactSubTitle = ({ text }: { text: string }) => {
	return (
		<h3 className="text-3xl border-b border-solid  border-black inline pb-[2px]">
			{text}
		</h3>
	);
};

const ContactSection: FunctionComponent = () => {
	return (
		<SectionContent>
			<Container>
				<SectionTitle>Contactos</SectionTitle>

				<div className="grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-24">
					<ContactForm />
					<div className="flex h-full justify-around flex-col flex-1">
						<div>
							<ContactSubTitle text="Queremos sempre falar consigo" />
							<p className="leading-10 mt-4">
								Estamos aqui sempre para falar consigo. Caso
								tenha alguma questão, problema ou queira mais
								informações sobre algo relativo à AQUAPHARMA,
								por favor utilize o nosso formulário ou
								contactos alternativos. Prometemos ser breves e
								falar consigo assim que possível.
							</p>
						</div>
						<div className="leading-10">
							<ContactSubTitle text="Contactos Alternativos" />
							<h6 className="text-xl mt-4 font-bold">Morada</h6>
							<p>
								Lugar de Gandra Aptd 135 4560-143 Guilhufe,
								Penafiel
							</p>
							<h6 className="text-xl leading-normal font-bold">
								Email
							</h6>
							<p className="leading-normal">
								Jesuspereira.m.industriais@gmail.com
							</p>
						</div>
					</div>
				</div>
			</Container>
		</SectionContent>
	);
};

export default ContactSection;
