package com.springboot.chapter1.main.dao;

import com.springboot.chapter1.main.entity.Order;
import java.util.List;

public interface OrderDao {
    int addItemToOrder(String username ,int ordid,String ord_time,int total);
    int maxord(String username);
    List<Order> findByUsername(String username);
    List<Order>findAll();
}
