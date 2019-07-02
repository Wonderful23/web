package com.springboot.chapter1.main.serviceimpl;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.mysql.cj.xdevapi.JsonArray;
import com.springboot.chapter1.main.dao.OrderItemDao;
import com.springboot.chapter1.main.entity.OrderItem;
import com.springboot.chapter1.main.services.OrderItemfindService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class OrderItemfindServiceImpl implements OrderItemfindService {
    @Autowired
    private OrderItemDao orderItemDao;
    @Override
    public JSONArray findOrderItems(String username, int ordid){
        List<OrderItem> templist = orderItemDao.findByUsernameAndOrdid(username, ordid);
        JSONArray jsonarray = new JSONArray();
        for(int i=0;i<templist.size();i++){
            JSONObject node = new JSONObject();
            OrderItem temp = templist.get(i);
            node.put("username",temp.username);
            node.put("ordid", temp.ordid);
            node.put("bookname", temp.bookname);
            node.put("unit_price", temp.unit_price);
            node.put("num", temp.num);
            jsonarray.add(node);
        }
        return jsonarray;
    }
}
