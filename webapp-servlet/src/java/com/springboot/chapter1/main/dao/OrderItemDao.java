package com.springboot.chapter1.main.dao;

import com.springboot.chapter1.main.entity.OrderItem;
import java.util.List;

public interface OrderItemDao {
    int addItemToOrderItem(String username ,int ordid,String bookname,int unit_price,int num,int k);
    List<OrderItem> findByUsernameAndOrdid(String username, int ordid);
}
