package com.springboot.chapter1.main.repository;

import com.springboot.chapter1.main.entity.User;
import io.micrometer.core.lang.Nullable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User,String> {

    @Nullable
    User findByUsername(@Nullable String username);
    @Nullable
    List<User> findAll();
    @Transactional
    @Modifying
    @Query(value = "insert into login(username,p,chmod,email) values(?1,?2,?3,?4)",nativeQuery = true)
    int addUserToOrg(String username,String p,int chmod,String email);
    @Transactional
    @Modifying
    @Query(value = "update login dl set dl.chmod = 1 where username=?1",nativeQuery = true)
    int updateChomd(String name);
    @Transactional
    @Modifying
    @Query(value = "update login dl set dl.chmod = 0 where username=?1",nativeQuery = true)
    int updateChomd2(String name);
}
