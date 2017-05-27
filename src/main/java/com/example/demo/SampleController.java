package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Model.Sample;
import com.example.repository.SampleRepository;

@RestController
public class SampleController {
	
	@Autowired
	SampleRepository sp;
	
	@RequestMapping("/samples")
	public List<Sample> listSamples() {
		return sp.findAll();
	}

}
