package com.springboot.chapter1.main.serviceimpl;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.springboot.chapter1.main.dao.UserDao;
import com.springboot.chapter1.main.entity.User;
import com.springboot.chapter1.main.services.UserlistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserlistsServiceImpl implements UserlistService {
    @Autowired
    UserDao userDao;
    @Override
    public JSONArray allUser(){
        JSONArray jsonarray = new JSONArray();
        List<User>templist =  userDao.findAll();
        for(int i=0;i<templist.size();i++) {
            User temp = templist.get(i);
            JSONObject node = new JSONObject();
            node.put("username",temp.username);
            node.put("p", temp.p);
            node.put("chmod", temp.chmod);
            node.put("email", temp.email);
            jsonarray.add(node);
        }
        return jsonarray;
    }
}
