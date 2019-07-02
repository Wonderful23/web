package com.springboot.chapter1.main.controller;
import com.springboot.chapter1.main.services.DeleteCartItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
@Controller
public class DeleteCartItemController {
    @Autowired
    DeleteCartItemService deleteorderservice;
    @RequestMapping("/deleteCartItem")
    @ResponseBody
    public int login(HttpServletRequest request, HttpServletResponse response){
        try{
            HttpSession session = request.getSession();
            String username = (String)session.getAttribute("username");
            if(username == ""){
                return 100;
            }
            response.setHeader("Cache-Control","no-cache");
            String[] temp_ordid = request.getParameterValues("ord_ids");
            String[] selected = request.getParameterValues("selected");
            return deleteorderservice.deleteCartItem(selected,temp_ordid,username);
        }
        catch(Exception e){
            System.out.println(e);
            return -1;
        }
    }
}

