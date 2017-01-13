const computedData = (items, groupNumber, prop, acc = []) => {
  if (groupNumber <= 0) {
    throw new Error('Group number should be greater than 0.');
  }

  if (items.length === 0) {
    return acc;
  }

  const sum = items
    .slice(0, groupNumber)
    .map(item => item[prop])
    .reduce((prev, curr) => prev + curr);

  acc.push(sum);
  return computedData(items.slice(groupNumber), groupNumber, prop, acc);
};

module.exports = {
  computedData,
};
