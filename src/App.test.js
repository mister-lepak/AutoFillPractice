import autoFill from "./autofillFunc";

test("Unit Testing on AutoFill Function", () => {
  const input1 = "ball";
  const output1 = ["basketball"];
  const input2 = "app";
  const output2 = ["apple", "application"];
  const input3 = "i";
  const output3 = ["iPhone", "swimming", "application"];
  expect(autoFill(input1)).toEqual(output1);
  expect(autoFill(input2)).toEqual(output2);
  expect(autoFill(input3)).toEqual(output3);
});
