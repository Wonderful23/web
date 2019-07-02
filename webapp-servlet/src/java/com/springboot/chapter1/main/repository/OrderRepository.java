package com.springboot.chapter1.main.repository;
import com.springboot.chapter1.main.entity.Order;
import io.micrometer.core.lang.Nullable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order,Integer> {
    @Transactional
    @Modifying
    @Query(value = "insert into orders(username,ordid,ord_time,total) values(?1,?2,?3,?4)",nativeQuery = true)
    int addItemToOrder(String username ,int ordid,String ord_time,int total);
    @Query(value="select max(ordid) from orders where username = ?1",nativeQuery = true)
    int maxord(String username);
    @Nullable
    List<Order>findByUsername(String username);
    @Nullable
    List<Order>findAll();
}
