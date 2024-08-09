import { color, Item, MappedItem } from './model.ts';

export function LogicWithDisplay({ data }: { data: Item[] }) {
    function mapColorWithAge(items: Item[]): MappedItem[] {
        return items.map((item) => {
            const { name, age, id } = item;

            return {
                id,
                name,
                color: color.get(age) ?? 'green',
            } satisfies MappedItem;
        });
    }

    return (
        <>
            {mapColorWithAge(data).map((item) => (
                <div key={item.id}>{item.color}</div>
            ))}
        </>
    );
}
