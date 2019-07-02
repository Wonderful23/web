package com.springboot.chapter1.main;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;
@SpringBootApplication
public class AllCards {
    public static void main(String[] args) {
        SpringApplication.run(AllCards.class, args);
    }
}