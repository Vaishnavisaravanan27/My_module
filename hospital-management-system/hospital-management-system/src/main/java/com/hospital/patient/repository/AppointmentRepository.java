package com.hospital.patient.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.hospital.patient.model.Appointment;
import java.util.List;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
    List<Appointment> findByPatientId(Long patientId);
}
