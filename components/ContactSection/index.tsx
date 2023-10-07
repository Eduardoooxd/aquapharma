import ContactForm from '../ContactForm';
import Container from '../Container';
import SectionContent from '../SectionContent';
import SectionTitle from '../SectionTitle';

const ContactSubTitle = ({ text }: { text: string }) => {
    return (
        <h3 className="text-balance w-fit border-b  border-solid border-black pb-[2px] text-2xl lg:text-3xl">
            {text}
        </h3>
    );
};

const ContactSection = () => {
    return (
        <SectionContent id="contact">
            <Container>
                <SectionTitle>Contactos</SectionTitle>

                <div className="grid grid-cols-1 items-center justify-center gap-12 lg:grid-cols-2 lg:gap-24">
                    <ContactForm />
                    <div className="flex h-full flex-col gap-4">
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
