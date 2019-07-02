package com.springboot.chapter1.main.dao;

import com.springboot.chapter1.main.entity.Details;
import io.micrometer.core.lang.Nullable;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface DetailsDao {
    Details findByKey( int key);
    int updatestock(int num,int key);
    List<Details> findAll();
    int updateDetails(int isbn,int k,String n,String a,int p,String s ,int number);
    int addDetails(int k,String n,String a,int p,String s,int number,int isbn);
    int deleteDetails(int k);
}
