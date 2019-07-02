package com.springboot.chapter1.main.repository;

import com.springboot.chapter1.main.entity.User;
import io.micrometer.core.lang.Nullable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface RegisterRepository extends JpaRepository<User,String> {
    @Transactional
    @Modifying
    @Query(value = "insert into login(username,p,chmod,email) values(?1,?2,?3,?4)",nativeQuery = true)
    int addUserToOrg(String username,String p,int chmod,String email);
    @Nullable
    User findByUsername(@Nullable String username);
}
