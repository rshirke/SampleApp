package com.example.demo;

import java.io.IOException;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZoneOffset;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import com.example.Model.Sample;
import com.example.repository.SampleRepository;

@Controller
public class ImvuRestControllers {
	
	@Autowired
	private SampleRepository sp;

	@GetMapping("/")
	String home() {
		return "upload";
	}

	@PostMapping("/upload")
	public String submitData(@RequestParam("file") MultipartFile file, RedirectAttributes redirectAttributes)
			throws IOException {

		if (!file.isEmpty()) {
			try {
				byte[] bytes = file.getBytes();
				String completeData = new String(bytes);
				String[] rows = completeData.split("\n");
				System.out.println("Going to parse the file of length " + rows.length);
				for(int i = 1; i< rows.length; i++)
				{ 
					
					String[] columns = rows[i].split(",");
					Instant instant = Instant.parse(columns[3]);
					LocalDateTime date = LocalDateTime.ofInstant(instant, ZoneId.of(ZoneOffset.UTC.getId()));
					Sample sample = new Sample();
					sample.setCustomerId(columns[0]);
					sample.setFirstname(columns[1].substring(1));
					sample.setLastname(columns[2].replace("\"", ""));
					sample.setDate(date);
					sample.setScore(Integer.valueOf(columns[4]));
					sample.setWeighing(Double.valueOf(columns[5]));
					
					sp.save(sample);
				}
			}
			catch(Exception e)
			{
				System.out.println(e);
			}

		}
		return "redirect:/uploadStatus";
	}

	@GetMapping("/uploadStatus")
	public String uploadStatus() {
		return "uploadStatus";
	}

}
