package com.hospital.patient.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.hospital.patient.repository.PrescriptionRepository;
import com.hospital.patient.model.Prescription;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/prescriptions")
public class PrescriptionController {

    @Autowired
    PrescriptionRepository repo;

    @GetMapping("/{patientId}")
    public List<Prescription> get(@PathVariable Long patientId) {
        return repo.findByPatientId(patientId);
    }
}
