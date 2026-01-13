import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login";
import Dashboard from "./Dashboard";
import BookAppointment from "./BookAppointment";
import MyAppointments from "./MyAppointments";
import Prescriptions from "./Prescriptions";
import Bills from "./Bills";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/book" element={<BookAppointment />} />
        <Route path="/appointments" element={<MyAppointments />} />
        <Route path="/prescriptions" element={<Prescriptions />} />
        <Route path="/bills" element={<Bills />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
