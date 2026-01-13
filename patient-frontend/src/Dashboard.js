import MyAppointments from "./MyAppointments";
import Prescriptions from "./Prescriptions";

function Dashboard() {
  const patient = JSON.parse(localStorage.getItem("patient"));

  if (!patient) window.location = "/";

  return (
    <>
      {/* Header */}
      <div className="dashboard-header">
        <h2>Patient Dashboard</h2>
        <div className="user-info">
          <img src="https://i.pravatar.cc/40" alt="profile" />
          <span>{patient.name} | Age: {patient.age}</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="dashboard-actions">
        <button onClick={() => window.location="/book"}>📅 Book Appointment</button>
        <button onClick={() => window.location="/appointments"}>📋 My Appointments</button>
        <button>🩺 Medical Records</button>
      </div>

      {/* Content */}
      <div className="dashboard-content">
        {/* Profile */}
        <div className="card profile-card">
          <h3>My Profile</h3>
          <p><b>Name:</b> {patient.name}</p>
          <p><b>Age:</b> {patient.age}</p>
          <p><b>Gender:</b> {patient.gender}</p>
          <p><b>Phone:</b> {patient.phone}</p>
          <p><b>Blood Group:</b> B+</p>

          <button className="primary-btn">
            Appointments Report
          </button>
        </div>

        {/* Right side */}
        <div>
          <MyAppointments />
          <br />
          <Prescriptions />
        </div>
      </div>

      {/* Logout */}
      <div style={{ textAlign: "center", margin: "20px" }}>
        <button
          className="primary-btn"
          style={{ width: "200px", background: "red" }}
          onClick={() => {
            localStorage.clear();
            window.location = "/";
          }}
        >
          Logout
        </button>
      </div>
    </>
  );
}

export default Dashboard;
