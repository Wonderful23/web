package com.springboot.chapter1.main.controller;

import com.springboot.chapter1.main.entity.Details;
import com.springboot.chapter1.main.services.InputCartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.PrintWriter;

@Controller
public class InputCartController {
    @Autowired
    InputCartService cartservice;
    @RequestMapping("/inputcart")
    @ResponseBody
    public int login(HttpServletRequest request, HttpServletResponse response){
        HttpSession session = request.getSession();
        response.setHeader("Cache-Control","no-cache");
        try{
            String username = (String)session.getAttribute("username");
            System.out.println(username);
            if(username ==""){
                return 100;
            }
            int ordid = (int)session.getAttribute("ordid");
            System.out.println(ordid);
            String temp_k = request.getParameter("k");
            System.out.println(temp_k);
            String temp_counter = request.getParameter("c");
            int k = Integer.valueOf(temp_k);
            int counter = Integer.valueOf(temp_counter);
            int flag = cartservice.inputcart(username, ordid,k,counter);
            return flag;
         }
        catch(Exception e){
            System.out.println(e);
            return -1;
        }
    }
}
