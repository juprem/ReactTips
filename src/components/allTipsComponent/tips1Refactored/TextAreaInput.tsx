import { Dispatch, SetStateAction } from 'react';
import { Textarea } from '@/components/ui/textarea';

interface TextAreaInputProps {
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
}

export function TextAreaInput({ value, setValue }: TextAreaInputProps) {
    return (
        <div className="flex flex-col gap-1">
            <div>Commentaire :</div>
            <Textarea onChange={(e) => setValue(e.target.value)} value={value} />
        </div>
    );
}
