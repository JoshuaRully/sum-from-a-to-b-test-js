
const sum = (a, b) => {
  if (a === b) {
    return b;
  } else {
    return a + sum(a + 1, b);
  }
};

module.exports = sum;
