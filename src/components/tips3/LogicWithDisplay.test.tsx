import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { LogicWithDisplay } from './LogicWithDisplay';

const data = [
    { age: 10, name: 'John', id: '1' },
    { age: 20, name: 'Jack', id: '2' },
    { age: 30, name: 'Jayce', id: '3' },
    { age: 40, name: 'Julien', id: '4' },
];

// can be done with storybook
describe('SeparateLogicAndDisplay', () => {
    it('renders without crashing', () => {
        const { container } = render(<LogicWithDisplay data={data} />);
        expect(container.children.item(0)?.textContent).toBe('red');
        expect(container.children.item(1)?.textContent).toBe('orange');
        expect(container.children.item(2)?.textContent).toBe('yellow');
        // est ce que ça vient du ma fonction ou de mon rendu?
        expect(container.children.item(3)?.textContent).toBe('blue');
    });
});
