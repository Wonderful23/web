package com.springboot.chapter1.main.serviceimpl;

import com.springboot.chapter1.main.dao.CartItemDao;
import com.springboot.chapter1.main.services.DeleteCartItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DeleteOrderServiceImpl implements DeleteCartItemService {
    @Autowired
    private CartItemDao cartitemdao;
    @Override
    public int deleteCartItem(String []selected,String[] temp_ordid,String username){
        for(int i=0;i<selected.length;i++){
            int key = Integer.valueOf(selected[i]);
            int ord_id = Integer.valueOf(temp_ordid[i]);
            cartitemdao.deleteKcart(ord_id,username,key);
        }
        return 1;
    }
}
