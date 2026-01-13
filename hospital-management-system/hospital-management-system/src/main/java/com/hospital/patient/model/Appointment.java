package com.hospital.patient.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long patientId;
    private String department;
    private String doctorName;
    private String appointmentDate;
    private String appointmentTime;
    private String status;
}
