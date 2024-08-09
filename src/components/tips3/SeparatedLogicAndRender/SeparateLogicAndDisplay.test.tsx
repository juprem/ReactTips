import { describe, expect, it, test } from 'vitest';
import { render } from '@testing-library/react';
import { mapColorWithAge } from './mapColorWithAge.ts';
import { OnlyDisplay } from './OnlyDisplay';

const data = [
    { age: 10, name: 'John', id: '1' },
    { age: 20, name: 'Jack', id: '2' },
    { age: 30, name: 'Jayce', id: '3' },
    { age: 40, name: 'Julien', id: '4' },
];

const expectedData = [
    { color: 'red', name: 'John', id: '1' },
    { color: 'orange', name: 'Jack', id: '2' },
    { color: 'yellow', name: 'Jayce', id: '3' },
    { color: 'blue', name: 'Julien', id: '4' },
];

// can be done with storybook
describe('SeparateLogicAndDisplay', () => {
    test('mappingItems should set color correctly', () => {
        const mappedItems = mapColorWithAge(data);

        expect(mappedItems).toStrictEqual(expectedData);
    });

    it('renders without crashing', () => {
        const { container } = render(<OnlyDisplay data={data} />);
        expect(container.children.item(0)?.textContent).toBe('red');
        expect(container.children.item(1)?.textContent).toBe('orange');
        expect(container.children.item(2)?.textContent).toBe('yellow');
    });
});
