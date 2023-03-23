const table = [
    {
     item1: 1,
    },
    {
      item1: 2,
    },
    {
     item1: 3,
    }
]

const calculatereservations = () => {
    const counter = table.length;
    return counter;
  };

test ('Calculator should return array length', () => {
    expect(calculatereservations()).toBe(3);
})