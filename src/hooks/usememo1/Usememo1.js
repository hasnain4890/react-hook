import React, { useState, useMemo } from "react";

function Usememo1() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("hasnain");

  const norender = useMemo(() => {
    return (
      <div>
        <h1> render it again{count}</h1>
      </div>
    );
  }, [name]);

  return (
    <>
      Usememo1
      {norender}
      <h1 style={{ color: "red" }}>
        no re render {count} {name}
      </h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        count update
      </button>
      <h1 style={{ color: "red" }}>no re render {count}</h1>
      <button
        onClick={() => {
          setName("Ahmad");
        }}
      >
        name update
      </button>
    </>
  );
}

export default Usememo1;
