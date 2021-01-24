import { useEffect, useState } from "react";
import autoFill from "./autofillFunc";
import InfiniteScroll from "react-infinite-scroll-component";

const AutoFill = () => {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState(autoFill(inputValue));

  const [count, setCount] = useState({
    prev: 0,
    next: 50,
  });
  const [hasMore, setHasMore] = useState(true);
  const [current, setCurrent] = useState(list.slice(count.prev, count.next));
  const getMoreData = () => {
    if (current.length === list.length) {
      setHasMore(false);
      return;
    }
    setCurrent(current.concat(list.slice(count.prev + 10, count.next + 10)));
    setCount({ prev: count.prev + 10, next: count.next + 10 });
  };

  const renderList = () => {
    return (
      <InfiniteScroll
        dataLength={current.length}
        next={getMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        <div>
          {current.map((e, id) => (
            <li>{e}</li>
          ))}
        </div>
      </InfiniteScroll>
    );
  };

  useEffect(() => {
    setCurrent(autoFill(inputValue).slice(0, count.next));
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
