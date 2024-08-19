import { ReactNode, useState } from 'react';
import { Button } from '@/components/ui/button';

interface AgeCounterLocalizedProps {
    children: ReactNode;
}

export function AgeCounterLocalized({ children }: AgeCounterLocalizedProps) {
    const [age, setAge] = useState(25);

    return (
        <div className="flex items-center gap-1 w-full justify-between">
            <div className="whitespace-nowrap">Age : {age}</div>
            {children}
            <Button onClick={() => setAge(age + 1)}>+ 1 an</Button>
        </div>
    );
}
