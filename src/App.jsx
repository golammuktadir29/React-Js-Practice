import { useState } from "react";
import FunctionalComponent from "./functionalComponent";

export default function App() {
  const [show, setShow] = useState(true);
  return (
    <>
      <div>{show && <FunctionalComponent />}</div>
      <br />
      <div>
        <button
          type="button"
          onClick={() => setShow((previousShow) => !previousShow)}
        >
          {show ? "hide post" : "show post"}
        </button>
      </div>
    </>
  );
}
