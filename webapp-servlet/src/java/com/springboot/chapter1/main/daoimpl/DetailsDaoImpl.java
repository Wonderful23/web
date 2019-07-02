package com.springboot.chapter1.main.daoimpl;

import com.springboot.chapter1.main.dao.DetailsDao;
import com.springboot.chapter1.main.entity.Details;
import com.springboot.chapter1.main.repository.DetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Repository
public class DetailsDaoImpl implements DetailsDao {
    @Autowired
    private DetailsRepository detailsrepository;
    @Override
    public Details findByKey(int key){
        return detailsrepository.findByKey(key);
    }
    @Override
    public int updatestock(int num,int key){
        return  detailsrepository.updatestock(num, key);
    }
    @Override
    public List<Details> findAll(){
        return detailsrepository.findAll();
    }
    @Override
    public int updateDetails(int isbn,int k,String n,String a,int p,String s ,int number){
        return detailsrepository.updateDetails(isbn,k,n,a,p,s,number);
    }
    @Override
    public int addDetails(int k,String n,String a,int p,String s,int number,int isbn){
        return detailsrepository.addDetails(k,n,a,p,s,number,isbn);
    }
    @Override
    public int deleteDetails(int k){
        return detailsrepository.deleteDetails(k);
    }
}
