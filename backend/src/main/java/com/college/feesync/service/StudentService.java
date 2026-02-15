package com.college.feesync.service;

import com.college.feesync.model.Student;
import com.college.feesync.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    @Autowired
    private StudentRepository repository;

    // Save student / update fee status
    public Student saveStudent(Student student) {
        return repository.save(student);
    }

    // Get all students
    public List<Student> getAllStudents() {
        return repository.findAll();
    }

    // Simple No-Due Logic
    public String checkNoDueStatus(Student student) {
        if ("PAID".equalsIgnoreCase(student.getFeeStatus())) {
            return "NO DUE";
        } else {
            return "PENDING";
        }
    }
}
