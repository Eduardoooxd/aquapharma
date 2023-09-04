import { GenericCardProps } from '@/components/GenericCard/GenericCard';
import { HeartPulse, PiggyBank, Wrench } from 'lucide-react';

export const PURIFIER_OPTIONS = [
    'Equipamentos simples e práticos.',
    'Eliminam químicos, odores, sabores e tudo o que degradar a qualidade da água.',
    'Poupança no orçamento, evitando garrafões e plástico desnecessário.',
    'Soluções para diversos tipos de água e locais de extração.',
];

export const WATER_PURIFIER_CARDS: GenericCardProps[] = [
    {
        title: 'Damos ainda mais qualidade à sua água',
        children:
            'Transformamos a água de rede, de poço ou outra fonte em água com a melhor qualidade possível, removendo odores, cor e químicos que estejam na sua composição.',
        icon: <HeartPulse size={36} />,
    },
    {
        title: 'Fácil instalação e utilização',
        children:
            'Os nossos técnicos tratam de tudo. Os produtos têm um design moderno e elegante, permitindo ter produtos de higiene perto sem que interfira na qualidade da água, visto que todo o sistema de purificação está protegido.',
        icon: <Wrench size={36} />,
    },
    {
        title: 'Poupe dinheiro e ajude o ambiente',
        children:
            'Com os nossos purificadores de água consegue uma poupança no consumo diário. Aliado a isso, evita comprar garrafões, carregá-los e ajuda no combate ao plástico, salvaguardando o ambiente e o planeta.',
        icon: <PiggyBank size={36} />,
    },
];

export const AQUAPHARMA_MODEL_EXPLAINED = [
    'A equipa da Aquapharma apresenta-lhe as melhores propostas para o seu tipo de negócio.',
    'Descobrimos as suas demandas e personalizamos os nossos produtos de forma a entregar ao cliente final a melhor água.',
    'A água mais saudável e que cumpre todos os requisitos de qualidade, mas também com uma excelência e requinte únicos.',
];
