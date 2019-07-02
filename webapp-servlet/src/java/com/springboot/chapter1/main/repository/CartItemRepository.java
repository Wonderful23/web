package com.springboot.chapter1.main.repository;

import com.springboot.chapter1.main.entity.CartItem;
import io.micrometer.core.lang.Nullable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface CartItemRepository extends JpaRepository<CartItem,Integer> {
    @Transactional
    @Modifying
    @Query(value = "insert into cart(username,id,book,unit_price,num,ordid,k,src) values(?1,?2,?3,?4,?5,?6,?7,?8)",nativeQuery = true)
    int addItemToCart(String username ,int id,String book,int unit_price,int num,int ordid,int k,String src);
    @Nullable
    List<CartItem> findByUsernameAndOrdid(@Nullable String username,@Nullable int ordid);
    @Nullable
    CartItem findByUsernameAndOrdidAndK(@Nullable String username,@Nullable int ordid,@Nullable int k);
    @Transactional
    @Modifying
    @Query(value = "delete from cart where ordid = ?1 and username = ?2",nativeQuery = true)
    int deletecart(int ordid,String username);
    @Query(value="select MAX(ordid) from cart where username = ?1",nativeQuery =true)
    int maxordid(String username);
    @Nullable
    List<CartItem> findByUsername(String username);
    @Transactional
    @Modifying
    @Query(value = "delete from cart where ordid = ?1 and username = ?2 and k = ?3",nativeQuery = true)
    int deleteKcart(int ordid,String username,int k);
}

