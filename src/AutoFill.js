import { useEffect, useState, useRef } from "react";
import autoFill from "./autofillFunc";
import InfiniteScroll from "react-infinite-scroll-component";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

const AutoFill = () => {
  const firstRun = useRef(true);
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
        // loader={<h4>Loading...</h4>}
      >
        <div>
          {current.map((e, id) => (
            <div>{e}</div>
          ))}
        </div>
      </InfiniteScroll>
    );
  };

  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }

    if (inputValue === "") {
      setCurrent(autoFill(inputValue).slice(count.prev, count.next));
      return;
    }
    setCurrent(autoFill(inputValue));
  }, [inputValue]);

  return (
    <div className="ui three column centered grid">
      <div className="row">
        <h1 className="ui header">AutoFilter for AutoFill</h1>
      </div>
      <div className="row">
        <input
          type="text"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        ></input>
      </div>
      <div className="row">{renderList()}</div>
    </div>
  );
};

export default AutoFill;
