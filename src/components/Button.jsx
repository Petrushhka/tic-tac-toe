import { Children } from "react";
import { useState } from "react";
const Button = (props) => {
  return (
    <button
      onClick={() => {
        props.handler(props.row, props.col);
      }}
    >
      {props.children}
    </button>
  );
};

export default Button;
