import { HeroCarouselItemProps } from '../../../components/Hero';
import { ProductsTypeProps } from '../../../components/ProductsSection';

export const CAROUSEL_ITEMS: HeroCarouselItemProps[] = [
    {
        alt: '',
        src: '/assets/images/main-page-background/fundo1.jpg',
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
        src: '/assets/images/main-page-background/fundo2.jpg',
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
        src: '/assets/images/main-page-background/fundo3.jpg',
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
        src: '/assets/images/main-page-background/fundo4.jpg',
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
                image: '/assets/images/products/kmzero/kmzero.png',
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
                image: '/assets/images/products/hydron/hydron.png',
                alt: 'Solução domiciliar Hydron',
                link: 'hydron',
            },
            {
                name: 'Purificadores',
                image: '/assets/images/products/advance/advance2.png',
                alt: 'Solução domiciliares de Purificadores de água',
                link: 'purificadoragua',
            },
            {
                name: 'Laundry Pro',
                image: '/assets/images/products/laundry-pro/laundry-pro.png',
                alt: 'Solução domiciliar Laundry Pro',
                link: 'laundry',
            },
        ],
    },
];
