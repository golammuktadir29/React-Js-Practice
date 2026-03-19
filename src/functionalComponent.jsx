import { useEffect, useState } from "react";

export default function FunctionalComponent() {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());
  // const [text, setText] = useState("");

  const ticking = () => {
    setDate(new Date());
    console.log("ticking is ticking");
  };

  const clickChange = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    document.title = `clicked ${count} times`;
    console.log("updating document title");
  }, [count]);

  useEffect(() => {
    console.log("starting timer");
    const interval = setInterval(ticking, 1000);
    //do cleanUP
    return () => {
      console.log("component unmounted");
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {/* <p>{text}</p>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <div></div> */}
      <p>Date is : {date.toLocaleTimeString()}</p>

      <button onClick={clickChange}>Click count++</button>
    </>
  );
}
