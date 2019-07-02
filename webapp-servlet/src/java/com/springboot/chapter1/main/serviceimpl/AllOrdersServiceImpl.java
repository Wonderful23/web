package com.springboot.chapter1.main.serviceimpl;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.springboot.chapter1.main.dao.OrderDao;
import com.springboot.chapter1.main.entity.Order;
import com.springboot.chapter1.main.services.AllOrdersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class AllOrdersServiceImpl implements AllOrdersService {
    @Autowired
    private OrderDao orderdao;
    @Override
    public JSONArray findUserAllOrders(String username){
        List<Order> templist = orderdao.findByUsername(username);
        JSONArray jsonarray = new JSONArray();
        for(int i=0;i<templist.size();i++){
            Order temp = templist.get(i);
            JSONObject node = new JSONObject();
            node.put("username",temp.username);
            node.put("ordid",temp.ordid);
            node.put("ord_time",temp.ord_time);
            node.put("total",temp.total);
            jsonarray.add(node);
        }
        return jsonarray;
    }
}
