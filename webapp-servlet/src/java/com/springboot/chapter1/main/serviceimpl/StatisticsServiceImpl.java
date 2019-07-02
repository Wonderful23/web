package com.springboot.chapter1.main.serviceimpl;

import com.alibaba.fastjson.JSONObject;
import com.springboot.chapter1.main.dao.DetailsDao;
import com.springboot.chapter1.main.dao.OrderDao;
import com.springboot.chapter1.main.dao.OrderItemDao;
import com.springboot.chapter1.main.dao.UserDao;
import com.springboot.chapter1.main.entity.Details;
import com.springboot.chapter1.main.entity.Order;
import com.springboot.chapter1.main.entity.OrderItem;
import com.springboot.chapter1.main.entity.User;
import com.springboot.chapter1.main.services.StatisticsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
@Service
public class StatisticsServiceImpl implements StatisticsService {
    @Autowired
    private OrderDao orderDao;
    @Autowired
    private UserDao userDao;
    @Autowired
    private OrderItemDao OrderItemDao;
    @Autowired
    private DetailsDao detailsDao;
    @Override
    public Map<String,Integer> TotalMoney(String start_time,String end_time){
        List<Order>orderlist = orderDao.findAll();
        List<User>userList = userDao.findAll();
        System.out.println(start_time+end_time);
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
        Map<String,Integer> result = new HashMap<String,Integer>();
        try{
            System.out.println("This is ok!");
            Date startTime = simpleDateFormat.parse(start_time);
            Date endTime = simpleDateFormat.parse(end_time);

        for(int i=0;i<userList.size();i++){
            result.put(userList.get(i).username,0);
        }
        for(int i=0;i<orderlist.size();i++){
            Date temptime = simpleDateFormat.parse(orderlist.get(i).ord_time);
            String tempname = orderlist.get(i).username;
            System.out.println(tempname);
            if(temptime.compareTo(startTime)==-1||temptime.compareTo(endTime)==1){
                System.out.println(orderlist.get(i).ord_time);
                continue;
            }
            Integer temp = result.get(tempname);
            temp+=orderlist.get(i).total;
            result.remove(tempname);
            result.put(tempname,temp);
        }
        return result;}
        catch(Exception e ){
            return new HashMap<String,Integer>();
        }
    }
    @Override
    public Map<String,Integer> TotalNumber(String start_time,String end_time){
        List<Order>orderlist = orderDao.findAll();
        List<Details> detailsList = detailsDao.findAll();
        System.out.println(orderlist.size()+" "+detailsList.size());
        SimpleDateFormat simpleDateFormat=new SimpleDateFormat("yyyy-MM-dd");
        Map<Integer,String> result = new HashMap<Integer,String>();
        Map<Integer,Integer> result1 = new HashMap<Integer,Integer>();
        try{
            Date startTime = simpleDateFormat.parse(start_time);
            Date endTime = simpleDateFormat.parse(end_time);

            for(int i=0;i<detailsList.size();i++){
                result.put(detailsList.get(i).key,detailsList.get(i).name);
            }
            for(int i=0;i<detailsList.size();i++){
                result1.put(detailsList.get(i).key,0);
            }
            for(int i=0;i<orderlist.size();i++){
                System.out.println("This is ok!");
                Date temptime = simpleDateFormat.parse(orderlist.get(i).ord_time);
                if(temptime.compareTo(startTime)==-1||temptime.compareTo(endTime)==1)continue;
                String tempname = orderlist.get(i).username;
                int k = orderlist.get(i).ordid;
                List<OrderItem> templist = OrderItemDao.findByUsernameAndOrdid(tempname,k);
                for(int j=0;j<templist.size();j++){
                    int tempK = templist.get(j).k;
                    int tempnumber = result1.get(tempK);
                    tempnumber+=templist.get(j).num;
                    result1.remove(tempK);
                    result1.put(tempK,tempnumber);
                }
            }
            Map<String,Integer> result2 = new HashMap<String,Integer>();
            for (Map.Entry<Integer, Integer> entry : result1.entrySet()) {
                int k = entry.getKey();
                String bookname =result.get(k);
                int number = entry.getValue();
                result2.put(bookname,number);
            }
            return result2;}
        catch(Exception e ){
            return new HashMap<String,Integer>();
        }
    }
}
