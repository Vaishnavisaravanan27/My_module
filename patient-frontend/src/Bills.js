import { useEffect, useState } from "react";

function Bills() {
  const patient = JSON.parse(localStorage.getItem("patient"));
  const [bills, setBills] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/api/bills/${patient.id}`)
      .then(res => res.json())
      .then(data => setBills(data));
  }, []);

  return (
    <div className="page">
      <h2>Bills</h2>
      <ul>
        {bills.map(b => (
          <li key={b.id}>
            ₹{b.amount} - {b.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Bills;
