package com.springboot.chapter1.main.controller;


import com.alibaba.fastjson.JSONObject;
import com.springboot.chapter1.main.dao.DetailsDao;
import com.springboot.chapter1.main.entity.Details;
import com.springboot.chapter1.main.services.ChangeAttributeService;
import com.springboot.chapter1.main.services.EnableUseService;
import com.springboot.chapter1.main.services.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@Controller
public class ChangeAttributeController {
    @Autowired
    public ChangeAttributeService changeAttributeService;
    @Autowired
    public DetailsDao detailsDao;
    @Autowired
    public ImageService imageService;
    @RequestMapping("/change")
    @ResponseBody
    public int  demo(HttpServletRequest request, HttpServletResponse response) {
        try {
            response.setHeader("Cache-Control", "no-cache");
            String  tempisbn = request.getParameter("isbn");
            String tempK = request.getParameter("k");
            String tempnumber = request.getParameter("number");
            String bookname = request.getParameter("bookname");
            String author = request.getParameter("author");
            String tempp = request.getParameter("price");
            String src = request.getParameter("src");
            int isbn=0,price=0,number;
            int k = Integer.parseInt(tempK);
            Details details = detailsDao.findByKey(k);
            System.out.println(details.name);
            if(tempisbn==null||tempK==null||bookname==null||author==null||tempp==null) return 0;

            System.out.println(k);
            if(tempisbn.equals("--")) isbn=details.isbn;else isbn = Integer.parseInt(tempisbn);
            System.out.println(isbn);
            if(!src.equals("--")){
                if(!imageService.find(src))return -1;
                imageService.delte(tempK);
                int flag1 = imageService.add(k,src);
                if(flag1 !=1) return -1;
            }
            System.out.println(src);

            if(bookname.equals("--"))bookname = details.name;
            System.out.println(bookname);
            if(author.equals("--"))author = details.Author;
            System.out.println(author);
            System.out.println(tempp);
            if(tempp.equals("--"))price = details.price;else price =Integer.parseInt(tempp);
            System.out.println(price);
            if(tempnumber.equals("--"))number = details.number;else number = Integer.parseInt(tempnumber);
            System.out.println(number);
            int flag = changeAttributeService.changeAttribute(isbn,k,bookname,author,price,details.src,number);
            return flag;
        } catch (Exception e) {
            return -1;
        }
    }
}