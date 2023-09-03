export interface HydronCardProps {
    children: string;
    title: string;
    icon: React.ReactNode;
}

export default function HydronCard({ children, title, icon }: HydronCardProps) {
    return (
        <div className="flex flex-col items-center justify-center gap-2 px-3 py-5 text-center">
            {icon}
            <h4 className="text-lg font-bold">{title}</h4>
            <p className="text-base">{children}</p>
        </div>
    );
}
