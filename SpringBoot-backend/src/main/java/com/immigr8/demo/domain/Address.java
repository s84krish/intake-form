package com.immigr8.demo.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "address")
public class Address {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)

  private String streetName;
  private String residenceType;
  private int residenceNum;
  private String city;
  private String zipcode;
  private String state;
  private String province;
  private String country;

  public String getStreetName() {
    return streetName;
  }

  public void setStreetName(String streetName) {
    this.streetName = streetName;
  }

  public String getResidenceType() {
    return residenceType;
  }

  public void setResidenceType(String residenceType) {
    this.residenceType = residenceType;
  }

  public int getResidenceNum() {
    return residenceNum;
  }

  public void setResidenceNum(int residenceNum) {
    this.residenceNum = residenceNum;
  }

  public String getCity() {
    return city;
  }

  public void setCity(String city) {
    this.city = city;
  }

  public String getZipcode() {
    return zipcode;
  }

  public void setZipcode(String zipcode) {
    this.zipcode = zipcode;
  }

  public String getState() {
    return state;
  }

  public void setState(String state) {
    this.state = state;
  }

  public String getProvince() {
    return province;
  }

  public void setProvince(String province) {
    this.province = province;
  }

  public String getCountry() {
    return country;
  }

  public void setCountry(String country) {
    this.country = country;
  }

}
