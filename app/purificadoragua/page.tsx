import Container from '@/components/Container';
import GenericCard from '@/components/GenericCard/GenericCard';
import GenericHero from '@/components/GenericHero';
import BackgroundWaterPurifierImage from '@/images/purificadorAgua/background.jpg';
import PurifierMainImage from '@/images/purificadorAgua/purificadores-de-água.jpg';
import GirlHoldingWaterImage from '@/images/purificadorAgua/rapariga-agua.jpg';
import Image from 'next/image';
import { AQUAPHARMA_MODEL_EXPLAINED, PURIFIER_OPTIONS, WATER_PURIFIER_CARDS } from './data';

export const metadata = {
    title: 'Purificador Água',
};

async function WaterPurifierPage() {
    return (
        <>
            <GenericHero backgroundImage={BackgroundWaterPurifierImage}>
                <Container className="relative z-10 h-full font-light">
                    <div className="flex flex-col gap-12 text-center text-white">
                        <h2 className="text-4xl uppercase lg:text-6xl">Purificadores de água</h2>
                        <h3 className="text-balance text-2xl capitalize lg:text-3xl">
                            Tenha água com a melhor qualidade
                        </h3>
                    </div>
                </Container>
            </GenericHero>

            <Container className="py-12">
                <section className="flex flex-col gap-10">
                    <h3 className="text-center text-2xl underline underline-offset-8">
                        Simplicidade e eficiência máxima
                    </h3>
                    <article className="grid grid-cols-1 justify-between gap-10 lg:grid-cols-2">
                        <Image
                            src={PurifierMainImage}
                            className={`h-auto w-full rounded`}
                            sizes="(max-width: 1080px) 100vw, 50vw"
                            alt="Beneficios da Hydron"
                        />
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-2">
                                <h4 className="text-lg">
                                    As nossas opções para purificar a sua água são inúmeras.
                                </h4>
                                <h5 className="text-base font-light">
                                    Encontramos a melhor solução para o seu caso, instalamos e
                                    fazemos a manutenção para que tenha água com a melhor qualidade.{' '}
                                    <b>Sempre.</b>
                                </h5>
                            </div>
                            <ul className="flex flex-1 flex-col justify-between gap-4 pl-5">
                                {PURIFIER_OPTIONS.map((text) => (
                                    <li className="list-disc">
                                        <p className="text-sm font-light">{text}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </article>
                </section>
            </Container>

            <section className="bg-gray-800">
                <Container className="flex flex-col py-12">
                    <section className="grid grid-cols-responsiveness-350px-columns justify-center gap-4 text-white">
                        {WATER_PURIFIER_CARDS.map((card, idx) => (
                            <GenericCard {...card} key={idx} />
                        ))}
                    </section>
                </Container>
            </section>

            <Container className="py-12">
                <section className="flex flex-col gap-10">
                    <h3 className="text-center text-2xl underline underline-offset-8">
                        Nem toda a água é igual
                    </h3>
                    <article className="grid grid-cols-1 justify-between gap-10 lg:grid-cols-2">
                        <div className="flex flex-col justify-evenly gap-4">
                            {AQUAPHARMA_MODEL_EXPLAINED.map((line) => (
                                <p className="text-base font-light"> {line} </p>
                            ))}
                        </div>
                        <Image
                            src={GirlHoldingWaterImage}
                            className={`h-auto w-full rounded`}
                            sizes="(max-width: 1080px) 100vw, 50vw"
                            alt="A purificador de água é a solução para trazer o melhor da sua saúde"
                        />
                    </article>
                </section>
            </Container>
        </>
    );
}

export default WaterPurifierPage;
