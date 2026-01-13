package com.hospital.patient.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.hospital.patient.model.Appointment;
import com.hospital.patient.repository.AppointmentRepository;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/appointments")
public class AppointmentController {

    @Autowired
    AppointmentRepository repo;

    @PostMapping
    public Appointment book(@RequestBody Appointment a) {
        a.setStatus("Pending");
        return repo.save(a);
    }

    @GetMapping("/{patientId}")
    public List<Appointment> get(@PathVariable Long patientId) {
        return repo.findByPatientId(patientId);
    }
}
