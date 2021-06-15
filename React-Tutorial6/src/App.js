import React, { useCallback, useState, useMemo } from "react";

import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";
import DemoList from "./components/Demo/DemoList";
import Button from "./components/UI/Button/Button";

//every component in which state is executed, component is revalidated/reexecuted
//useCallBack() --> saving function in memory so the comparison with functions can work --> now React.memo(Button) will work and not show console.log because function is same as previous
function App() {
  // const [showParagraph, setShowParagraph] = useState(false);
  // const [allowToggle, setAllowToggle] = useState(false);

  // console.log("APP RUNNING");

  //useCallback like useState garanties that setShowParagraph will be always the same object --> no need to put setShowParagraph in dependencies
  // const toggleParagraphHandler = useCallback(() => {
  //   if (allowToggle) {
  //     setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  //   }
  // }, [allowToggle]); //empty array of dependencies, same object function needs to be reused (never changed object) when the App component rerenders
  // //whenever allowToggle change - recreate that function and store it

  // const allowToggleHandler = () => {
  //   setAllowToggle(true);
  // };

  const [listTitle, setListTitle] = useState("My List");

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    //<h1>Hi there!</h1>
    //<DemoOutput show={showParagraph} />
    //<Button onClick={allowToggleHandler}>Allow Toggling</Button>
    //<Button onClick={toggleParagraphHandler}>Toggle paragraph!</Button>
    <div className="app">
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;
