package com.springboot.chapter1.main.dao;

import com.springboot.chapter1.main.entity.CartItem;
import io.micrometer.core.lang.Nullable;
import java.util.List;

public interface CartItemDao {
    int addItemToCart(String username ,int id,String book,int unit_price,int num,int ordid,int k,String src);
    List<CartItem> findByUsernameAndOrdid(String username, int ordid);
    CartItem findByUsernameAndOrdidAndK(String username,int ordid, int k);
    int deletecart(int ordid,String username);
    int maxordid(String username);
    List<CartItem> findByUsername(String username);
    int deleteKcart(int ordid,String username,int k);
}
