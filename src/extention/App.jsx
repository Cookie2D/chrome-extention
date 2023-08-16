import React from "react";

function App() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    chrome.runtime.openOptionsPage();
  };
  return (
    <>
      <h1>Hello world2</h1>
      <button onClick={() => handleClick()}>options</button>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </>
  );
}

export default App;
