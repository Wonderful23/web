package com.springboot.chapter1.main.serviceimpl;

import com.springboot.chapter1.main.dao.CartItemDao;
import com.springboot.chapter1.main.dao.DetailsDao;
import com.springboot.chapter1.main.dao.OrderDao;
import com.springboot.chapter1.main.dao.OrderItemDao;
import com.springboot.chapter1.main.entity.CartItem;
import com.springboot.chapter1.main.entity.Details;
import com.springboot.chapter1.main.entity.Order;
import com.springboot.chapter1.main.services.SubmitOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubmitOrderServiceImpl implements SubmitOrderService {
    @Autowired
    OrderDao orderDao;
    @Autowired
    DetailsDao detailsDao;
    @Autowired
    CartItemDao cartItemDao;
    @Autowired
    OrderItemDao orderItemDao;
    @Override
    public List<Order> finduser(String username){
        return orderDao.findByUsername(username);
    }
    @Override
    public int maxorderid(String username){
        return orderDao.maxord(username);
    }
    @Override
    public int addItems(String username,int ordid,String datetime,int total){
        return orderDao.addItemToOrder(username,ordid,datetime,total);
    }
    @Override
    public Details finddetails(int key){
        return detailsDao.findByKey(key);
    }
    @Override
    public int updateNumber(int num,int key){
        return detailsDao.updatestock(num, key) ;
    }
    @Override
    public CartItem findcartitems(String username, int ordid, int key){
        return cartItemDao.findByUsernameAndOrdidAndK(username, ordid, key);
    }
    @Override
    public int deleteitems(int ordid,String username){
        return cartItemDao.deletecart(ordid, username);
    }
    @Override
    public int additems(String username,int tempid,String book,int unit_price,int num,int k){
        return orderItemDao.addItemToOrderItem(username, tempid, book, unit_price, num, k);
    }
}
