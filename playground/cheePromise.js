const cheerio = require('cheerio');

var {htmlPage} = require('./singleCompany.js');


// goods part
var companyFinder = '.card-left-side > h1';
var titleFinder = '.descript-wrap > h2';
var descriptionFinder = '.descript-wrap > p';
var keywords = '.descript-wrap > i';

// contact info parent
var contactInfo = '.info > div';
var email = "document-location-href";


var tagArr = [
  companyFinder,
  titleFinder,
  descriptionFinder,
  keywords,
  contactInfo,
  email
];

var returnPropArr = [
  'companyName',
  'productTitle',
  'productDescription',
  'keywords',
    [
      'contactName',
      'contactPostition',
      'contactPhone'
    ],
  'email'
];
var classToSearch = {
  itemToSearch: tagArr,
  propToReturn: returnPropArr
};
// console.log(classToSearch);
var getElementArray = (htmlPage, classToSearch) => {

  var returnedArray=[];
  // seach values for all provided classes

  return new Promise((resolve, reject) => {
      let $ = cheerio.load(htmlPage);
      var returnObj = {};
      for (var a = 0; a < classToSearch.itemToSearch.length; a++){
        var itemsMatch = $(classToSearch.itemToSearch[a]).length;
        // loop throug all tags and classes to find needed text;
        console.log('Matches found:'+itemsMatch);

        if (itemsMatch>1){
          // corresponds to contact info. all info is just ".info > div"
          $(classToSearch.itemToSearch[a]).each( function (i, element) {
            console.log($(element).text());
            returnObj[classToSearch.propToReturn[4][i]] = $(element).text();
            // 4 - element is a sub array with contact info properties;
          });
        } else {
          // when needed text corresponds to a unique selector
          returnObj[classToSearch.propToReturn[a]]=$(classToSearch.itemToSearch[a]).text();
          console.log($(classToSearch.itemToSearch[a]).text());
        }
      }

      if (returnObj) {
        resolve(returnObj);
      }
        reject('No items found');
      });
}
getElementArray(htmlPage,classToSearch).then((success)=>{
  console.log(success);
}, (err) =>{
  console.log("Something went wrong: "+ err);
});

module.exports = {
  getElementArray
}
