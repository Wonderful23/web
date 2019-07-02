package com.springboot.chapter1.main.serviceimpl;

import com.springboot.chapter1.main.dao.UserDao;
import com.springboot.chapter1.main.entity.User;
import com.springboot.chapter1.main.services.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RegisterSerivceImpl implements RegisterService {
    @Autowired
    UserDao userDao;
    @Override
    public int register(String username,String p,int chmod,String email){
        return userDao.addUserToOrg(username, p, chmod, email);
    }
    @Override
    public User  finduser(String username){
        return userDao.findByUsername(username);
    }
}
