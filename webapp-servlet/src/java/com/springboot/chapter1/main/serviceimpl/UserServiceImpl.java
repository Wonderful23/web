package com.springboot.chapter1.main.serviceimpl;

import com.springboot.chapter1.main.dao.UserDao;
import com.springboot.chapter1.main.entity.User;
import com.springboot.chapter1.main.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserDao userdao;
    @Override
    public User checkuser(String username){
        return userdao.findByUsername(username);
    }
}
