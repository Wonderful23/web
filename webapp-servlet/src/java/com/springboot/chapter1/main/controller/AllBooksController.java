package com.springboot.chapter1.main.controller;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.springboot.chapter1.main.entity.Details;
import com.springboot.chapter1.main.services.AllBooksService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@Controller
public class AllBooksController {
    @Autowired
    public AllBooksService details;
    @RequestMapping("/allBooks")
    @ResponseBody
    public JSONArray demo(HttpServletRequest request, HttpServletResponse response) {
        try {
            response.setHeader("Cache-Control", "no-cache");
            return details.allbooks();
        } catch (Exception e) {
            System.out.println("123");
            JSONArray temperr = new JSONArray();
            JSONObject node = new JSONObject();
            node.put("Error",1);
            temperr.add(node);
            return temperr;
        }
    }
}
