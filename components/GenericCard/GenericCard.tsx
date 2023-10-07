import { cn } from '@/lib/utils';

export interface GenericCardProps {
    children: string;
    title: string;
    classname?: string;
    icon: React.ReactNode;
}

export default function GenericCard({
    children,
    title,
    icon,
    classname,
    ...props
}: GenericCardProps) {
    return (
        <div
            className={cn(
                'text-balance flex flex-col items-center justify-center gap-2 px-3 py-5 text-center',
                classname
            )}
            {...props}
        >
            {icon}
            <h4 className="text-lg font-bold">{title}</h4>
            <p className="text-base">{children}</p>
        </div>
    );
}
