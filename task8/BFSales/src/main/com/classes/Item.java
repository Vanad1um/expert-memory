package com.classes;

import java.util.Arrays;
import java.util.Date;
public class Item {

    private String id;
    private String description;
    private Date createdAt;
    private Date validUntil;
    private String link;
    private String vendor;
    private String photoLink;
    private String[] hashTags;
    private Integer discount;
    private String rating;
    private String[] reviews;

    public Item() {
        this.id = "";
        this.description = "";
        this.createdAt = null;
        this.link = "";
        this.vendor = "";
        this.photoLink = "";
        this.hashTags = null;
        this.discount = 0;
        this.validUntil = null;
        this.rating = "";
        this.reviews = null;
    }

    public Item(
            String id,
            String description,
            Date createdAt,
            String siteLink,
            String vendor,
            String photoLink,
            String[] hashTags,
            Integer discount,
            Date validUntil,
            String rating,
            String[] reviews) {

        this.id = id;
        this.description = description;
        this.createdAt = createdAt;
        this.link = siteLink;
        this.vendor = vendor;
        this.photoLink = photoLink;
        this.hashTags = hashTags;
        this.discount = discount;
        this.validUntil = validUntil;
        this.rating = rating;
        this.reviews = reviews;

    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setDiscount(Integer discount) {
        this.discount = discount;
    }

    public void setHashTags(String[] hashTags) {
        this.hashTags = hashTags;
    }

    public void setPhotoLink(String photoLink) {
        this.photoLink = photoLink;
    }

    public void setRating(String rating) {
        this.rating = rating;
    }

    public void setReviews(String[] reviews) {
        this.reviews = reviews;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public void setValidUntil(Date validUntil) {
        this.validUntil = validUntil;
    }

    public String getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public String getLink() {
        return link;
    }

    public String getVendor() {
        return vendor;
    }

    public String getPhotoLink() {
        return photoLink;
    }

    public String[] getHashTags() {
        return hashTags;
    }

    public Integer getDiscount() {
        return discount;
    }

    public Date getValidUntil() {
        return validUntil;
    }

    public String getRating() {
        return rating;
    }

    public String[] getReviews() {
        return reviews;
    }





    public void addId(String id) {
        this.id = id;
    }

    public void addDescription(String description) {
        this.description = description;
    }

    public void addLink(String link) {
        this.link = link;
    }

    public void addHashTags(String[] hashTags) {
        this.hashTags = hashTags;
    }

    public void addPhotoLink(String photoLink) {
        this.photoLink = photoLink;
    }

    public void addDiscount(Integer discount) {
        this.discount = discount;
    }

    public void addValidUntil(Date validUntil) {
        this.validUntil = validUntil;
    }

    public void addRating(String rating) {
        this.rating = rating;
    }

    public void addReviews(String[] reviews) {
        this.reviews = reviews;
    }


    @Override
    public String toString() {
        return
                "adItem{" +
                "id='" + id + '\'' +
                ", description='" + description + '\'' +
                ", createdAt=" + createdAt +
                ", siteLink='" + link + '\'' +
                ", vendor='" + vendor + '\'' +
                ", photoLink='" + photoLink + '\'' +
                ", hashTags=" + Arrays.toString(hashTags) +
                ", discount='" + discount + '\'' +
                ", validUntil=" + validUntil +
                ", rating='" + rating + '\'' +
                ", reviews=" + Arrays.toString(reviews) +
                '}';
    }
}