import { Dispatch, SetStateAction } from 'react';
import { DescriptionWrapper } from '@/components/descriptionWrapper/DescriptionWrapper';
import { Button } from '@/components/ui/button';

interface AgeCounterProps {
    age: number;
    setAge: Dispatch<SetStateAction<number>>;
}

export function AgeCounter({ age, setAge }: AgeCounterProps) {
    return (
        <div className="flex items-center gap-1 w-full justify-between">
            <div className="whitespace-nowrap">Age : {age}</div>
            <DescriptionWrapper />
            <Button onClick={() => setAge(age + 1)}>+ 1 an</Button>
        </div>
    );
}
