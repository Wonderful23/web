package com.springboot.chapter1.main.serviceimpl;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.springboot.chapter1.main.dao.CartItemDao;
import com.springboot.chapter1.main.entity.CartItem;
import com.springboot.chapter1.main.services.TotalCartItemsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TotalCartItemsServiceImpl implements TotalCartItemsService {
    @Autowired
    CartItemDao cartItemDao;
    @Override
    public JSONArray allCartItems(String username){
        List<CartItem> templist = cartItemDao.findByUsername(username);
        JSONArray jsonarray = new JSONArray();
        for(int i=0;i<templist.size();i++) {
            CartItem temp = templist.get(i);
            JSONObject node = new JSONObject();
            node.put("id", temp.id);
            node.put("book", temp.book);
            node.put("unit_price", temp.unit_price);
            node.put("num", temp.num);
            node.put("k",temp.k);
            node.put("src",temp.src);
            node.put("ordid",temp.ordid);
            jsonarray.add(node);}
        return jsonarray;
    }
}
