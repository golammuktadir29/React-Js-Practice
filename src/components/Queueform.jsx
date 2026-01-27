import { useState } from "react";
import { FaUserPlus } from "react-icons/fa6";

export default function QueueForm({ onAdd }) {
  const [name, setName] = useState(" ");
  const [service, setService] = useState(" ");
  const handleSubmit = (e) => {
    e.preventDefault();
    //validations todo
    if (!name.trim() || !service.trim()) {
      return;
    } else {
      setName("");
      setService("");
      onAdd({ name, service });
    }
  };
  return (
    <>
      <form className="queue-form" onSubmit={handleSubmit}>
        <h2>Add to queue</h2>
        <div className="form-group">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Customer name"
            type="text"
          />
        </div>
        <div className="form-group">
          <select value={service} onChange={(e) => setService(e.target.value)}>
            <option value="">Select Service</option>
            <option value="consultation">consultation</option>
            <option value="payment">payment</option>
            <option value="support">support</option>
          </select>
        </div>
        <button type="submit">
          <FaUserPlus />
          Add Customer
        </button>
      </form>
    </>
  );
}
