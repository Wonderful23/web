package com.springboot.chapter1.main.daoimpl;

import com.springboot.chapter1.main.dao.UserDao;
import com.springboot.chapter1.main.entity.User;
import com.springboot.chapter1.main.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserDaoImpl implements UserDao {
    @Autowired
    private UserRepository userepository;
    @Override
    public User findByUsername(String username){
        return userepository.findByUsername(username);
    }
    @Override
    public List<User> findAll(){
        return userepository.findAll();
    }
    @Override
    public int addUserToOrg(String username,String p,int chmod,String email){
        return userepository.addUserToOrg(username, p, chmod, email);
    }
    @Override
    public int updateChomd(String name){
        return userepository.updateChomd(name);
    }
    @Override
    public int updateChomd2(String name){
        return userepository.updateChomd2(name);
    }
}
