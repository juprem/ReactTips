import { useState } from 'react';
import { ColoredComponent } from '@/components/coloredComponent/ColoredComponent';
import { Button } from '@/components/ui/button';

export function AgeCounterLocalized() {
    const [age, setAge] = useState(25);

    return (
        <div className="flex items-center gap-1 w-full justify-between">
            <div className="whitespace-nowrap">Age : {age}</div>
            <ColoredComponent />
            <Button onClick={() => setAge(age + 1)}>+ 1 an</Button>
        </div>
    );
}
