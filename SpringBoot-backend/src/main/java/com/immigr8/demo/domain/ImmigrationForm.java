package com.immigr8.demo.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "immigrationform")
public class ImmigrationForm {
  @Id
  @Column(name = "alien_num")
  private long alienNum;
  @Column(name = "country_of_birth")
  private String countryOfBirth;
  @Column(name = "province_of_birth")
  private String provinceOfBirth;
  @Column(name = "arrival_date")
  private String dateOfLastArrival;
  @Column(name = "i94_departure_number")
  private String i94DepartureNumber;
  @Column(name = "passport_number")
  private String passportNumber;
  @Column(name = "passport_issue_date")
  private String passportIssueDate;
  @Column(name = "passport_expiry_date")
  private String passportExpiryDate;
  @Column(name = "country_of_issuance")
  private String countryOfIssuance;
  @Column(name = "nonimmigrant_status")
  private String nonimmigrantStatus;
  @Column(name = "status_expiry")
  private String statusExpiry;
  @Column(name = "sevis_num")
  private String sevisNumber;
  @Column(name = "ead_num")
  private String eadNumber;
  @Column(name = "office_type")
  private String officeType;
  @Column(name = "office_address")
  private String officeAddress;
  @Column(name = "office_state")
  private String officeState;

  public String getOfficeType() {
    return officeType;
  }

  public void setOfficeType(String officeType) {
    this.officeType = officeType;
  }

  public String getOfficeAddress() {
    return officeAddress;
  }

  public void setOfficeAddress(String officeAddress) {
    this.officeAddress = officeAddress;
  }

  public String getOfficeState() {
    return officeState;
  }

  public void setOfficeState(String officeState) {
    this.officeState = officeState;
  }

  @OneToOne
  private Address usAddress;
  @OneToOne
  private Address foreignAddress;

  public String getCountryOfBirth() {
    return countryOfBirth;
  }

  public void setCountryOfBirth(String countryOfBirth) {
    this.countryOfBirth = countryOfBirth;
  }

  public String getProvinceOfBirth() {
    return provinceOfBirth;
  }

  public void setProvinceOfBirth(String provinceOfBirth) {
    this.provinceOfBirth = provinceOfBirth;
  }

  public String getDateOfLastArrival() {
    return dateOfLastArrival;
  }

  public void setDateOfLastArrival(String dateOfLastArrival) {
    this.dateOfLastArrival = dateOfLastArrival;
  }

  public String getI94DepartureNumber() {
    return i94DepartureNumber;
  }

  public void setI94DepartureNumber(String i94DepartureNumber) {
    this.i94DepartureNumber = i94DepartureNumber;
  }

  public String getPassportNumber() {
    return passportNumber;
  }

  public void setPassportNumber(String passportNumber) {
    this.passportNumber = passportNumber;
  }

  public String getPassportIssueDate() {
    return passportIssueDate;
  }

  public void setPassportIssueDate(String passportIssueDate) {
    this.passportIssueDate = passportIssueDate;
  }

  public String getPassportExpiryDate() {
    return passportExpiryDate;
  }

  public void setPassportExpiryDate(String passportExpiryDate) {
    this.passportExpiryDate = passportExpiryDate;
  }

  public String getCountryOfIssuance() {
    return countryOfIssuance;
  }

  public void setCountryOfIssuance(String countryOfIssuance) {
    this.countryOfIssuance = countryOfIssuance;
  }

  public String getNonimmigrantStatus() {
    return nonimmigrantStatus;
  }

  public void setNonimmigrantStatus(String nonimmigrantStatus) {
    this.nonimmigrantStatus = nonimmigrantStatus;
  }

  public String getStatusExpiry() {
    return statusExpiry;
  }

  public void setStatusExpiry(String statusExpiry) {
    this.statusExpiry = statusExpiry;
  }

  public String getSevisNumber() {
    return sevisNumber;
  }

  public void setSevisNumber(String sevisNumber) {
    this.sevisNumber = sevisNumber;
  }

  public String getEadNumber() {
    return eadNumber;
  }

  public void setEadNumber(String eadNumber) {
    this.eadNumber = eadNumber;
  }

  public Address getUsAddress() {
    return usAddress;
  }

  public void setUsAddress(Address usAddress) {
    this.usAddress = usAddress;
  }

  public Address getForeignAddress() {
    return foreignAddress;
  }

  public void setForeignAddress(Address foreignAddress) {
    this.foreignAddress = foreignAddress;
  }

  public long getAlienNum() {
    return alienNum;
  }

  public void setAlienNum(long alienNum) {
    this.alienNum = alienNum;
  }

}
