package com.springboot.chapter1.main.entity;
import javax.persistence.*;
import java.io.Serializable;

class OrderId implements Serializable {
    public String username;
    public int ordid;
}
@Entity
@Table(name="orders")
@IdClass(OrderId.class)
public class Order{

    @Id
    @Column(name="username")
    public String username;
    @Id
    @Column(name = "ordid")
    public int ordid;
    @Column(name = "ord_time")
    public String ord_time;
    @Column(name = "total")
    public int total;
}