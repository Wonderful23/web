package com.springboot.chapter1.main.services;

import com.alibaba.fastjson.JSONArray;
import com.springboot.chapter1.main.entity.Order;

import java.util.List;

public interface OrderlistService {
   JSONArray allorders();
}
