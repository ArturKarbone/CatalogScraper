const request = require('request');
const cheerio = require('cheerio');

var chee = require('./html-parser.js');
var whatToSearch = require('./search-criteria').classToSearch;

var page = "http://ruexport.org/rus_export_catalog/17926/154.html?area=28&s=0";
var goo = "http://google.com";
var imdb = "http://www.imdb.com/title/tt1229340/"


var getPage = request(page, function (error, response, html){

  if (!error && response.statusCode == 200){
    // here we parse all data

      chee.getElementArray(html, whatToSearch).then(
        (success)=>{
          console.log('***** Found reaults: ******');
          console.log(success);
        },
        (fail)=>{
          console.log("***** Something went wrong: ******");
          console.log(fail);
        });

    }
  });
