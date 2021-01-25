import { useState } from "react";
import autoFill from "./inputFilter";
import data from "./dataGenerator";
import InfiniteScroll from "react-infinite-scroll-component";

const AutoFilter = () => {
  const [count, setCount] = useState({
    prev: 0,
    next: 50,
  });
  const [hasMore, setHasMore] = useState(true);
  const [current, setCurrent] = useState(data.slice(count.prev, count.next));

  const getMoreData = () => {
    if (current.length === data.length) {
      setHasMore(false);
      return;
    }

    setCurrent(current.concat(data.slice(count.prev + 10, count.next + 10)));

    setCount({ prev: count.prev + 10, next: count.next + 10 });
  };

  const renderList = () => {
    return (
      <InfiniteScroll
        dataLength={current.length}
        next={getMoreData}
        hasMore={hasMore}
      >
        {current.map((e) => (
          <article>{e}</article>
        ))}
      </InfiniteScroll>
    );
  };

  const handleChange = (event) => {
    setCurrent(autoFill(event.target.value));
  };

  return (
    <div className="ui three column centered grid">
      <header className="row">
        <h1 className="ui header">AutoFilter for AutoFill</h1>
      </header>
      <section className="row">
        <input type="text" onChange={handleChange}></input>
      </section>
      <section className="row">{renderList()}</section>
    </div>
  );
};

export default AutoFilter;
