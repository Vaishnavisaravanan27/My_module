package com.hospital.patient.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.hospital.patient.model.Patient;

public interface PatientRepository extends JpaRepository<Patient, Long> {
    Patient findByUsername(String username);
}
