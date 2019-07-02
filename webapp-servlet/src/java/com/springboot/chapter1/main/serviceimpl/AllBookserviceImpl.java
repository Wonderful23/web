package com.springboot.chapter1.main.serviceimpl;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.springboot.chapter1.main.dao.DetailsDao;
import com.springboot.chapter1.main.entity.Details;
import com.springboot.chapter1.main.services.AllBooksService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AllBookserviceImpl implements AllBooksService {
    @Autowired
    private DetailsDao detailsdao;
    @Override
    public JSONArray allbooks(){
        List<Details> templist = detailsdao.findAll();
        JSONArray jsonarray = new JSONArray();
        for(int i=0;i<templist.size();i++) {
            JSONObject node = new JSONObject();
            Details temp = templist.get(i);
            if(temp.chmod==0) continue;
            node.put("Name", temp.name);
            node.put("Author", temp.Author);
            node.put("price", temp.price);
            node.put("src", temp.src);
            node.put("key",temp.key);
            node.put("isbn",temp.isbn);
            node.put("number",temp.number);
            jsonarray.add(node);
        }
        return jsonarray;
    }
}
