package com.springboot.chapter1.main.services;

public interface ImageService {
    int  add(int id,String file);
    void  delte(String filename);
    boolean find(String filename);
}
