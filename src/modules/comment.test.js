const comment = [{
  user1: 1,
},
{
  user2: 2,
},
{
  user3: 3,
},
{
  user4: 4,
},
];

const commentCounter = (comment) => {
  const counter = comment.length;
  return counter;
};

test('Expected comment should have array length', () => {
  expect(commentCounter(comment)).toBe(4);
});