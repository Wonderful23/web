package com.springboot.chapter1.main.services;

public interface DeleteCartItemService {
    int deleteCartItem(String []selected,String[] temp_ordid,String username);
}
