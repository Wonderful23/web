package com.springboot.chapter1.main.controller;



import com.mongodb.*;
import com.mongodb.gridfs.GridFS;
import com.mongodb.gridfs.GridFSDBFile;
import com.mongodb.gridfs.GridFSInputFile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.io.OutputStream;

@Controller
public class test {
    @RequestMapping("/test")
    @ResponseBody
    public void  demo(HttpServletRequest request, HttpServletResponse response) {
        try{
            response.setContentType("image/png");
        MongoClient mongoClient = new MongoClient("localhost", 27017);
        DB db = mongoClient.getDB("webapp");
        DBCollection collection = db.getCollection("image");
        GridFS gfsPhoto = new GridFS(db, "image");
        for(int i=0;i<8;i++){
        String newFileName = Integer.toString(i);
        File imageFile = new File("C:\\Users\\hp\\Desktop\\images\\"+newFileName+".jpg");
        GridFSInputFile gfsFile = gfsPhoto.createFile(imageFile);
        gfsFile.setFilename(newFileName);
        gfsFile.save();
        }
     }catch (IOException e){
        }
    }
    @RequestMapping("/returnImag/{id}")
    @ResponseBody
    public void  demo1(@PathVariable("id")int id, HttpServletRequest request, HttpServletResponse response) {
        try{
            OutputStream out = response.getOutputStream();
            response.setContentType("image/png");
            MongoClient mongoClient = new MongoClient("localhost", 27017);
            DB db = mongoClient.getDB("webapp");
            DBCollection collection = db.getCollection("image");
            String newFileName = Integer.toString(id);
            GridFS gfsPhoto = new GridFS(db, "image");
            GridFSDBFile imageForOutput = gfsPhoto.findOne(newFileName);
            imageForOutput.writeTo(out);
            out.flush();
            out.close();
        }catch (IOException e){
        }
    }
    @RequestMapping("/remove/{id}")
    @ResponseBody
    public void  demo2(@PathVariable("id")String filename,HttpServletRequest request, HttpServletResponse response) {
            response.setContentType("image/png");
            MongoClient mongoClient = new MongoClient("localhost", 27017);
            DB db = mongoClient.getDB("webapp");
            DBCollection collection = db.getCollection("image");
            GridFS gfsPhoto = new GridFS(db, "image");
            gfsPhoto.remove(filename);
    }
    @RequestMapping("/add/{id}")
    @ResponseBody
    public int  demo3(@PathVariable("id")int id,HttpServletRequest request, HttpServletResponse response) {
        try{
            String file = request.getParameter("filename");
            response.setContentType("image/png");
            MongoClient mongoClient = new MongoClient("localhost", 27017);
            DB db = mongoClient.getDB("webapp");
            DBCollection collection = db.getCollection("image");
            GridFS gfsPhoto = new GridFS(db, "image");
            File imageFile = new File(file);
            if(!imageFile.exists()) return -1;
            GridFSInputFile gfsFile = gfsPhoto.createFile(imageFile);
            gfsFile.setFilename(Integer.toString(id));
            gfsFile.save();
            return 1;
        }catch (IOException e){
            return -1;
        }
    }
}
