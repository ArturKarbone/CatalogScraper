const json2csv = require('json2csv');
const fs = require('fs');
const tableHeader = require('./search-criteria.js').classToSearch;

var fields = [
    tableHeader.propToReturn[0], //companyName
    tableHeader.propToReturn[1], //productTitle
    tableHeader.propToReturn[2], //productDescription
    tableHeader.propToReturn[3], //keywords
    tableHeader.propToReturn[4][0], //contactName
    tableHeader.propToReturn[4][1], //contactPostition
    tableHeader.propToReturn[4][2], //contactPhone
    tableHeader.propToReturn[5], //email
  ]; //these must be equal to JSON prop names
var fieldNames = [
    'Company name',
    'Product title',
    'Product description',
    'Company keywords',
    'Contact person name',
    'Position in company',
    'Phone number',
    'email'
  ]; //these make things pretty



var convertJson = function(data){
  return new Promise ((resolve, reject) =>{

    var csv = json2csv({data: [data],
                        fields: fields,
                        fieldNames:fieldNames,
                        quotes: '',
                        del: ';'
                      });
    if(csv){
      // console.log('CSV created');
      // console.log(csv);
      resolve(csv);
    } else {
      reject('Unable to create CSV');
    }
  });
}
module.exports ={
  convertJson
}
