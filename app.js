const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');



var chee = require('./html-parser.js');
var whatToSearch = require('./search-criteria').classToSearch;
const exportCsv = require('./exportCsv.js');
var encode = require('./encode');

var page = "http://ruexport.org/rus_export_catalog/17926/154.html?area=28&s=0";
var goo = "http://google.com";
var imdb = "http://www.imdb.com/title/tt1229340/"


var getPage = request(page, function (error, response, html){

  if (!error && response.statusCode == 200){
    // here we parse all data

      chee.getElementArray(html, whatToSearch).then(
        // Got an obejct as a result
        (result)=>{
          console.log('***** Found results: (before encoding)******');
          console.log(result);
          // Encode object props to UTF8
          encode.encode(result).then(
            (encodedObj) => {
              // convert JSON to CSV
              exportCsv.convertJson(encodedObj).then(
                (csv) => {
                  // write to fileSystem ot database
                  fs.writeFileSync('company.csv', csv, 'binary');
                },
                (fail) => {
                  console.log('Unable to covert JSON to CSV');
                  return;
                }
              ).catch((e)=>{
                // when excel is open
                console.log("FS writeFileSync somehow failed");
              });
            },
            (fail) =>{
              console.log(fail);
              return;
            }
          )

          },
        (fail)=>{
          console.log("***** Something went wrong: ******");
          console.log(fail);
          return;
        });
    }
  });
