import { useEffect, useState } from 'react';
import { Header } from '@/components/allTipsComponent/tips1Refactored/Header';
import { TextField } from '@/components/allTipsComponent/tips1Refactored/TextField';
import { AgeComponent } from '@/components/allTipsComponent/tips1Refactored/AgeComponent';
import { TextAreaInput } from '@/components/allTipsComponent/tips1Refactored/TextAreaInput';
import { TextInput } from '@/components/allTipsComponent/tips1Refactored/TextInput';
import { DescriptionWrapper } from '@/components/descriptionWrapper/DescriptionWrapper';

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
            <Header />
            <div className="p-6 flex flex-col gap-2">
                <TextInput setValue={setFirstName} label="Prénom :" />
                <TextInput setValue={setLastName} label="Nom :" />
                <TextField value={`Nom complet : ${fullName}`} />
                <TextAreaInput setValue={setComment} value={comment} />
                <AgeComponent age={age} setAge={setAge} />
            </div>
        </DescriptionWrapper>
    );
}
