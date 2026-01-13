import { useEffect, useState } from "react";

function MyAppointments() {
  const patient = JSON.parse(localStorage.getItem("patient"));
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/api/appointments/${patient.id}`)
      .then(res => res.json())
      .then(data => setAppointments(data));
  }, []);

  return (
    <div className="card">
      <h3>Upcoming Appointments</h3>

      {appointments.length === 0 && <p>No appointments found</p>}

      {appointments.map(a => (
        <div key={a.id} className="appointment-row">
          <div>
            <b>{a.department}</b>
            <p>{a.doctorName}</p>

            {/* ✅ SAFE DISPLAY */}
            {(a.date || a.time) && (
              <small>
                {a.date && a.date}
                {a.date && a.time && " | "}
                {a.time && a.time}
              </small>
            )}
          </div>

          <span
            className={`badge ${
              a.status === "Approved" ? "green" : "yellow"
            }`}
          >
            {a.status}
          </span>
        </div>
      ))}
    </div>
  );
}

export default MyAppointments;
