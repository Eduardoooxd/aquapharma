import { GenericCardProps } from '@/components/GenericCard/GenericCard';
import { Atom, GlassWater, HeartPulse, Hourglass, Maximize2, PlusSquare } from 'lucide-react';

export const HYDRON_CARDS: GenericCardProps[] = [
    {
        title: 'Combate o stress oxidativo',
        children: 'Ajuda a prevenir doenças e a evitar o envelhecimento prematuro.',
        icon: <HeartPulse size={36} color="#26375c" />,
    },
    {
        title: 'Simples de utilizar',
        children: 'Um design premiado que permite uma utilização simples e prática.',
        icon: <GlassWater size={36} color="#26375c" />,
    },
    {
        title: 'Adaptável a si e à sua casa',
        children: 'Com opções para vários espaços, é fácil de instalar em qualquer lugar.',
        icon: <Maximize2 size={36} color="#26375c" />,
    },
    {
        title: 'Uma fonte de saúde',
        children: 'Com antioxidantes naturais, o seu consumo tem inúmeros benefícios.',
        icon: <PlusSquare size={36} color="#26375c" />,
    },
    {
        title: 'Centenas de estudos',
        children:
            'Estudada há muito, a água hidrogenada provou ser uma aliada na vida de quem a consome.',
        icon: <Atom size={36} color="#26375c" />,
    },
    {
        title: 'Mais hidrogénio, mais tempo',
        children: 'Único hidrogenador que retém as propriedades do hidrogénio na água mais tempo.',
        icon: <Hourglass size={36} color="#26375c" />,
    },
];

export const HYDRON_BENEFITS_TEXT = [
    'O hidrogénio é o elemento mais leve conhecido pelo ser humano.',
    'É considerado um antioxidante poderoso, ajudando a eliminar os radicais livres e reduzindo o stress oxidativo.',
    'O stress oxidativo está relacionado com algumas doenças conhecidas, provocando, também, o envelhecimento prematuro.',
    'A importância do hidrogénio na água prende-se com a sua capacidade de penetrar onde os outros antioxidantes não conseguem, como em neurónios e em núcleos das células, fazendo com que a sua ação seja muito mais eficiente e célere.',
    'A água hidrogenada contém na sua composição muito mais hidrogénio do que a água de rede, engarrafada ou qualquer outro tipo.',
    'Com o estilo de vida contemporâneo, onde estamos habituados à má alimentação, stress, poluição e diversos outros problemas, a oxidação torna-se ainda mais notória, trazendo consigo patologias e doenças que podem ser evitadas ou amenizadas.',
];
