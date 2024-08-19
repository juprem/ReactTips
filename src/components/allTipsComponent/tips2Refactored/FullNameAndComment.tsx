import { FirstNameInput } from '@/components/allTipsComponent/tips1Refactored/FirstNameInput';
import { LastNameInput } from '@/components/allTipsComponent/tips1Refactored/LastNameInput';
import { FullName } from '@/components/allTipsComponent/tips1Refactored/FullName';
import { useEffect, useState } from 'react';
import { CommentLocalizedState } from '@/components/allTipsComponent/tips2Refactored/CommentLocalizedState';

export function FullNameAndComment() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fullName, setFullName] = useState('');

    useEffect(() => {
        setFullName(firstName + ' ' + lastName);
    }, [lastName, firstName]);

    return (
        <>
            <FirstNameInput setFirstName={setFirstName} />
            <LastNameInput setLastName={setLastName} />
            <FullName fullName={fullName} />
            <CommentLocalizedState fullName={fullName} />
        </>
    );
}
