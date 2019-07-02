package com.springboot.chapter1.main.controller;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.springboot.chapter1.main.services.AllBooksService;
import com.springboot.chapter1.main.services.EnableUseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@Controller
public class DisableUseController {
    @Autowired
    public EnableUseService enableUseService;
    @RequestMapping("/unuse")
    @ResponseBody
    public JSONObject  demo(HttpServletRequest request, HttpServletResponse response) {
        try {
            response.setHeader("Cache-Control", "no-cache");
            String usernamelist = request.getParameter("userlist");
            String [] templist = usernamelist.split(",");
            System.out.println(templist);
            HttpSession session = request.getSession();
            String username = (String)session.getAttribute("username");
            String result="";
            for(int i=0;i<templist.length;i++){
                String tempname=templist[i];
                System.out.println(tempname);
                System.out.println(username);
                if(tempname.equals(username)){
                    System.out.println("Yes");
                    result+=(tempname+" can not authorize or un authorize to itself\n");
                }else{
                    System.out.println("No!");
                    result+=enableUseService.disableUse(tempname);}
            }
            JSONObject node = new JSONObject();
            node.put("result",result);
            node.put("username", username);
            return node;
        } catch (Exception e) {
            JSONObject node = new JSONObject();
            return node;
        }
    }
}
