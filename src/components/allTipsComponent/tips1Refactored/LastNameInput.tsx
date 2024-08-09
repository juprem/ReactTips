import { Dispatch, SetStateAction } from 'react';
import { Input } from '@/components/ui/input';

interface LastNameInputProps {
    setLastName: Dispatch<SetStateAction<string>>;
}

export function LastNameInput({ setLastName }: LastNameInputProps) {
    return (
        <div className="flex items-center gap-1 w-full justify-between">
            <div className="whitespace-nowrap">Nom :</div>
            <Input className="w-64" onChange={(e) => setLastName(e.target.value)} />
        </div>
    );
}
