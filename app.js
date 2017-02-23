const request = require('request');
const cheerio = require('cheerio');

var chee = require('./playground/cheePromise');

var page = "http://ruexport.org/rus_export_catalog/?action=areas&s=0&id=28";
var goo = "http://google.com";
var imdb = "http://www.imdb.com/title/tt1229340/"

var jsonData = {
  title:"",
  description:""
};

var getPage = request(page, function (error, response, html){

  if (!error && response.statusCode == 200){
    // here we parse all data
    chee.getElementArray(html,['.item-head', '.c-descript']).then(
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
