package com.hospital.patient.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.hospital.patient.model.Patient;
import com.hospital.patient.repository.PatientRepository;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    PatientRepository repo;

    @PostMapping("/login")
    public Patient login(@RequestBody Patient request) {

        Patient patient = repo.findByUsername(request.getUsername());

        if (patient != null && patient.getPassword().equals(request.getPassword())) {
            patient.setPassword(null); // hide password
            return patient;
        }
        return null;
    }
}
