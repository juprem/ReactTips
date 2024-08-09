import { mapColorWithAge } from './mapColorWithAge.ts';
import { Item } from '../model.ts';

export function OnlyDisplay({ data }: { data: Item[] }) {
    return (
        <>
            {mapColorWithAge(data).map((item) => (
                <div key={item.id}>{item.color}</div>
            ))}
        </>
    );
}
