import { FunctionComponent } from 'react';
import Container from '../Container';
import SectionContent from '../SectionContent';
import SectionTitle from '../SectionTitle';

const AquapharmaValues: FunctionComponent = () => {
    const AQUAPHARMA_VALUES = ['Visionários', 'Atenciosos', 'Compaixão'];

    return (
        <ul className="inline-flex gap-x-4 lg:gap-x-8">
            {AQUAPHARMA_VALUES.map((value, index) => (
                <li className="list-inside list-disc text-sm lg:text-lg" key={index}>
                    {value}
                </li>
            ))}
        </ul>
    );
};

interface AboutProps {}

const About: FunctionComponent<AboutProps> = () => {
    return (
        <SectionContent>
            <Container>
                <SectionTitle>A nossa missão</SectionTitle>
                <div className="flex flex-col gap-4 ">
                    <AquapharmaValues />
                    <div>
                        <p className="text-base font-light leading-8">
                            A AquaPharma está no mercado desde 2018, nascendo da ambição de fornecer
                            produtos e serviços de qualidade, com eficiência e a máxima exigência, a
                            todos os clientes que queiram fomentar uma relação duradoura, de
                            confiança e bastante direta, fornecendo ao mercado produtos e serviços
                            inovadores e sofisticados que contribuam para incrementar os níveis de
                            saúde e bem-estar dos nossos clientes, assegurado uma relação
                            preço/qualidade que seja uma mais-valia para o cliente.
                        </p>
                    </div>
                </div>
            </Container>
        </SectionContent>
    );
};

export default About;
