import * as React from "react";

const App = () => {
  const [count, setCount] = React.useState(0);

  const handleIncrease = () => {
    console.log("Increase");
    setCount(count + 1);
  };

  const handleDecrease = () => {
    console.log("Decrease");
    setCount(count - 1);
  };

  return (
    <div>
      Count: {count}
      <button type="button" onClick={handleIncrease}>
        Increase
      </button>
      <button type="button" onClick={handleDecrease}>
        Decrease
      </button>
    </div>
  );
};

export default App;
