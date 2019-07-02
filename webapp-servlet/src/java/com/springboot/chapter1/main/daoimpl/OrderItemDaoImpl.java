package com.springboot.chapter1.main.daoimpl;

import com.springboot.chapter1.main.dao.OrderItemDao;
import com.springboot.chapter1.main.entity.OrderItem;
import com.springboot.chapter1.main.repository.OrderItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public class OrderItemDaoImpl implements OrderItemDao {
    @Autowired
    private OrderItemRepository orderItemRepository;
    @Override
    public int addItemToOrderItem(String username ,int ordid,String bookname,int unit_price,int num,int k){
        return orderItemRepository.addItemToOrderItem(username, ordid, bookname, unit_price, num, k);
    }
    @Override
    public List<OrderItem> findByUsernameAndOrdid(String username, int ordid){
        return orderItemRepository.findByUsernameAndOrdid(username,ordid);
    }
}
