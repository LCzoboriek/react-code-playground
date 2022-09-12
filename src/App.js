import React, { useState } from "react";

const App = () => {
  const [value, setValue] = useState("Hello React");

  const handleChange = (event) => setValue(event.target.value);

  return (
    <div>
      <label>
        My controlled input: Which has a default value
        <input type="text" value={value} onChange={handleChange} />
        {/* You really should have controlled outputs/inputs as it can introduce bugs
        in this case, you can control the input but assinging the value attribute, now
        this no longer uses its own internal state, but the state you provide from React */}
      </label>
      <p>
        <strong>Output:</strong> {value}
      </p>
    </div>
  );
};

export default App;
