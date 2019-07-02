
package com.springboot.chapter1.main.controller;

import com.springboot.chapter1.main.entity.CartItem;
import com.springboot.chapter1.main.entity.Details;
import com.springboot.chapter1.main.entity.Order;
import com.springboot.chapter1.main.repository.CartItemRepository;
import com.springboot.chapter1.main.repository.DetailsRepository;
import com.springboot.chapter1.main.repository.OrderItemRepository;
import com.springboot.chapter1.main.repository.OrderRepository;
import com.springboot.chapter1.main.services.SubmitOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Controller
public class SubmitOrderController {
    @Autowired
    SubmitOrderService submitOrderService;
    @RequestMapping("/submitOrder")
    @ResponseBody
    public void login(HttpServletRequest request, HttpServletResponse response){
        try{
            HttpSession session = request.getSession();
            String username = (String)session.getAttribute("username");
            PrintWriter out = response.getWriter();
            if(username == ""){
                out.println(100);
                return;
            }
            response.setHeader("Cache-Control","no-cache");
            String temp_total = request.getParameter("total");
            String temp_ordid = request.getParameter("ord_id");
            String[] selected = request.getParameterValues("selected");
            int total = Integer.valueOf(temp_total);
            int ordid = Integer.valueOf(temp_ordid);
            for(int i=0;i<selected.length;i++){
                int key = Integer.valueOf(selected[i]);
                CartItem cartitem =  submitOrderService.findcartitems(username,ordid,key);
                Details details = submitOrderService.finddetails(key);
                int tempstock = details.number - cartitem.num;
                submitOrderService.updateNumber(tempstock,key);
            }
            int tempid = 0;
            List<Order> temporders = submitOrderService.finduser(username);
            if(temporders.isEmpty()) System.out.println("Orders is empty!");
            else
                tempid = submitOrderService.maxorderid(username)+1;
            for(int i=0;i<selected.length;i++){
                int key = Integer.valueOf(selected[i]);
                CartItem cartitem =  submitOrderService.findcartitems(username,ordid,key);
                submitOrderService.additems(username,tempid,cartitem.book,cartitem.unit_price,cartitem.num,cartitem.k);
            }
            submitOrderService.deleteitems(ordid,username);
            Calendar time = Calendar.getInstance();
            Date date = time.getTime();
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
            String datetime = sdf.format(date);


            out.println(1);
            submitOrderService.addItems(username,tempid,datetime,total);
            session.setAttribute("ordid",ordid);
        }
        catch(Exception e){
            System.out.println(e);
        }
    }
}

