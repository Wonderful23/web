package com.springboot.chapter1.main.controller;


import com.alibaba.fastjson.JSONObject;
import com.springboot.chapter1.main.dao.DetailsDao;
import com.springboot.chapter1.main.entity.Details;
import com.springboot.chapter1.main.services.ChangeAttributeService;
import com.springboot.chapter1.main.services.DeleteAndAddDetailService;
import com.springboot.chapter1.main.services.EnableUseService;
import com.springboot.chapter1.main.services.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.regex.Pattern;

@Controller
public class AddDetailsController {
    @Autowired
    public DeleteAndAddDetailService deleteAndAddDetailService;
    @Autowired
    public DetailsDao detailsDao;
    @Autowired
    public ImageService imageService;
    @RequestMapping("/addDetails")
    @ResponseBody
    public int  demo(HttpServletRequest request, HttpServletResponse response) {
        try {
            response.setHeader("Cache-Control", "no-cache");
            String  tempisbn = request.getParameter("isbn");
            String tempnumber = request.getParameter("number");
            String bookname = request.getParameter("bookname");
            String author = request.getParameter("author");
            String tempp = request.getParameter("price");
            String src = request.getParameter("src");
            List<Details> templist = detailsDao.findAll();
            int maxK=-1000;
            for(int i=0;i<templist.size();i++){
                if(maxK<=templist.get(i).key) maxK=templist.get(i).key;
            }
            maxK=maxK+1;
            if(tempisbn==null||!isInteger(tempisbn)||bookname==null||src==null||author==null||tempp==null||tempnumber==null||!isInteger(tempp)||!isInteger(tempnumber)) return -1;
            int p = Integer.parseInt(tempp);
            int number = Integer.parseInt(tempnumber);
            int isbn = Integer.parseInt(tempisbn);
            boolean flag1 = imageService.find(src);
            System.out.println(flag1);
            if(!flag1) return -1;
            int flag2= imageService.add(maxK,src);
            if(flag2!=1) return -1;
            src = "http://localhost:8080/returnImag/"+Integer.toString(maxK);
            return deleteAndAddDetailService.add(maxK,bookname,author,p,src,number,isbn);
        } catch (Exception e) {
            return -1;
        }
    }
    public static boolean isInteger(String str) {
        Pattern pattern = Pattern.compile("^[-\\+]?[\\d]*$");
        return pattern.matcher(str).matches();
    }
    @RequestMapping("/deleteDetails")
    @ResponseBody
    public int  demo1(HttpServletRequest request, HttpServletResponse response) {
        try {
            response.setHeader("Cache-Control", "no-cache");
            String  tempK = request.getParameter("k");
            if(tempK==null||!isInteger(tempK)) return -1;
            int k = Integer.parseInt(tempK);
           return deleteAndAddDetailService.delete(k);
        } catch (Exception e) {
            return -1;
        }
    }
}