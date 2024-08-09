export interface Item {
    id: string;
    name: string;
    age: number;
}

export interface MappedItem {
    id: string;
    name: string;
    color: string;
}

export const color = new Map([
    [10, 'red'],
    [20, 'orange'],
    [30, 'yellow'],
    [40, 'blue'],
]);
