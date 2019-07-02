package com.springboot.chapter1.main.services;

import com.alibaba.fastjson.JSONArray;
import com.springboot.chapter1.main.entity.User;

import java.util.List;

public interface UserlistService {
    JSONArray allUser();
}
