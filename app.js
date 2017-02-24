const request = require('request');
const cheerio = require('cheerio');

var chee = require('./html-parser.js');

var page = "http://ruexport.org/rus_export_catalog/17926/154.html?area=28&s=0";
var goo = "http://google.com";
var imdb = "http://www.imdb.com/title/tt1229340/"

var jsonData = {
  title:"",
  description:""
};
var companyFinder = '.card-left-side > h1';
var titleFinder = '.main-wrap > h2';
var descriptionFinder = '.descript-wrap > p';
var keywords = '.descript-wrap > i';

// contact info parent
var contactName = '.info > div > b';
var contactPosition = '.info > div';

var infoArr = [
  companyFinder,
  titleFinder,
  descriptionFinder,
  keywords,
  contactName,
  contactPosition,
];

var getPage = request(page, function (error, response, html){

  if (!error && response.statusCode == 200){
    // here we parse all data
    infoArr.forEach((entry) => {
      chee.getElementArray(html,[entry]).then(
        (success)=>{
          console.log('***** Found reaults: ******');
          // console.log(success);
        },
        (fail)=>{
          console.log("***** Something went wrong: ******");
          console.log(fail);
        });
    });

    }
  });
