const data = [
  "apple",
  "iPhone",
  "basketball",
  "swimming",
  "orange",
  "application",
];

const autoFill = (input, dataInput = data) => {
  const result = [];
  if (input === "") {
    return dataInput;
  }
  dataInput.map((e) => {
    if (e.includes(input)) {
      result.push(e);
    }
  });
  return result;
};

module.exports = autoFill;
// export default autoFill;
