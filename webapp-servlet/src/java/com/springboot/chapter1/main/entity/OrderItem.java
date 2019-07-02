package com.springboot.chapter1.main.entity;
import javax.persistence.*;
import java.io.Serializable;

class OrderItemId implements Serializable {
    public String username;
    public int ordid;
    public int k;
}
@Entity
@Table(name="orderitem")
@IdClass(OrderItemId.class)
public class OrderItem{

    @Id
    @Column(name="username")
    public String username;
    @Id
    @Column(name = "ordid")
    public int ordid;
    @Column(name="bookname")
    public String bookname;
    @Column(name = "unit_price")
    public int unit_price;
    @Column(name = "num")
    public int num;
    @Id
    @Column(name="k")
    public int k;
}
