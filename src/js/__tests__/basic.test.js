import getHealth from '../app';

test.each([

  [51, { name: 'маг', health: 51 }, 'healthy'],
  [15, { name: 'маг', health: 15 }, 'wounded'],
  [14, { name: 'маг', health: 14 }, 'critical'],
])('testing level of Health with %s', (_, player, expected) => {
  const result = getHealth({ player });
  expect(result).toBe(expected);
});
