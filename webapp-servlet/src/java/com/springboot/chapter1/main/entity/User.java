package com.springboot.chapter1.main.entity;


import javax.persistence.*;

@Entity
@Table(name="login")
public class User{
    @Id
    @GeneratedValue
    @Column(name = "username")
    public String username;
    @Column(name = "p")
    public String p;
    @Column(name ="chmod")
    public int chmod;
    @Column(name = "email")
    public String email;
}