package com.springboot.chapter1.main.repository;
import com.springboot.chapter1.main.entity.OrderItem;
import io.micrometer.core.lang.Nullable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface OrderItemRepository extends JpaRepository<OrderItem,Integer> {
    @Transactional
    @Modifying
    @Query(value = "insert into orderitem(username,ordid,bookname,unit_price,num,k) values(?1,?2,?3,?4,?5,?6)",nativeQuery = true)
    int addItemToOrderItem(String username ,int ordid,String bookname,int unit_price,int num,int k);
    @Nullable
    List<OrderItem> findByUsernameAndOrdid(String username,int ordid);
}
