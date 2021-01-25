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

export default data;
