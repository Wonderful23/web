package com.springboot.chapter1.main.entity;


import javax.persistence.*;
import java.io.Serializable;

class CartItemId implements Serializable {
    public String username;
    public int id;
}
@Entity
@Table(name="cart")
@IdClass(CartItemId.class)
public class CartItem{

    @Id
    @Column(name="username")
    public String username;
    @Id
    @Column(name = "id")
    public int id;
    @Column(name = "book")
    public String book;
    @Column(name = "unit_price")
    public int unit_price;
    @Column(name = "num")
    public int num;
    @Column(name = "ordid")
    public int ordid;
    @Column(name = "k")
    public int k;
    @Column(name = "src")
    public String src;
}