package com.springboot.chapter1.main.services;

import com.springboot.chapter1.main.entity.CartItem;
import com.springboot.chapter1.main.entity.Details;
import com.springboot.chapter1.main.entity.Order;
import java.util.List;

public interface SubmitOrderService {
    List<Order> finduser(String username);
    int maxorderid(String username);
    int addItems(String username,int ordid,String datetime,int total);
    Details finddetails(int key);
    int updateNumber(int num,int key);
    CartItem findcartitems(String username, int ordid, int key);
    int deleteitems(int ordid,String username);
    int additems(String username,int tempid,String book,int unit_price,int num,int k);
}
