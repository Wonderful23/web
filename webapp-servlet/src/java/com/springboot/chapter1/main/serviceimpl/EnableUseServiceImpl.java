package com.springboot.chapter1.main.serviceimpl;

import com.springboot.chapter1.main.dao.CartItemDao;
import com.springboot.chapter1.main.dao.UserDao;
import com.springboot.chapter1.main.services.EnableUseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EnableUseServiceImpl implements EnableUseService {
    @Autowired
    private UserDao userDao;
    @Override
    public String enableUse(String name){
        int flag = userDao.updateChomd(name);
        if(flag==0)
            return name+"  fail to get use-authority\n";
        else
            return name+" succeed to get use-authority\n";
    }
    @Override
    public String disableUse(String name){
        int flag = userDao.updateChomd2(name);
        if(flag==0)
            return name+"  fail to ban use-authority\n";
        else
            return name+" succeed to ban use-authority\n";
    }
}
