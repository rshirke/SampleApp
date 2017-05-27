package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Model.Sample;

@Repository
public interface SampleRepository extends JpaRepository<Sample,Long> {

}
