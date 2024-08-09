import { useEffect, useState } from 'react';
import { TextInput } from '@/components/allTipsComponent/tips1Refactored/TextInput';
import { TextField } from '@/components/allTipsComponent/tips1Refactored/TextField';
import {Comment} from "@/components/allTipsComponent/tips2Refactored/Comment";

export function FullNameAndComment() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fullName, setFullName] = useState('');

    useEffect(() => {
        setFullName(`${firstName} ${lastName}`);
    }, [lastName, firstName]);

    return (
        <>
            <TextInput setValue={setFirstName} label="Prénom :" />
            <TextInput setValue={setLastName} label="Nom :" />
            <TextField value={`Nom complet : ${fullName}`} />
            <Comment fullName={fullName} />
        </>
    );
}
