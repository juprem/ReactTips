import { Dispatch, SetStateAction } from 'react';
import { Input } from '@/components/ui/input';

interface FirstNameInputProps {
    setFirstName: Dispatch<SetStateAction<string>>;
}

export function FirstNameInput({ setFirstName }: FirstNameInputProps) {
    return (
        <div className="flex items-center gap-1 w-full justify-between">
            <div className="whitespace-nowrap">Prénom :</div>
            <Input className="w-64" onChange={(e) => setFirstName(e.target.value)} />
        </div>
    );
}
