import React from "react";

function App() {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <h1>Hello world</h1>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </>
  );
}

export default App;
