package com.springboot.chapter1.main.entity;

import javax.persistence.*;
@Entity
@Table(name="details")
public class Details{
	@Id
	@GeneratedValue
	@Column(name="k")
	public int key;
	@Column(name="a")
	public String Author;
	@Column(name="n")
	public String name;
	@Column(name="p")
	public int price;
	@Column(name="s")
	public String src;
	@Column(name="number")
	public int number;
	@Column(name="chmod")
	public int chmod;
	@Column(name="isbn")
	public int isbn;
	}

