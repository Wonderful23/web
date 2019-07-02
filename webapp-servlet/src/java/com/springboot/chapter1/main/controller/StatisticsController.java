package com.springboot.chapter1.main.controller;


import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.springboot.chapter1.main.services.ChangeAttributeService;
import com.springboot.chapter1.main.services.EnableUseService;
import com.springboot.chapter1.main.services.StatisticsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.Map;

@Controller
public class StatisticsController {
    @Autowired
    private StatisticsService statisticsService;
    @RequestMapping("/statisticsmoney")
    @ResponseBody
    public JSONArray demo(HttpServletRequest request, HttpServletResponse response) {
        try {
            response.setHeader("Cache-Control", "no-cache");
            String startTime=(String)request.getParameter("startTime");
            String  endTime = (String)request.getParameter("endTime");
            System.out.println("controller ok!");
            Map<String,Integer>  tempmap = statisticsService.TotalMoney(startTime,endTime);
            JSONArray jsonArray = new JSONArray();
            for (Map.Entry<String, Integer> entry : tempmap.entrySet()) {
                JSONObject node = new JSONObject();
                node.put("username",entry.getKey());
                node.put("consumer", entry.getValue());
                jsonArray.add(node);
            }
            return jsonArray;
        } catch (Exception e) {
            return new JSONArray();
        }
    }
    @RequestMapping("/statisticsnumber")
    @ResponseBody
    public JSONArray demo1(HttpServletRequest request, HttpServletResponse response) {
        try {
            response.setHeader("Cache-Control", "no-cache");
            String startTime=(String)request.getParameter("startTime");
            String  endTime = (String)request.getParameter("endTime");
            System.out.println(startTime);
            System.out.println(endTime);
            Map<String,Integer>  tempmap = statisticsService.TotalNumber(startTime,endTime);
            JSONArray jsonArray = new JSONArray();
            for (Map.Entry<String, Integer> entry : tempmap.entrySet()) {
                JSONObject node = new JSONObject();
                node.put("bookname",entry.getKey());
                node.put("consumer", entry.getValue());
                jsonArray.add(node);
            }
            return jsonArray;
        } catch (Exception e) {
            return new JSONArray();
        }
    }
}