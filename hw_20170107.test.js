const expect = require('expect');

const utils = require('./utils.js');

const data = [{
  id: 1,
  cost: 1,
  revenue: 11,
  sellPrice: 21,
}, {
  id: 2,
  cost: 2,
  revenue: 12,
  sellPrice: 22,
}, {
  id: 3,
  cost: 3,
  revenue: 13,
  sellPrice: 23,
}, {
  id: 4,
  cost: 4,
  revenue: 14,
  sellPrice: 24,
}, {
  id: 5,
  cost: 5,
  revenue: 15,
  sellPrice: 25,
}, {
  id: 6,
  cost: 6,
  revenue: 16,
  sellPrice: 26,
}, {
  id: 7,
  cost: 7,
  revenue: 17,
  sellPrice: 27,
}, {
  id: 8,
  cost: 8,
  revenue: 18,
  sellPrice: 28,
}, {
  id: 9,
  cost: 9,
  revenue: 19,
  sellPrice: 29,
}, {
  id: 10,
  cost: 10,
  revenue: 20,
  sellPrice: 30,
}, {
  id: 11,
  cost: 11,
  revenue: 21,
  sellPrice: 31,
}];

it('should sum up cost data grouped by 3', () => {
  //arrange
  const expected = [6, 15, 24, 21];
  //act
  const actual = utils.computedData(data, 3, 'cost');
  //assert
  expect(actual).toEqual(expected);
});

it('should sum up revenue data grouped by 4', () => {
  //arrange
  const expected = [50, 66, 60];
  //act
  const actual = utils.computedData(data, 4, 'revenue');
  //assert
  expect(actual).toEqual(expected);
});

//boundary conditions
it('should sum up id data grouped by 1', () => {
  //arrange
  const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  //act
  const actual = utils.computedData(data, 1, 'id');
  //assert
  expect(actual).toEqual(expected);
});

it('should sum up sellPrice data grouped by 11', () => {
  //arrange
  const expected = [286];
  //act
  const actual = utils.computedData(data, 11, 'sellPrice');
  //assert
  expect(actual).toEqual(expected);
});

//outside the boundary
it('should throw error when grouped by 0', () => {
  //arrange
  const errorMessage = 'Group number should be greater than 0.';
  //act
  //assert
  expect(utils.computedData).toThrow(Error, errorMessage);
});

it('should sum up cost data grouped by 100', () => {
  //arrange
  const expected = [66];
  //act
  const actual = utils.computedData(data, 100, 'cost');
  //assert
  expect(actual).toEqual(expected);
});
