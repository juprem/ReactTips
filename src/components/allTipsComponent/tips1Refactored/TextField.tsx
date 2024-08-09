interface TextFieldProps {
    value: string;
}

export function TextField({ value }: TextFieldProps) {
    return <div className="overflow-ellipsis overflow-hidden text-nowrap">{value}</div>;
}
