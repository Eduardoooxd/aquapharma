export interface HydronCardProps {
    children: string;
    title: string;
    icon: string;
}

export default function HydronCard({ children, title, icon }: HydronCardProps) {
    return (
        <div className="flex flex-col gap-2 px-3 py-5">
            <h4 className="text-lg">{title}</h4>
            <p className="text-base">{children}</p>
        </div>
    );
}
