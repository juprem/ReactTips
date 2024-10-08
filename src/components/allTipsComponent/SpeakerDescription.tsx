import { Input } from '@/components/ui/input';
import { useEffect, useState } from 'react';
import { DescriptionWrapper } from '@/components/descriptionWrapper/DescriptionWrapper';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { CheezyAgeSayingComponent } from '@/components/cheezyAgeSayingComponent/CheezyAgeSayingComponent';

export function SpeakerDescription() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fullName, setFullName] = useState('');
    const [comment, setComment] = useState('');
    const [age, setAge] = useState(25);

    useEffect(() => {
        setFullName(firstName + ' ' + lastName);
        setComment('');
    }, [lastName, firstName]);

    return (
        <DescriptionWrapper>
            <div className="h-10 flex font-bold justify-center items-center border-b border-neutral-600 w-full">
                Ajouter un speaker
            </div>
            <div className="p-6 flex flex-col gap-2">
                <div className="flex items-center gap-1 w-full justify-between">
                    <div className="whitespace-nowrap">Prénom :</div>
                    <Input className="w-64" onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className="flex items-center gap-1 w-full justify-between">
                    <div className="whitespace-nowrap">Nom :</div>
                    <Input className="w-64" onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div className="overflow-ellipsis overflow-hidden text-nowrap">Nom complet : {fullName}</div>
                <div className="flex flex-col gap-1">
                    <div>Commentaire :</div>
                    <Textarea onChange={(e) => setComment(e.target.value)} value={comment} />
                </div>
                <div className="flex items-center gap-1 w-full justify-between">
                    <div className="whitespace-nowrap">Age : {age}</div>
                    <CheezyAgeSayingComponent />
                    <Button onClick={() => setAge(age + 1)}>+ 1 an</Button>
                </div>
            </div>
        </DescriptionWrapper>
    );
}
