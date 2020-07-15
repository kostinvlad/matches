import sortByHealth from '../app';

test('проверка: уже отсортированный массив', () => {
  const users = [
    { name: 'мечник', health: 100 },
    { name: 'маг', health: 80 },
    { name: 'лучник', health: 10 },
  ];
  expect(sortByHealth(users)).toEqual([
    { name: 'мечник', health: 100 },
    { name: 'маг', health: 80 },
    { name: 'лучник', health: 10 },
  ]);
});

test('проверка: отсортированный в обратном порядке массив', () => {
  const users = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 80 },
    { name: 'лучник', health: 100 },
  ];
  const received = sortByHealth(users);
  const expected = [
    { name: 'лучник', health: 100 },
    { name: 'маг', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  expect(received).toEqual(expected);
});

test('проверка: частично упорядоченный массив', () => {
  const users = [
    { name: 'мечник', health: 80 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 10 },
  ];
  const received = sortByHealth(users);
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'мечник', health: 80 },
    { name: 'лучник', health: 10 },
  ];
  expect(received).toEqual(expected);
});

test('проверка: массив с повторяющимися элементами', () => {
  const users = [
    { name: 'мечник', health: 100 },
    { name: 'маг', health: 50 },
    { name: 'лучник', health: 50 },
  ];
  const received = sortByHealth(users);
  const expected = [
    { name: 'мечник', health: 100 },
    { name: 'маг', health: 50 },
    { name: 'лучник', health: 50 },
  ];
  expect(received).toEqual(expected);
});

test('проверка: массив, все значения которого одинаковы', () => {
  const users = [
    { name: 'мечник', health: 70 },
    { name: 'маг', health: 70 },
    { name: 'лучник', health: 70 },
  ];
  const received = sortByHealth(users);
  const expected = [
    { name: 'мечник', health: 70 },
    { name: 'маг', health: 70 },
    { name: 'лучник', health: 70 },
  ];
  expect(received).toEqual(expected);
});
