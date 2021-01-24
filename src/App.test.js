import autoFill from "./autofillFunc";

const data = [
  "apple",
  "iPhone",
  "basketball",
  "swimming",
  "orange",
  "application",
];

test("Unit Testing on AutoFill Function", () => {
  const input1 = "Ball";
  const output1 = ["basketball"];
  const input2 = "aPp";
  const output2 = ["apple", "application"];
  const input3 = "I";
  const output3 = ["iPhone", "swimming", "application"];
  expect(autoFill(input1, data)).toEqual(output1);
  expect(autoFill(input2, data)).toEqual(output2);
  expect(autoFill(input3, data)).toEqual(output3);
});
