import React, { useState } from "react";
const App: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    const handleIncrement = () => setCount(count + 1);
    const handleDecrement = () => setCount(count - 1);
    const handleReset = () => setCount(0);
    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h1>Counter App (TSX)</h1>
            <p>Count: {count}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};
export default App;
