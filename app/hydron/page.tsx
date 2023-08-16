import BackgroundHydronImage from '@/images/hydron/background.jpg';
import HeroHydronImage from '@/images/hydron/hydron-transparente.png';
import Image from 'next/image';

export const metadata = {
    title: 'Hydron',
};

async function HydronPage() {
    return (
        <section className={`min-h-screen relative flex items-center justify-center`}>
            <div className="absolute inset-0 z-0">
                <Image
                    src={BackgroundHydronImage}
                    className={`w-full h-auto absolute`}
                    sizes="100vw"
                    fill
                    style={{ objectFit: 'cover' }}
                    alt="Aquapharma Hydron Background Image"
                />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full gap-16 main-container lg:flex-row lg:py-0">
                <Image
                    src={HeroHydronImage}
                    className={`w-full max-w-sm h-auto`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="aquapharma hydron"
                />
                <div className="flex flex-col gap-10 text-center text-white ">
                    <h2 className="text-6xl uppercase">HYDRON</h2>
                    <h3 className="text-2xl capitalize lg:text-3xl text-balance">
                        Elimine os radicais livres com o equipamento de água hidrogenada mais
                        completo do mercado
                    </h3>
                </div>
            </div>
        </section>
    );
}

export default HydronPage;
