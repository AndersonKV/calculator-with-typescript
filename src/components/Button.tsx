import React from "react";

export const Button = (props: any) => {
  return (
    <button
      onClick={() => props.handleClick(props.action, props.children)}
      type="button"
      className={`btn btn-dark btn-lg font-weight-light 
      ${
        props.children === "0"
          ? "zero"
          : props.children === "C"
          ? "clear"
          : props.children === "="
          ? "enter"
          : ""
      } 
       `}
    >
      {props.children}
    </button>
  );
};
