import { GenericCardProps } from '@/components/GenericCard/GenericCard';
import { HeartPulse, Leaf, PiggyBank, PlusSquare } from 'lucide-react';

export const KMZERO_WATER_BENEFITS = [
    'A Água KMZERO foi feita para suprimir a demanda dos negócios ligados à restauração, dando-lhes a água com a melhor qualidade para consumo, assim como uma personalização extraordinária das suas garrafas 100% ecológicas',
    'A utilização da Água KMZERO pressupõe deixar de lado os custos relacionados com os intermediários, acabando com os problemas de stock e armazenamento, colaborando para um planeta mais sustentável.',
    'Com a Água KMZERO irá ter no momento água normal, fria ou com gás, dando espaço e um toque profissional ao seu atendimento e conquistando os seus clientes.',
    'Se é um profissional da hotelaria ou restauração fale connosco. Temos para si as melhores opções que se adequam na íntegra ao seu negócio.',
];

export const KMZERO_CARDS: GenericCardProps[] = [
    {
        title: 'Qualidade Máxima',
        children:
            'Submetemos a sua água a um processo de purificação, obtendo água de qualidade premium: a Água KMZERO. É uma água pura, filtrada e livre de odores e outras substâncias que afetam o sabor da mesma. Depois é remineralizada com magnésio e potássio.',
        icon: <HeartPulse size={36} />,
    },
    {
        title: '100% Ecológico',
        children:
            'A Água KMZERO utiliza recipientes de vidro reutilizáveis que respeitam o conteúdo, mantêm intactas as propriedades da água e não geram resíduos, contribuindo ativamente para a sustentabilidade do planeta. A água KMZERO é uma água mais pura e sustentável.',
        icon: <Leaf size={36} />,
    },
    {
        title: 'Poupança Imediata',
        children:
            'Graças ao nosso sistema, o cliente tem poupanças significativas em cada utilização. Na Água KMZERO eliminamos os custos desnecessários e os intermediários extra, que tornam o produto final mais caro.',
        icon: <PiggyBank size={36} />,
    },
    {
        title: 'Mais Comomidade',
        children:
            'A Água KMZERO permitirá que o seu estabelecimento tenha água natural, fria ou com gás instantaneamente. Com isto, ganhará mais espaço em arcas, frigoríficos e armazéns, evitando as preocupações com stock e devoluções.',
        icon: <PlusSquare size={36} />,
    },
];

export const KMZERO_DESCRIPTION = [
    'A equipa da Água KMZERO apresenta-lhe as melhores propostas para o seu tipo de negócio. Descobrimos as suas demandas e personalizamos os nossos produtos de forma a entregar ao cliente final a melhor água, mais saudável e que cumpra todos os requisitos de qualidade, mas também com uma excelência e requinte únicos',
    'O plástico é reduzido, a sua pegada ecológica diminui e conseguirá também diminuir custos relacionados com intermediários. Tenha água fresca, natural e com gás, o tempo inteiro, sem necessidade de stock ou de armazenar as garrafas de plásticos, podendo as mesmas acabarem por perder a qualidade.',
    'A Água KMZERO é considerada água de consumo humana filtrada, tendo todas as informações sobre a sua composição disponíveis nos respetivos locais de utilização e consumo, cumprindo escrupulosamente a legislação e normativas em vigor.',
];
