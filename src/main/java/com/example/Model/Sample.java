package com.example.Model;

import java.time.LocalDateTime;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Sample")
public class Sample {
	@Id @GeneratedValue(strategy = GenerationType.AUTO) @Column(name="ID")
	Long id;
	@Column(name = "customerid", length = 50)
	String customerId;
	@Column(name = "firstname", length = 50)
	String firstname;
	@Column(name = "lastname", length = 50)
	String lastname;
	@Column(name = "date", length = 50)
  LocalDateTime date;
	@Column(name = "score", length = 50)
	int score;
	@Column(name = "weighing", length = 50)
	double weighing;

	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}

	public String getCustomerId() {
		return customerId;
	}
	public void setCustomerId(String customerId) {
		this.customerId = customerId;
	}
	
	public LocalDateTime getDate() {
		return date;
	}
	public void setDate(LocalDateTime date) {
		this.date = date;
	}
	public int getScore() {
		return score;
	}
	public void setScore(int score) {
		this.score = score;
	}
	public double getWeighing() {
		return weighing;
	}
	public void setWeighing(double weighing) {
		this.weighing = weighing;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

}

