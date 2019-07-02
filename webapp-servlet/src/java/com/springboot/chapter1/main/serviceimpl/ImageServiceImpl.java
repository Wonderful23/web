package com.springboot.chapter1.main.serviceimpl;

import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.MongoClient;
import com.mongodb.gridfs.GridFS;
import com.mongodb.gridfs.GridFSInputFile;
import com.springboot.chapter1.main.services.ImageService;
import org.springframework.stereotype.Service;
import java.io.File;
import java.io.IOException;
@Service
public class ImageServiceImpl implements ImageService {
    @Override
    public int  add(int id,String file) {
        try{
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
    @Override
    public void  delte(String filename) {
        MongoClient mongoClient = new MongoClient("localhost", 27017);
        DB db = mongoClient.getDB("webapp");
        DBCollection collection = db.getCollection("image");
        GridFS gfsPhoto = new GridFS(db, "image");
        gfsPhoto.remove(filename);
    }
    @Override
    public boolean find(String file){
        File imageFile = new File(file);
        return imageFile.exists();
    }
}
