import HydronProductImage from '@/assets/images/hydron/hydron-transparente.png';
import KMZeroProductImage from '@/assets/images/kmzero/kmzero-transparente.png';
import LaundryProProductImage from '@/assets/images/laundry-pro/laundry-pro.png';
import BackgroundImage1 from '@/assets/images/main-page-background/fundo1.jpg';
import BackgroundImage2 from '@/assets/images/main-page-background/fundo2.jpg';
import BackgroundImage3 from '@/assets/images/main-page-background/fundo3.jpg';
import BackgroundImage4 from '@/assets/images/main-page-background/fundo4.jpg';
import PurifierProductImage from '@/assets/images/purificadorAgua/purificador_agua.png';
import { HeroCarouselItemProps } from '../../../components/Hero';
import { ProductsTypeProps } from '../../../components/ProductsSection';

export const CAROUSEL_ITEMS: HeroCarouselItemProps[] = [
    {
        alt: '',
        image: BackgroundImage1,
        title: (
            <>
                Transforme a sua água <br />
                Mude a sua vida
            </>
        ),
        description: (
            <>
                Os nossos equipamentos purificam e transformam a água através de um processo de
                ionização natural com minerais
            </>
        ),
    },
    {
        alt: '',
        image: BackgroundImage2,
        title: (
            <>
                Água <br />O bem mais precioso da sua vida !
            </>
        ),
        description: (
            <>
                Água purificada, ionizada hidrogenada e mineralizada, sem magia.
                <br />É pura ciência!
            </>
        ),
    },
    {
        alt: '',
        image: BackgroundImage3,
        title: <>Nós somos o que bebemos</>,
        description: (
            <>
                A água é o nutriente mais abundante e importante do nosso corpo. <br />
                Se queremos o melhor para a nossa saúde, ela só pode ser do Bem
                <br />
                Pura. Alcalina. Antioxidante e Mineralizada.
            </>
        ),
    },
    {
        alt: '',
        image: BackgroundImage4,
        title: (
            <>
                {' '}
                Qual é a água ideal
                <br />
                para a sua saúde?
            </>
        ),
        description: (
            <>
                Faça a sua própria água potável, alcalina e antioxidante, <br /> rica em minerais e
                removida de impurezas, diretamente em sua própria casa ou escritório.
            </>
        ),
    },
];

export const ProductsSectionData: ProductsTypeProps[] = [
    {
        type: 'SOLUÇÕES EMPRESARIAIS',
        products: [
            {
                name: 'Água KMZERO',
                image: KMZeroProductImage,
                alt: 'Solução empresarial água kmzero',
                link: 'kmzero',
            },
        ],
    },
    {
        type: 'SOLUÇÕES DOMICILIARES',
        products: [
            {
                name: 'Hydron',
                image: HydronProductImage,
                alt: 'Solução domiciliar Hydron',
                link: 'hydron',
            },
            {
                name: 'Purificadores',
                image: PurifierProductImage,
                alt: 'Solução domiciliares de Purificadores de água',
                link: 'purificadoragua',
            },
            {
                name: 'Laundry Pro',
                image: LaundryProProductImage,
                alt: 'Solução domiciliar Laundry Pro',
                link: 'laundry',
            },
        ],
    },
];
