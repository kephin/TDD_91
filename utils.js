const computedData = (items, groupNumber, prop, acc = []) => {
  if (groupNumber <= 0) {
    throw new Error('Group number should be greater than 0.');
  }

  if (items.length === 0) {
    return acc;
  }

  let sum = 0;
  items.slice(0, groupNumber).map((item) => {
    sum += item[prop];
  });
  acc.push(sum);
  return computedData(items.slice(groupNumber), groupNumber, prop, acc);
};

module.exports = {
  computedData,
};
