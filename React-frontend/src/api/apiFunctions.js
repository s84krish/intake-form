import axios from 'axios';

const BASE_URL = "http://localhost:9090/api/form";
const PROD_URL = "http://3.139.237.105:9090/api/form";

export const postForm = (form) => {

  const options = {
    headers: {"content-type": "application/json"}
  }

  const formData = JSON.stringify({
    'alienNum': form.alienNum,
    'countryOfBirth': form.countryOfBirth,
    'provinceOfBirth': form.provinceOfBirth,
    'dateOfLastArrival': form.dateOfLastArrival ? form.dateOfLastArrival : null,
    'i94DepartureNumber': form.i94DepartureNumber ? form.i94DepartureNumber : null,
    'passportNumber': form.passportNumber ? form.passportNumber : null,
    'passportIssueDate': form.passportIssueDate ? form.passportIssueDate : null,
    'passportExpiryDate': form.passportExpiryDate ? form.passportExpiryDate : null,
    'countryOfIssuance': form.countryOfIssuance ? form.countryOfIssuance : null,
    'nonimmigrantStatus': form.nonimmigrantStatus ? form.nonimmigrantStatus : null,
    'statusExpiry': form.statusExpiry ? form.statusExpiry : null,
    'sevisNumber': form.sevisNumber ? form.sevisNumber : null,
    'eadNumber': form.eadNumber ? form.eadNumber : null,
    'usAddress': null,
    'foreignAddress': null,
    'officeType': form.officeType ? form.officeType : null,
    'officeAddress': form.officeAddress ? form.officeAddress : null,
    'officeState': form.officeCountry ? form.officeCountry : null
  });

  return axios.post(PROD_URL, formData, options);
}