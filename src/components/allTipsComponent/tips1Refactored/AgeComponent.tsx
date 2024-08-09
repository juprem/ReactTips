import { Dispatch, SetStateAction } from 'react';
import { Button } from '@/components/ui/button';
import {CheezyAgeSayingComponent} from "@/components/cheezyAgeSayingComponent/CheezyAgeSayingComponent";

interface AgeCounterProps {
    age: number;
    setAge: Dispatch<SetStateAction<number>>;
}

export function AgeComponent({ age, setAge }: AgeCounterProps) {
    return (
        <div className="flex items-center gap-1 w-full justify-between">
            <div className="whitespace-nowrap">Age : {age}</div>
            <CheezyAgeSayingComponent />
            <Button onClick={() => setAge(age + 1)}>+ 1 an</Button>
        </div>
    );
}
