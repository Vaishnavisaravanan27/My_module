package com.hospital.patient.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.hospital.patient.repository.BillRepository;
import com.hospital.patient.model.Bill;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/bills")
public class BillController {

    @Autowired
    BillRepository repo;

    @GetMapping("/{patientId}")
    public List<Bill> get(@PathVariable Long patientId) {
        return repo.findByPatientId(patientId);
    }
}
