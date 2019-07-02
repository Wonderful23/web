package com.springboot.chapter1.main.services;

import com.springboot.chapter1.main.entity.User;

public interface RegisterService {
    public int register(String username,String p,int chmod,String email);
    public User finduser(String username);
}
