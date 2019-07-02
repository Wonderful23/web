package com.springboot.chapter1.main.serviceimpl;

import com.springboot.chapter1.main.dao.CartItemDao;
import com.springboot.chapter1.main.dao.DetailsDao;
import com.springboot.chapter1.main.entity.Details;
import com.springboot.chapter1.main.services.InputCartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InputCartServiceImpl implements InputCartService {
    @Autowired
    private DetailsDao detailsdao;
    @Autowired
    private CartItemDao cartitemdao;
    @Override
    public  int inputcart(String username,int ordid,int k,int counter){
        Details item = detailsdao.findByKey(k);
        if(item  == null)
            return 0;
        if(item.number< counter){
            return 1;
        }
        cartitemdao.addItemToCart(username,ordid*100+k,item.name,item.price,counter,ordid,k,item.src);
        return 2;
    }
}
