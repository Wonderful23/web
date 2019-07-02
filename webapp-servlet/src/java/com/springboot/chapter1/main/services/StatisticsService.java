package com.springboot.chapter1.main.services;

import java.util.Map;

public interface 	StatisticsService {
     Map<String,Integer> TotalMoney(String start_time,String end_time);
     Map<String,Integer>TotalNumber(String start_time,String end_time);
}
