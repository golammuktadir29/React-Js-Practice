import { FaTrash } from "react-icons/fa6";

function QueueDisplay({ queue, onUpdate, onRemove }) {
  const getColor = function (status) {
    switch (status) {
      case "waiting":
        return "var(--warning)";
      case "serving":
        return "var(--success)";
      case "completed":
        return "var(--info)";
      default:
        return "var(--text)";
    }
  };

  //
  return (
    <div className="queue-display">
      <h2>Current Queue</h2>
      {queue.length === 0 ? (
        <p className="empty-queue">No customer</p>
      ) : (
        <div className="queue-list">
          {queue.map((customer) => (
            <div key={customer.id} className="queue-items">
              <div className="customer-info">
                <h3>{customer.name}</h3>
                <p>{customer.service}</p>
                <span
                  className="status"
                  style={{ color: getColor(customer.status) }}
                >
                  {customer.status}
                </span>
              </div>
              <div className="action">
                {customer.status === "waiting" && (
                  <button
                    className="serve-btn"
                    onClick={() => onUpdate(customer.id, "serving")}
                  >
                    Serve
                  </button>
                )}
                {customer.status === "serving" && (
                  <button
                    className="complete-btn"
                    onClick={() => onUpdate(customer.id, "completed")}
                  >
                    Complete
                  </button>
                )}
              </div>
              <div>
                <button
                  className="remove-btn"
                  onClick={() => onRemove(customer.id)}
                >
                  Remove <FaTrash />
                </button>
              </div>
            </div> // for keys concept("https://react.dev/learn/rendering-lists")
          ))}
        </div>
      )}
    </div>
  );
}

export default QueueDisplay;
