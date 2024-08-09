import { Textarea } from '@/components/ui/textarea';
import { useEffect, useState } from 'react';

interface CommentLocalizedStateProps {
    fullName: string;
}

export function Comment({ fullName }: CommentLocalizedStateProps) {
    const [comment, setComment] = useState('');

    useEffect(() => {
        setComment('');
    }, [fullName]);

    return (
        <div className="flex flex-col gap-1">
            <div>Commentaire :</div>
            <Textarea onChange={(e) => setComment(e.target.value)} value={comment} />
        </div>
    );
}
