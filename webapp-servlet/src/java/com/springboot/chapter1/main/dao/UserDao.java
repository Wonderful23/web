package com.springboot.chapter1.main.dao;

import com.springboot.chapter1.main.entity.User;
import java.util.List;

public interface UserDao {
    User findByUsername(String username);
    List<User> findAll();
    int addUserToOrg(String username,String p,int chmod,String email);
    int updateChomd(String name);
    int updateChomd2(String name);
}
