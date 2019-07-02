package com.springboot.chapter1.main.controller;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.springboot.chapter1.main.entity.CartItem;
import com.springboot.chapter1.main.services.TotalCartItemsService;
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
public class TotalCartItemController {
    @Autowired
    TotalCartItemsService totalService;
    @RequestMapping("/total")
    @ResponseBody
    public JSONArray demo(HttpServletRequest request, HttpServletResponse response) {
        JSONArray jsonerr = new JSONArray();
        JSONObject node1 = new JSONObject();
        node1.put("Error",1);
        jsonerr.add(node1);
        try {
            HttpSession session = request.getSession();
            String username = (String)session.getAttribute("username");
            if(username == ""){
                return jsonerr;
            }
            response.setHeader("Cache-Control", "no-cache");
            return totalService.allCartItems(username);
        } catch (Exception e) {
            System.out.println("123");
            return jsonerr;
        }
    }
}

