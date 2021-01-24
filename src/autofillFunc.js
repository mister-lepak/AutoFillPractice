import faker from "faker";

const generateFakeData = () => {
  const itemList = [];
  for (let i = 0; i < 500; i++) {
    itemList.push(faker.commerce.product());
  }
  for (let i = 0; i < 500; i++) {
    itemList.push(faker.random.word());
  }
  return itemList;
};

const data = generateFakeData();

// const data = [
//   "apple",
//   "iPhone",
//   "basketball",
//   "swimming",
//   "orange",
//   "application",
// ];

const autoFill = (input, dataInput = data) => {
  const result = [];
  if (input === "") {
    return dataInput;
  }
  dataInput.map((e) => {
    const elementLowerCase = e.toLowerCase();
    const inputLowerCase = input.toLowerCase();
    if (elementLowerCase.includes(inputLowerCase)) {
      result.push(e);
    }
  });
  return result;
};

// module.exports = autoFill;
export default autoFill;
