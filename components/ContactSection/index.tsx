import { FunctionComponent } from 'react';
import ContactForm from '../ContactForm';
import Container from '../Container';
import SectionContent from '../SectionContent';
import SectionTitle from '../SectionTitle';

const ContactSubTitle = ({ text }: { text: string }) => {
    return <h3 className="inline border-b border-solid  border-black pb-[2px] text-3xl">{text}</h3>;
};

const ContactSection: FunctionComponent = () => {
    return (
        <SectionContent>
            <Container>
                <SectionTitle>Contactos</SectionTitle>

                <div className="grid items-center justify-center grid-cols-1 gap-24 lg:grid-cols-2">
                    <ContactForm />
                    <div className="flex flex-col h-full gap-4">
                        <div>
                            <ContactSubTitle text="Queremos sempre falar consigo" />
                            <p className="mt-4 leading-10">
                                Estamos aqui sempre para falar consigo. Caso tenha alguma questão,
                                problema ou queira mais informações sobre algo relativo à
                                AQUAPHARMA, por favor utilize o nosso formulário ou contactos
                                alternativos. Prometemos ser breves e falar consigo assim que
                                possível.
                            </p>
                        </div>
                        <div className="leading-10">
                            <ContactSubTitle text="Contactos Alternativos" />
                            <h6 className="mt-4 text-xl font-bold">Morada</h6>
                            <p>Lugar de Gandra Aptd 135 4560-143 Guilhufe, Penafiel</p>
                            <h6 className="text-xl font-bold leading-normal">Email</h6>
                            <p className="leading-normal">Jesuspereira.m.industriais@gmail.com</p>
                        </div>
                    </div>
                </div>
            </Container>
        </SectionContent>
    );
};

export default ContactSection;
