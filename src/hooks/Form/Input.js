import React from "react";

const Input = ({ type, placeholder, id, value, onmutate }) => {
  return (
    <div>
      <div>
        <input
          type={type}
          placeholder={placeholder}
          id={id}
          onChange={onmutate}
          value={value}
        />
      </div>
    </div>
  );
};
export default Input;
