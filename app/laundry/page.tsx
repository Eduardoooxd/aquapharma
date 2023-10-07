import BackgroundLaundryImage from '@/assets/images/laundry-pro/laundry-hero.jpg';
import LaundryWashingMachineImage from '@/assets/images/laundry-pro/laundry-on-machine2.jpg';
import LaundryDetailsImage from '@/assets/images/laundry-pro/laundry-pro-2.png';
import HeroLaundryImage from '@/assets/images/laundry-pro/laundry-pro-3.png';
import Container from '@/components/Container';
import GenericCard from '@/components/GenericCard/GenericCard';
import GenericHero from '@/components/GenericHero';
import SectionTitle from '@/components/SectionTitle';
import Image from 'next/image';
import { LAUNDRY_CARDS, LAUNDRY_DETAILS } from './data';

export const metadata = {
    title: 'Laundry',
};

async function LaundryPage() {
    return (
        <>
            <GenericHero backgroundImage={BackgroundLaundryImage} backgroundPosition="right">
                <Container className="z-10 flex items-center justify-center gap-4">
                    <Image
                        className="hidden sm:block"
                        src={HeroLaundryImage}
                        priority
                        width={430}
                        height={160}
                        alt="aquapharma laundry pro machine"
                    />
                    <main className="text-balance flex h-full flex-col justify-between gap-8 text-center text-white sm:gap-4">
                        <h2 className="text-6xl capitalize drop-shadow-text-outline">
                            Laundry Pro 2.0
                        </h2>
                        <p className="max-w-md text-xl drop-shadow-text-outline">
                            Lavar e limpar sem quimicos, com poupança imediata em cada utilização
                        </p>
                    </main>
                </Container>
            </GenericHero>

            <Container className="flex flex-col gap-10 py-12">
                <SectionTitle className="text-balance text-xl capitalize lg:text-2xl">
                    LAUNDRY PRO 2.0 | A solução inteligente para lavar e limpar.
                </SectionTitle>
                <section className="flex flex-col justify-between gap-10 sm:flex-row sm:gap-20">
                    <Image
                        src={LaundryWashingMachineImage}
                        width={610}
                        height={360}
                        alt="You can install Laundry Pro 2.0 in any parte of your home"
                    />

                    <article className="text-balance flex flex-col justify-center gap-4 text-base leading-7 sm:gap-8">
                        <p>
                            Recorremos à natureza para encontrar uma maneira diferente de lavar a
                            roupa. A <b>Laundry Pro 2.0</b> é a melhor opção para lavar a sua roupa,
                            para cuidar da sua família e para o meio ambiente. Aliado a isso, irá
                            também ajudar a que consiga poupar dinheiro em cada utilização.
                        </p>
                        <p>
                            A <b>Laundry Pro 2.0</b> é constituída por uma poderosa e nova,
                            revolucionária e exclusiva tecnologia, o ActivePure, que com a ação de
                            limpeza do oxigénio ativo remove a sujidade e as manchas das fibras e
                            tecidos, eliminando as bactérias causadoras do mau-odor.
                        </p>
                    </article>
                </section>
            </Container>

            <section className="bg-gray-800">
                <Container className="flex flex-col py-12">
                    <section className="grid grid-cols-responsiveness-250px-columns justify-center gap-4 text-white">
                        {LAUNDRY_CARDS.map((card, idx) => (
                            <GenericCard {...card} key={idx} />
                        ))}
                    </section>
                </Container>
            </section>

            <Container className="py-12">
                <SectionTitle className="text-balance text-xl capitalize lg:text-2xl">
                    Características Técnicas
                </SectionTitle>
                <section className="flex flex-col justify-between gap-10 sm:flex-row sm:gap-20">
                    <ul className="text-balance flex w-full flex-col justify-between gap-2 text-base">
                        {LAUNDRY_DETAILS.map(({ details, description }, idx) => (
                            <li className="flex items-center gap-2 text-sm sm:text-base" key={idx}>
                                <span className="font-bold ">{details}: </span>
                                <span className="self-end ">{description}</span>
                            </li>
                        ))}
                    </ul>

                    <Image
                        src={LaundryDetailsImage}
                        width={610}
                        height={400}
                        alt="Laundry Pro 2.0 is a smart solution for washing and cleaning"
                    />
                </section>
            </Container>
        </>
    );
}

export default LaundryPage;
