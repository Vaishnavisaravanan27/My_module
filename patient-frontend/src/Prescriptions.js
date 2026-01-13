import { useEffect, useState } from "react";

function Prescriptions() {
  const patient = JSON.parse(localStorage.getItem("patient"));
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/api/prescriptions/${patient.id}`)
      .then(res => res.json())
      .then(data => setList(data));
  }, []);

  return (
    <div className="page">
      <h2>Prescriptions</h2>
      <ul>
        {list.map(p => (
          <li key={p.id}>
            {p.medicine} - {p.dosage}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Prescriptions;
