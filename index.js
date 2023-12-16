const formatPositiveNumber = (number) => {
  if (Number(number) > 0) {
    return `+${number}`;
  }
  return number.toString();
};

module.export = {
  formatPositiveNumber,
};
