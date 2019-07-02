package com.springboot.chapter1.main.serviceimpl;

import com.springboot.chapter1.main.dao.DetailsDao;
import com.springboot.chapter1.main.services.DeleteAndAddDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DeleteAndAddDetailServiceImpl implements DeleteAndAddDetailService {
    @Autowired
    private DetailsDao detailsDao;
    @Override
    public int add(int k,String n,String a,int p,String s,int number,int isbn){
        return detailsDao.addDetails(k,n,a,p,s,number,isbn);
    }
    @Override
    public int delete(int k){
        return detailsDao.deleteDetails(k);
    }
}
