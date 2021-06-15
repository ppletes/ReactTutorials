import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  //console.log("Button RUNNING");
  return (
    <button
      type={props.type || "button"}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

// React.memo(Button) --> doesn't work because every execution cycle function in App.js is brand new function --> it's not same function
export default React.memo(Button);

//props.onClick === props.previous.onClick; --> never equal
