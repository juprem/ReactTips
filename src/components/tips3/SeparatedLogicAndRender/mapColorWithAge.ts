import { color, Item, MappedItem } from '../model.ts';

export function mapColorWithAge(items: Item[]): MappedItem[] {
    return items.map((item) => {
        const { name, age, id } = item;

        return {
            id,
            name,
            color: color.get(age) ?? 'green',
        } satisfies MappedItem;
    });
}
