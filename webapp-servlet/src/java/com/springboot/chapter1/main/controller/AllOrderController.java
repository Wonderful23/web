package com.springboot.chapter1.main.controller;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.springboot.chapter1.main.entity.Order;
import com.springboot.chapter1.main.services.AllOrdersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.PrintWriter;
import java.util.List;

@Controller
public class AllOrderController {
    @Autowired
    public AllOrdersService orders;
    @RequestMapping("/allOrders")
    @ResponseBody
    public JSONArray demo(HttpServletRequest request, HttpServletResponse response) {
        try {
            JSONArray jsonarray = new JSONArray();
            HttpSession session = request.getSession();
            String username = (String)session.getAttribute("username");
            if(username ==""){
                return jsonarray;
            }
            response.setHeader("Cache-Control", "no-cache");
            JSONArray jsonArray = orders.findUserAllOrders(username);
            return jsonArray;
        } catch (Exception e) {
            JSONArray jsonArray = new JSONArray();
            System.out.println("123");
            return jsonArray;
        }
    }
}

