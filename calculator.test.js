const sum = require('./script.js').sum;

test('Sum should add', ()=> {
  expect(sum(2,3)).toBe(5);
  expect(sum(2,3)).not.toBe(6);
});