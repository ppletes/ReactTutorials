import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
  console.log("DemoOutput RUNNING");
  return <MyParagraph>{props.show ? "This is new!" : ""}</MyParagraph>;
};

//React.memo(DemoOutput) --> don't execute if boolean is not changed
export default React.memo(DemoOutput);

//props.show === props.previous.show; --> comparison working for primitive values (not for example: arrays)
