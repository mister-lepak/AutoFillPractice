import data from "./dataGenerator";

const inputFilter = (input, dataInput = data) => {
  if (input === "") return dataInput;
  return dataInput.filter((e) => e.toLowerCase().includes(input.toLowerCase()));
};

export default inputFilter;
