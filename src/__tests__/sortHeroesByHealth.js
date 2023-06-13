import sortHeroesByHealth from '../sortHeroesByHealth';

test.each([
  [
    [
      { name: 'swordsman', health: 10 },
      { name: 'mage', health: 100 },
      { name: 'archer', health: 80 },
    ],
    [
      { name: 'mage', health: 100 },
      { name: 'archer', health: 80 },
      { name: 'swordsman', health: 10 },
    ],
  ],
])('sortHeroesByHealth sorts heroes correctly', (input, expected) => {
  const result = sortHeroesByHealth(input);
  expect(result).toEqual(expected);
});
