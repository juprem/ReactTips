import { Dispatch, SetStateAction } from 'react';
import { Input } from '@/components/ui/input';

interface FormItemInputProps {
    setValue: Dispatch<SetStateAction<string>>;
    label: string;
}

export function TextInput({ setValue, label }: FormItemInputProps) {
    return (
        <div className="flex items-center gap-1 w-full justify-between">
            <div className="whitespace-nowrap">{label}</div>
            <Input className="w-64" onChange={(e) => setValue(e.target.value)}/>
        </div>
    );
}
