package com.springboot.chapter1.main.daoimpl;

import com.springboot.chapter1.main.dao.CartItemDao;
import com.springboot.chapter1.main.entity.CartItem;
import com.springboot.chapter1.main.repository.CartItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CartItemDaoImpl implements CartItemDao {
    @Autowired
    private CartItemRepository cartitemrepository;
    @Override
    public int addItemToCart(String username ,int id,String book,int unit_price,int num,int ordid,int k,String src){
        return cartitemrepository.addItemToCart(username,id,book,unit_price,num,ordid,k,src);
    }
    @Override
    public List<CartItem> findByUsernameAndOrdid(String username, int ordid){
        return  cartitemrepository.findByUsernameAndOrdid(username,ordid);
    }
    @Override
    public CartItem findByUsernameAndOrdidAndK(String username,int ordid, int k){
        return  cartitemrepository.findByUsernameAndOrdidAndK(username, ordid, k);
    }
    @Override
    public int deletecart(int ordid,String username){
        return  cartitemrepository.deletecart(ordid, username);
    }
    @Override
    public int maxordid(String username){
        return  cartitemrepository.maxordid(username);
    }
    @Override
    public List<CartItem> findByUsername(String username){
        return  cartitemrepository.findByUsername(username);
    }
    @Override
    public int deleteKcart(int ordid,String username,int k){
        return  cartitemrepository.deleteKcart(ordid, username, k);
    }
}
