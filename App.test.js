import { add, total } from './App';

test('add', () => {

    const value = add(1,2);

    expect(value).toBe(3);
});

test('total', () => {
    expect(total(5, 20)).toBe('$25');
});