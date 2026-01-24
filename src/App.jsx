import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [countToSet, setCountToSet] = useState(0);
  return (
    <>
      <h1>Counter is {count}</h1>
      <div>
        <p>Count is {count}</p>
      </div>
      <div>
        <button
          className="card"
          onClick={() => {
            return setCount(count + 1);
          }}
          style={{
            margin: "0 5px",
            padding: "5px 5px",
          }}
        >
          Increase
        </button>
        <button
          className="card"
          onClick={() => {
            setCount(Math.max(count - 1, 0));
          }}
          style={{
            margin: "0 5px",
            padding: "5px 5px",
          }}
        >
          Decrease
        </button>
        <button
          className="card"
          onClick={() => {
            return setCount(0);
          }}
          style={{
            margin: "0 5px",
            padding: "5px 5px",
          }}
        >
          Reset
        </button>
      </div>
      <div>
        <input
          type="text"
          style={{
            width: "100px",
            height: "33px",
            margin: "5px 5px",
            padding: "0.6em 1.2em",
            border: "1px solid #22224b",
            borderRadius: "5px",
          }}
          // value={countToSet}
          onChange={(e) => {
            return setCountToSet(Number(e.target.value));
          }}
        />
        <button
          style={{
            margin: "5px 5px",
          }}
          onClick={() => {
            setCount(countToSet);
          }}
        >
          Set to {countToSet}
        </button>
      </div>
    </>
  );
}
