import React, { useState } from "react";
function App() {
    const [count, setCount] = useState(0);
    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h1>Counter App</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}
export default App;
