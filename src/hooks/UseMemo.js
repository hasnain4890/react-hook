import React, { useMemo, useState } from "react";

function UseMemo() {
  const [count, setcount] = useState(0);
  const [item, setitem] = useState(11);

  const increment = () => {
    console.log("first");
    setcount(() => {
      return count + 2;
    });
  };

  const handleitem = () => {
    console.log("item");
    setitem(() => item + 3);
  };

  const handleusememo = useMemo(
    function multicount() {
      return count + 5;
    },
    [count]
  );

  return (
    <div>
      <h1>Count:{count}</h1>
      <h1>Item:{item}</h1>
      <h1>usememo: {count} </h1>
      <h1> {handleusememo} usememo</h1>
      <button onClick={increment} style={{ padding: "2px", margin: "4px" }}>
        increment
      </button>
      <button onClick={handleitem}>handle item</button>
    </div>
  );
}

export default UseMemo;
