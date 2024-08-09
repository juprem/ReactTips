import { useEffect, useState } from 'react';
import { ColoredComponent } from '@/components/coloredComponent/ColoredComponent';
import { Header } from '@/components/allTipsComponent/tips1Refactored/Header';
import { FirstNameInput } from '@/components/allTipsComponent/tips1Refactored/FirstNameInput';
import { LastNameInput } from '@/components/allTipsComponent/tips1Refactored/LastNameInput';
import { FullName } from '@/components/allTipsComponent/tips1Refactored/FullName';
import { AgeCounter } from '@/components/allTipsComponent/tips1Refactored/AgeCounter';
import { Comment } from '@/components/allTipsComponent/tips1Refactored/Comment';

export function SpeakerForm() {
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
        <div className="flex flex-col border-neutral-600 rounded bg-neutral-700 border w-96">
            <Header />
            <div className="p-6 flex flex-col gap-2">
                <FirstNameInput setFirstName={setFirstName} />
                <LastNameInput setLastName={setLastName} />
                <FullName fullName={fullName} />
                <Comment setComment={setComment} comment={comment} />
                <AgeCounter age={age} setAge={setAge} />
                <ColoredComponent />
            </div>
        </div>
    );
}
