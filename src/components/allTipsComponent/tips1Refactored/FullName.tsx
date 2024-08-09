interface FullNameProps {
    fullName: string;
}

export function FullName({ fullName }: FullNameProps) {
    return <div className="overflow-ellipsis overflow-hidden text-nowrap">Nom complet : {fullName}</div>;
}
