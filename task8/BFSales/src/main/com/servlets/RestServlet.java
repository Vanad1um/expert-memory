package com.servlets;

import com.classes.Item;
import com.classes.Collection;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@WebServlet(urlPatterns = {"ad"})
public class RestServlet extends HttpServlet {


    Collection ads = new Collection();

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String id;
        id = request.getParameter("id");

        response.setContentType("application/json");
        ServletOutputStream stream = response.getOutputStream();

        Item adItem = ads.get(Integer.parseInt(id));
        if (adItem == null) {
            stream.print("null");
        } else {
            stream.write(ads.get(Integer.parseInt(id)).toString().getBytes(StandardCharsets.UTF_8));
        }
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("application/json");
        ServletOutputStream stream = response.getOutputStream();

        StringBuilder list = new StringBuilder();
        for (Item item : ads.getPage(0, ads.size(), "")) {
            list.append(item.toString());
        }
        stream.write(list.toString().getBytes(StandardCharsets.UTF_8));
    }

    protected void doPut(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            String id = request.getParameter("id");
            String description = request.getParameter("description");
            SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss");
            Date createdAt = format.parse(request.getParameter("createdAt"));
            String link = request.getParameter("siteLink");
            String vendor = request.getParameter("vendor");
            String photoLink = request.getParameter("photoLink");
            String[] hashTags;
            hashTags = request.getParameter("hashTags").split(", ");
            int discount = Integer.parseInt(request.getParameter("discount"));
            Date validUntil = format.parse(request.getParameter("validUntil"));

            String rating = request.getParameter("rating");
            String[] reviews = request.getParameter("reviews").split(", ");

            ServletOutputStream stream = response.getOutputStream();
            stream.print(ads.add(new Item(id, description, createdAt, link, vendor, photoLink, hashTags,
                    discount, validUntil, rating, reviews)));

        } catch (ParseException e) {
            e.printStackTrace();
        }
    }

    protected void doDelete(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String id;
        id = request.getParameter("id");
        ServletOutputStream stream = response.getOutputStream();
        stream.print(ads.remove(id));
    }
}
