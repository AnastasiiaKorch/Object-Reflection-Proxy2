import destruction from '../app.js'

test ('Преобразуем массив', () => {
  const character = {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 3,
      attack: 40,
      defence: 10,
      special: [
        {
          id: 8,
          name: 'Двойной выстрел',
          icon: 'http://...',
          description: 'Двойной выстрел наносит двойной урон',
        },
        {
          id: 9,
          name: 'Нокаутирующий удар',
          icon: 'http://...',
        },
      ],
    };
  const result = destruction(character);
  const expected = [
    {
      description: 'Двойной выстрел наносит двойной урон',
      icon: 'http://...',
      id: 8,
      name: 'Двойной выстрел',
    },
    {
      description: 'Описание недоступно',
      icon: 'http://...',
      id: 9,
      name: 'Нокаутирующий удар',
     },
  ];
  expect(result).toEqual(expected)
})