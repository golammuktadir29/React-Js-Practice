// import { useState } from "react";
import { useState } from "react";
import "./App.css";
import "./components/Queueform.jsx";
import QueueForm from "./components/Queueform.jsx";
import QueueDisplay from "./components/QueueDisplay.jsx";

export default function App() {
  const [queue, setQueue] = useState([]);

  const addToQueue = (customer) => {
    setQueue([...queue, { ...customer, id: Date.now(), status: "waiting" }]); //Spread operator empty array concept is requied here
  };
  const updateStatus = (id, newStatus) => {
    setQueue(
      queue.map((customer) =>
        customer.id === id ? { ...customer, status: newStatus } : customer,
      ),
    );
  };
  const removeFromQueue = (id) => {
    setQueue(
      queue.filter((customer) => {
        return customer.id !== id;
      }),
    );
  };
  return (
    <>
      <div className="app">
        <header>
          <h1>Queue Management Application</h1>
          <p>Manage your customers efficiently</p>
        </header>

        <main>
          <QueueForm onAdd={addToQueue} />
          <QueueDisplay
            queue={queue}
            onUpdate={updateStatus}
            onRemove={removeFromQueue}
          />
        </main>
      </div>
    </>
  );
}
