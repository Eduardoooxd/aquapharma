import { GenericCardProps } from '@/components/GenericCard/GenericCard';
import {
    Bone,
    Dumbbell,
    FlaskConicalOff,
    HeartPulse,
    Lightbulb,
    PiggyBank,
    Trees,
    Wrench,
} from 'lucide-react';

export const LAUNDRY_CARDS: GenericCardProps[] = [
    {
        title: 'Sem detergente e amaciador',
        children:
            'Elimina a necessidade de detergentes e amaciadores para a roupa. Atua através do oxigénio, dos peróxidos e das bolhas de outros gases que penetram na roupa para arrancar a sujidade e o mau-odor.',
        icon: <FlaskConicalOff size={36} />,
    },
    {
        title: 'Só com água fria, sem necessidade de água quente',
        children:
            'A Laundry Pro 2.0 funciona e limpa a roupa com água fria. Elimina os gastos energéticos para aquecer a água da sua máquina de lavar não pondo em causa os resultados.',
        icon: <Lightbulb size={36} />,
    },
    {
        title: 'Deixa a sua roupa mais suave',
        children:
            'Toalhas mais suaves com o seu vestuário e roupa a duram mais. Os restos de detergente nas toalhas, e do seu vestuário, aumentam com o tempo o peso das fibras.',
        icon: <Dumbbell size={36} />,
    },
    {
        title: 'Limpa sem lixívia',
        children:
            'A Laundry Pro 2.0 combina o poder da revolucionária e exclusiva tecnologia ActivePure, Tecnologia Espacial certificada, com a ação da limpeza do oxigénio ativo para remover a sujidade e as manchas.',
        icon: <Bone size={36} />,
    },
    {
        title: 'Melhor para as peles sensíveis',
        children:
            'Sem reações alérgicas na sua pele. A Laundry Pro 2.0 também ajuda a eliminar as comichões e vermelhidão causada pelas alergias, devido aos restos de detergentes incrustados na roupa.',
        icon: <HeartPulse size={36} />,
    },
    {
        title: 'Protege a sua casa',
        children:
            'O equipamento monitoriza as suas operações através de luzes indicadoras. As luzes iluminam-se a azul durante o seu funcionamento normal. É composto por um circuito de deteção de fugas de água.',
        icon: <Wrench size={36} />,
    },
    {
        title: 'Fiabilidade máxima',
        children:
            'Basta introduzir a roupa na máquina de lavar roupa, ajustá-la só para água fria e colocá-la em funcionamento. As luzes de funcionamento da Laundry Pro indicam que tudo está a funcionar corretamente',
        icon: <PiggyBank size={36} />,
    },
    {
        title: 'Respeita o meio-ambiente',
        children:
            'A utilização com água fria e prescindindo de recipientes descartáveis de detergente, faz com que a Laundry Pro seja a melhor opção para a limpeza da roupa, ao mesmo tempo que protege o meio-ambiente.',
        icon: <Trees size={36} />,
    },
];

export const LAUNDRY_DETAILS: { details: string; description: string }[] = [
    {
        details: 'Tecnologia',
        description: 'ActivePure – Oxigénio Ativo',
    },
    {
        details: 'Consumo de energia',
        description: '0,4 W (standby) 1,3 W (a funcionar)',
    },
    {
        details: 'Entrada do adaptador de energia',
        description: 'AC Entrada: 100-240V – 50/60 Hz',
    },
    {
        details: 'Saída do adaptador de energia',
        description: ' DC Saída: 12V 2.5A',
    },
    {
        details: 'Pressão da água',
        description: '20 – 75 psi (mín. – máx.)',
    },
    {
        details: 'Temperatura da água',
        description: 'Água fria',
    },
    {
        details: 'Temperatura durante a utilização',
        description: '18,9ºC a 37,78ºC',
    },
    {
        details: 'Humidade durante a utilização',
        description: '20 a 70%',
    },
    {
        details: 'Dimensões (cm)',
        description: 'L 43,81 x A 23,01 x F 10,29',
    },
    {
        details: 'Peso',
        description: '2,035 kg',
    },
];
