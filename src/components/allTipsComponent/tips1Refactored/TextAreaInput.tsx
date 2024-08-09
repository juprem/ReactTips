import { Dispatch, SetStateAction } from 'react';
import { Textarea } from '@/components/ui/textarea';

interface CommentTips1Props {
    comment: string;
    setComment: Dispatch<SetStateAction<string>>;
}

export function TextAreaInput({ comment, setComment }: CommentTips1Props) {
    return (
        <div className="flex flex-col gap-1">
            <div>Commentaire :</div>
            <Textarea onChange={(e) => setComment(e.target.value)} value={comment} />
        </div>
    );
}
