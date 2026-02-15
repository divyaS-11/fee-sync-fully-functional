package com.college.feesync.controller;

import com.college.feesync.model.Student;
import com.college.feesync.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/students")
public class StudentController {

    @Autowired
    private StudentRepository repository;

    // Add student (simulate payment update)
    @PostMapping
    public Student addStudent(@RequestBody Student student) {
        return repository.save(student);
    }

    // Get all students
    @GetMapping
    public List<Student> getAllStudents() {
        return repository.findAll();
    }
}

