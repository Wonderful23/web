package com.springboot.chapter1.main.repository;

import com.springboot.chapter1.main.entity.Details;
import io.micrometer.core.lang.Nullable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface DetailsRepository extends JpaRepository<Details,Integer> {
    @Nullable
    Details findByKey(@Nullable int key);
    @Transactional
    @Modifying
    @Query(value = "update Details dl set dl.number = ?1 where k=?2",nativeQuery = true)
    int updatestock(int num,int key);
    @Transactional
    @Modifying
    @Query(value = "update Details dl set dl.isbn=?1,dl.n=?3,dl.a=?4,dl.p=?5,dl.s=?6,dl.number=?7  where k=?2",nativeQuery = true)
    int updateDetails(int isbn,int k ,String n,String a,int p,String s ,int number);
    @Nullable
    List<Details> findAll();
    @Transactional
    @Modifying
    @Query(value = "insert into details(k,n,a,p,s,number,chmod,isbn) values(?1,?2,?3,?4,?5,?6,1,?7)",nativeQuery = true)
    int addDetails(int k,String n,String a,int p,String s,int number,int isbn);
    @Transactional
    @Modifying
    @Query(value = "update details set chmod=0 where k=?1",nativeQuery = true)
    int deleteDetails(int k);
}
