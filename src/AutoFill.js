import { useEffect, useState } from "react";
import autoFill from "./autofillFunc";

const AutoFill = () => {
  const [inputValue, setInputValue] = useState("");
  // const processedData = autoFill("");
  const [list, setList] = useState(autoFill(""));

  const renderList = () => {
    return list.map((e) => {
      return <div>{e}</div>;
    });
  };

  useEffect(() => {
    setList(autoFill(inputValue));
    renderList();
  }, [inputValue]);

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      ></input>
      {renderList()}
    </>
  );
};

export default AutoFill;
