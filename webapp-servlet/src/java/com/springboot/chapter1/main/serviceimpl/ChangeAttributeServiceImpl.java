package com.springboot.chapter1.main.serviceimpl;

import com.springboot.chapter1.main.dao.DetailsDao;
import com.springboot.chapter1.main.services.ChangeAttributeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ChangeAttributeServiceImpl implements ChangeAttributeService {
    @Autowired
    private DetailsDao detailsDao;
    @Override
    public int changeAttribute(int isbn,int k,String n,String a,int p,String s ,int number){
        return detailsDao.updateDetails(isbn,k,n,a,p,s,number);
    }
}
