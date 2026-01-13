package com.hospital.patient.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.hospital.patient.model.Bill;
import java.util.List;

public interface BillRepository extends JpaRepository<Bill, Long> {
    List<Bill> findByPatientId(Long patientId);
}
