package com.springboot.chapter1.main.services;

import com.alibaba.fastjson.JSONArray;
import com.springboot.chapter1.main.entity.OrderItem;

import java.util.List;

public interface OrderItemfindService  {
    JSONArray findOrderItems(String username, int ordid);
}
