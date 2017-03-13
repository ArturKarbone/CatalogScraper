const json2csv = require('json2csv');
const fs = require('fs');


var fields = [
  'company',
  'productTitle',
  'productDescription',
  'productKeywords',
  'contactName',
  'contactPosition',
  'contactPhone',
  'email'
    // tableHeader.propToReturn[5], //email
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

    var csv = json2csv({data: data,
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
