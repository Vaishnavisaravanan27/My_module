import { useState } from "react";

function BookAppointment() {
  const patient = JSON.parse(localStorage.getItem("patient"));
  const [department, setDepartment] = useState("");

  const book = () => {
    fetch("http://localhost:8080/api/appointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        patientId: patient.id,
        department: department,
        doctorName: "Dr. Smith",
        appointmentDate: "2024-04-25",
        appointmentTime: "10:00"
      })
    }).then(() => {
      alert("Appointment Booked");
      window.location = "/dashboard";
    });
  };

  return (
    <div className="page">
      <h2>Book Appointment</h2>
      <input placeholder="Department" onChange={e => setDepartment(e.target.value)} />
      <button onClick={book}>Book</button>
    </div>
  );
}

export default BookAppointment;
