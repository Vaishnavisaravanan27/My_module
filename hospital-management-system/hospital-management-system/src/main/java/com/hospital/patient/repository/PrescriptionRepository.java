package com.hospital.patient.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.hospital.patient.model.Prescription;
import java.util.List;

public interface PrescriptionRepository extends JpaRepository<Prescription, Long> {
    List<Prescription> findByPatientId(Long patientId);
}
