import Container from '@/components/Container';
import GenericCard from '@/components/GenericCard/GenericCard';
import YoutubeVideo from '@/components/YoutubeVideo';
import BackgroundHydronImage from '@/images/hydron/background.jpg';
import HydronUnderBench from '@/images/hydron/hydron-baixo-banca.jpg';
import HydronOverBench from '@/images/hydron/hydron-sobre-banca.jpg';
import HeroHydronImage from '@/images/hydron/hydron-transparente.png';
import HydronBenefitsImage from '@/images/hydron/hydronReal.jpg';
import Image from 'next/image';
import { HYDRON_BENEFITS_TEXT, HYDRON_CARDS } from './data';

export const metadata = {
    title: 'Hydron',
    description:
        'Elimine os radicais livres com o equipamento de água hidrogenada mais completo do mercado.',
};

async function HydronPage() {
    return (
        <>
            <section className={`relative flex min-h-screen items-center justify-center`}>
                <div className="absolute inset-0 z-0">
                    <Image
                        src={BackgroundHydronImage}
                        className={`absolute h-auto w-full`}
                        sizes="100vw"
                        fill
                        style={{ objectFit: 'cover' }}
                        alt="Aquapharma Hydron Background Image"
                    />
                </div>
                <div className="main-container relative z-10 flex h-full flex-col items-center justify-center gap-16 lg:flex-row lg:py-0">
                    <Image
                        src={HeroHydronImage}
                        className={`h-auto w-full max-w-sm`}
                        priority
                        alt="aquapharma hydron"
                    />
                    <div className="flex flex-col gap-10 text-center text-white ">
                        <h2 className="text-6xl uppercase">HYDRON</h2>
                        <h3 className="text-balance text-2xl capitalize lg:text-3xl">
                            Elimine os radicais livres com o equipamento de água hidrogenada mais
                            completo do mercado
                        </h3>
                    </div>
                </div>
            </section>

            <Container className="flex flex-col gap-12">
                <section className="grid grid-cols-responsiveness-350px-columns justify-center gap-4 pt-12">
                    {HYDRON_CARDS.map((card, idx) => (
                        <GenericCard {...card} key={idx} />
                    ))}
                </section>

                <section className="flex flex-col gap-10 pb-12">
                    <h3 className="text-center text-2xl underline underline-offset-8">
                        Os benefícios da água hidrogenada
                    </h3>
                    <article className="grid grid-cols-1 justify-between gap-10 lg:grid-cols-2">
                        <Image
                            src={HydronBenefitsImage}
                            className={`h-auto w-full rounded`}
                            sizes="(max-width: 1080px) 100vw, 50vw"
                            alt="Beneficios da Hydron"
                        />
                        <div className="flex flex-col justify-between gap-4">
                            {HYDRON_BENEFITS_TEXT.map((line) => (
                                <p className="text-base font-light"> {line} </p>
                            ))}
                        </div>
                    </article>
                </section>
            </Container>

            <section className="bg-gray-800 py-12">
                <Container className="flex flex-col items-center gap-20">
                    <h3 className="text-center text-2xl text-white underline underline-offset-8">
                        A Hydron em vídeo
                    </h3>
                    <YoutubeVideo videoId="p2Yx7-BGteU" />
                    <YoutubeVideo videoId="jCSvS00lu7Y" />
                </Container>
            </section>

            <Container className="grid grid-cols-1 gap-8 py-12 lg:grid-cols-2">
                <div className="flex flex-col gap-5">
                    <h4 className="text-3xl font-bold">Instalação na bancada</h4>

                    <Image
                        src={HydronOverBench}
                        className={`h-auto w-full rounded`}
                        sizes="(max-width: 1080px) 100vw, 75vw"
                        alt="A Hydron é flexivel para ser instalada em qualquer dos lugares mais utilizados da sua casa"
                    />
                    <p className="text-base font-light">
                        Pode instalar a Hydron na sua bancada de cozinha. Terá água hidrogenada
                        quando quiser num dos locais mais utilizados da sua casa. Para este tipo de
                        instalação deve ser adquirido o modelo de kit garrafa.
                    </p>
                    <p className="text-base font-light">
                        Com alta concentração de H2O, entre 700 e 1200 ppb., dependendo sempre da
                        qualidade da origem da água.
                    </p>
                </div>

                <div className="flex flex-col gap-5">
                    <h4 className="text-3xl font-bold">Instalação debaixo da bancada</h4>
                    <Image
                        src={HydronUnderBench}
                        className={`h-auto w-full rounded`}
                        sizes="(max-width: 1080px) 100vw, 50vw"
                        alt="A Hydron é possivel de ser instalada debaixo da banca, ligando a sua torneira"
                    />
                    <p className="text-base font-light">
                        Existe a possibilidade da Hydron estar ligada debaixo da bancada. Para tal,
                        é necessário a ligação por osmose inversa com torneira de uma, duas, três ou
                        quatro vias.
                    </p>
                    <p className="text-base font-light">
                        É uma forma diferente de ter produção ilimitada de água hidrogenada. Com
                        alta concentração de H2O, entre 700 e 1200 ppb., dependendo da qualidade da
                        água.
                    </p>
                </div>
            </Container>
        </>
    );
}

export default HydronPage;
