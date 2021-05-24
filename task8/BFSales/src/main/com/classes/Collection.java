package com.classes;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

public class Collection {
    private final List<Item> ads;

    public Collection() {
        ads = new ArrayList<>();
    }

    public Collection(ArrayList<Item> ads) {
        this.ads = ads;
    }

    public ArrayList<Item> getPage(int skip, int top, String filterConfig) {
        if (skip < 0 || top > ads.size())
            return null;
        List<Item> bufList = new ArrayList<>(ads);
        if (filterConfig.equals("")) {
            bufList.sort(Comparator.comparing(Item::getCreatedAt));
        } else {
            bufList = bufList.stream().filter((element) -> element.getVendor().
                    equals(filterConfig)).sorted(Comparator.comparing(Item::getCreatedAt)).collect(Collectors.toList());
        }
        return (ArrayList<Item>) bufList.subList(skip, top + skip);
    }


    public Item get(int id) {
        Item buf;
        try {
            buf = ads.get(id);
        } catch (Exception e) {
            return null;
        }
        return buf;
    }

    private static boolean validate(Item adItem) {
        if (adItem.getId().length() < 1)
            return false;
        if (adItem.getDescription().length() < 1 || adItem.getDescription().length() > 250)
            return false;
        if (adItem.getCreatedAt() == null)
            return false;
        if (adItem.getLink().equals("") || adItem.getLink().length() > 250)
            return false;
        if (adItem.getVendor() == null)
            return false;
        if (adItem.getHashTags().length > 7 || adItem.getHashTags().length == 0)
            return false;
        if (Arrays.stream(adItem.getHashTags()).allMatch((item) -> item.length() <= 20))
            return false;
        if (adItem.getDiscount() < 1 || adItem.getDiscount() > 100)
            return false;
        return true;
    }

    public boolean add(Item newItem) {
        if (Collection.validate(newItem)) {
            ads.add(newItem);
            return true;
        } else
            return false;
    }

    private boolean edit(String id, Item newItem) {
        if (id.equals("")) {
            return false;
        }
        if (!newItem.getId().equals("") || !newItem.getVendor().equals("") || !newItem.getCreatedAt().equals("")) {
            return false;
        }

        Item tempObject = new Item();
        int indexByID = -1;
        for (int i = 0; i < ads.size(); i++) {
            if (ads.get(i).getId().equals(id)) {
                tempObject = ads.get(i);
                indexByID = i;
            }
        }
        if (indexByID == -1) {
            return false;
        }


        if (!newItem.getDiscount().equals("")) {
            tempObject.setDiscount(newItem.getDiscount());
        }
        if (!newItem.getDescription().equals("")) {
            tempObject.setDescription(newItem.getDescription());
        }
        if (!newItem.getLink().equals("")) {
            tempObject.setLink(newItem.getLink());
        }
        if (!newItem.getPhotoLink().equals("")) {
            tempObject.setPhotoLink(newItem.getPhotoLink());
        }
        if (newItem.getHashTags() != null) {
            tempObject.setHashTags(newItem.getHashTags());
        }
        if (newItem.getValidUntil() != null) {
            tempObject.setValidUntil(newItem.getValidUntil());
        }
        if (!newItem.getRating().equals("")) {
            tempObject.setRating(newItem.getRating());
        }
        if (newItem.getReviews() != null) {
            tempObject.setReviews(newItem.getReviews());
        }

        if (Collection.validate(tempObject)) {
            ads.remove(indexByID);
            ads.add(tempObject);
            return true;
        } else
            return false;
    }

    public boolean remove(String id) {
        for (int i = 0; i < ads.size(); i++) {
            if (ads.get(i).getId().equals(id)) {
                ads.remove(i);
                return true;
            }
        }
        return false;
    }

    public ArrayList<Item> addAll(ArrayList<Item> newList) {
        ArrayList<Item> bufList = new ArrayList<>();
        Item bufItem;

        for (Item adItem : newList) {
            bufItem = adItem;
            if (Collection.validate(bufItem)) {
                this.add(bufItem);
            } else {
                bufList.add(bufItem);
            }
        }
        return bufList;
    }

    public void clear() {
        ads.clear();
    }

    public int size() {
        return ads.size();
    }
}
