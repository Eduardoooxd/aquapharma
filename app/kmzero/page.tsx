import Container from '@/components/Container';
import GenericCard from '@/components/GenericCard/GenericCard';
import GenericHero from '@/components/GenericHero';
import HotelKMZeroImage from '@/images/kmzero/agua-hotel.jpg';
import BackgroundKMZeroImage from '@/images/kmzero/background.webp';
import ServingKMZeroWaterImage from '@/images/kmzero/empregada-kmzero.jpg';
import Image from 'next/image';
import { KMZERO_CARDS, KMZERO_DESCRIPTION, KMZERO_WATER_BENEFITS } from './data';

export const metadata = {
    title: 'KMZero',
    description:
        'A Água KMZERO foi feita para suprimir a demanda dos negócios ligados à restauração, dando-lhes a água com a melhor qualidade para consumo, assim como uma personalização extraordinária das suas garrafas 100% ecológicas.',
};

async function KMZeroPage() {
    return (
        <>
            <GenericHero backgroundImage={BackgroundKMZeroImage}>
                <Container className="relative z-10 h-full font-light">
                    <div className="flex flex-col gap-12 text-center text-white">
                        <h2 className="text-4xl uppercase lg:text-6xl">KMZero</h2>
                    </div>
                </Container>
            </GenericHero>

            <Container className="py-12">
                <section className="flex flex-col gap-10">
                    <h3 className="text-center text-2xl underline underline-offset-8">
                        Água KMZERO
                    </h3>
                    <article className="grid grid-cols-1 justify-between gap-10 lg:grid-cols-2">
                        <Image
                            src={ServingKMZeroWaterImage}
                            className={`h-auto w-full rounded`}
                            sizes="(max-width: 1080px) 100vw, 50vw"
                            alt="KM Zero proporciona a melhor qualidade possivel aos seus clientes"
                        />
                        <div className="flex flex-col justify-between gap-2">
                            {KMZERO_WATER_BENEFITS.map((line, index) => (
                                <p key={index} className="text-base">
                                    {line}
                                </p>
                            ))}
                        </div>
                    </article>
                </section>
            </Container>

            <section className="bg-gray-800">
                <Container className="flex flex-col py-12">
                    <section className="grid grid-cols-1 justify-center gap-4 text-white lg:grid-cols-2">
                        {KMZERO_CARDS.map((card, idx) => (
                            <GenericCard {...card} key={idx} />
                        ))}
                    </section>
                </Container>
            </section>

            <Container className="py-12">
                <div className="flex flex-col gap-5">
                    <h3 className="text-center text-2xl underline underline-offset-8">
                        Água Sustentável, Personalizada e com Qualidade Premium
                    </h3>
                    <article className="grid grid-cols-1 justify-between gap-10 lg:grid-cols-2">
                        <div className="flex flex-col justify-evenly gap-4">
                            {KMZERO_DESCRIPTION.map((line, index) => (
                                <p key={index} className="text-base font-light">
                                    {line}
                                </p>
                            ))}
                        </div>

                        <Image
                            src={HotelKMZeroImage}
                            className={`h-auto w-full rounded`}
                            sizes="(max-width: 1080px) 100vw, 50vw"
                            alt="A Hydron é possivel de ser instalada debaixo da banca, ligando a sua torneira"
                        />
                    </article>
                </div>
            </Container>
        </>
    );
}

export default KMZeroPage;
