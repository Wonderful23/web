package com.springboot.chapter1.main.services;

import com.alibaba.fastjson.JSONArray;
public interface TotalCartItemsService {
    JSONArray allCartItems(String username);
}
