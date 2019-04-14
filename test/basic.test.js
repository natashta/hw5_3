import setUpAttacks from '../src/js/app';

test('attack without shield', () => {
  const characters = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 70 },
    { name: 'мечник', health: 10 },
  ];

  const received = setUpAttacks(characters, false)[1](10);

  expect(received).toEqual(expected);
});

test('attack with shield', () => {
  const characters = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const expected = [
    { name: 'маг', health: 97 },
    { name: 'лучник', health: 77 },
    { name: 'мечник', health: 7 },
  ];

  const received = setUpAttacks(characters, true)[1](9);

  expect(received).toEqual(expected);
});

test('attack without shield on zero health person', () => {
  const characters = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 0 },
  ];

  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 0 },
  ];

  const received = setUpAttacks(characters, false)[2](10);

  expect(received).toEqual(expected);
});

test('attack with shield on zero health person', () => {
  const characters = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 0 },
  ];

  const expected = [
    { name: 'маг', health: 96 },
    { name: 'лучник', health: 75 },
    { name: 'мечник', health: 0 },
  ];

  const received = setUpAttacks(characters, true)[1](9);

  expect(received).toEqual(expected);
});

test('attack more then sum of persons health', () => {
  const characters = [
    { name: 'маг', health: 20 },
    { name: 'лучник', health: 30 },
    { name: 'мечник', health: 10 },
  ];

  const expected = [
    { name: 'маг', health: 0 },
    { name: 'лучник', health: 0 },
    { name: 'мечник', health: 0 },
  ];

  const received = setUpAttacks(characters, true)[1](100);

  expect(received).toEqual(expected);
});
