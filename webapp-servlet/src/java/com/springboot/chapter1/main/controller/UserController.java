package com.springboot.chapter1.main.controller;

import com.springboot.chapter1.main.entity.CartItem;
import com.springboot.chapter1.main.entity.User;
import com.springboot.chapter1.main.repository.CartItemRepository;
import com.springboot.chapter1.main.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.PrintWriter;
import java.util.List;

@Controller
public class UserController {
    @Autowired
    UserService userservice;
    @Autowired
    CartItemRepository repository1;
    @RequestMapping("/login")
    @ResponseBody
    public void login(HttpServletRequest request, HttpServletResponse response,HttpSession session){
        response.setHeader("Cache-Control","no-cache");
        session.setAttribute("username","");
        try{
            String username = request.getParameter("username");
            System.out.println("username:"+username);
            if(username.equals(""))
                System.out.println("No exit username");
            String password = request.getParameter("p");
            int radio=0;
            if(username.length()<4) radio=0;
            else if(username.substring(0,4).equals("Auth")) radio=1;
            PrintWriter out = response.getWriter();
            if(radio == 0) {
                User tempuser = userservice.checkuser(username);
                System.out.println("Username:"+tempuser.username+"Password:"+tempuser.p);
                if (tempuser == null) {
                    out.print(1);
                }
                if (tempuser.chmod == 0)
                    out.print(4);
                if (tempuser.p.equals(password) && tempuser.chmod == 1) {
                    out.print(2);
                    System.out.println(username);
                    session.setAttribute("username", tempuser.username);
                    List<CartItem> tempitems = repository1.findByUsername(username);
                    System.out.println(tempitems);
                    if (tempitems.isEmpty()) {
                        session.setAttribute("ordid", 1);
                        System.out.println((String) session.getAttribute("username"));
                    } else {
                        int maxordid = repository1.maxordid(username) + 1;
                        System.out.print("maxordid");
                        System.out.println(maxordid);
                        session.setAttribute("ordid", maxordid);
                    }
                }
                if (tempuser.chmod == 1 && !tempuser.p.equals(password))
                    out.print(3);
            }
            else if(radio == 1){
                User tempauth = userservice.checkuser(username);
                if (tempauth == null) {
                    session.setAttribute("username","");
                    out.print(1);
                }
                if(tempauth.p.equals(password)){
                    session.setAttribute("username",tempauth.username);
                    out.println(200);
                }
            }
        }
        catch (Exception e){
            System.out.println("no exit a user");
        }

    }
}
