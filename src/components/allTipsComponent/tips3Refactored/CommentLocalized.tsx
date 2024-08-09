import { useEffect, useState } from 'react';
import { Textarea } from '@/components/ui/textarea';

interface CommentLocalizedProps {
    fullName: string;
}

export function CommentLocalized({ fullName }: CommentLocalizedProps) {
    const [comment, setComment] = useState('');

    useEffect(() => setComment(''), [fullName]);

    return (
        <>
            <div>Commentaire sur {fullName} :</div>
            <Textarea onChange={(e) => setComment(e.target.value)} value={comment} />
        </>
    );
}
