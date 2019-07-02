package com.springboot.chapter1.main.daoimpl;

import com.springboot.chapter1.main.dao.OrderDao;
import com.springboot.chapter1.main.entity.Order;
import com.springboot.chapter1.main.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public class OrderDaoImpl implements OrderDao {
    @Autowired
    private OrderRepository orderrepository;
    @Override
    public int addItemToOrder(String username ,int ordid,String ord_time,int total){
        return orderrepository.addItemToOrder(username,ordid,ord_time,total);
    }
    @Override
    public int maxord(String username){
        return orderrepository.maxord(username);
    }
    @Override
    public List<Order> findByUsername(String username){
        return orderrepository.findByUsername(username);
    }
    @Override
    public List<Order>findAll(){
        return orderrepository.findAll();
    }

}
