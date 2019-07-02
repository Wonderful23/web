package com.springboot.chapter1.main.controller;

import com.springboot.chapter1.main.repository.RegisterRepository;
import com.springboot.chapter1.main.entity.User;
import com.springboot.chapter1.main.services.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.PrintWriter;

@Controller
public class RegisterController {
    @Autowired
    RegisterService registerService;
    @RequestMapping("/register")
    @ResponseBody
    public int  login(HttpServletRequest request, HttpServletResponse response){
        response.setHeader("Cache-Control","no-cache");
        try{
            String username = request.getParameter("username");
            String email = request.getParameter("email");
            if(username.equals("")){
                return 1;
            }
            String password = request.getParameter("p");
            User tempuser = registerService.finduser(username);
            System.out.println(tempuser);
            if(tempuser == null){
                registerService.register(username,password,1,email);
                return 2;
            }
            else{
                return 3;
            }
        }
        catch (Exception e){
            System.out.println("no exit a user");
            return -1;
        }

    }
}
