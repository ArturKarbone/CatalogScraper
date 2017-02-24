const cheerio = require('cheerio');

var {htmlPage} = require('./singleCompany.js');


// goods part
var companyFinder = '.card-left-side > h1';
var titleFinder = '.main-wrap > h2';
var descriptionFinder = '.descript-wrap > p';
var keywords = '.descript-wrap > i';

// contact info parent
var contactName = '.info > div > b';
var contactPosition = '.info > div';


var tempArr = [
  companyFinder,
  titleFinder,
  descriptionFinder,
  keywords,
  contactName,
  contactPosition,
];
var classToSearch = [tempArr[5]];

var getElementArray = (htmlPage, classToSearch) => {

  var returnedArray=[];
  // seach values for all provided classes
  return new Promise((resolve, reject) => {
    //classToSearch must be an Array
    if (classToSearch.isArray || classToSearch.length<1){
      reject('Must provide an array with a list of classes to search');
    }
      let $ = cheerio.load(htmlPage);

      // classToSearch.forEach(function(singleClassToSearch){
      //   $(singleClassToSearch).each(function(i, element){
      //       console.log($(element).children().length);
      //       returnedArray.push({
      //         title:$(this).text()
      //       });
      //   });
      // });
      var jsonData = {
        title:"",
        provider:"",
        description:""
      }
      $(classToSearch[0]).each( function (i, element) {


          // console.log("title: "+$(element).find('.item-head').text());
          // console.log("current DIVs class: "+ $(element).attr('class'));
          // console.log('Chilren count: '+$(element).children().length);
          console.log('Elements that correspond to: '+classToSearch+": "+$(element).text());
          returnedArray.push('Elements that correspond to: '+classToSearch+": "+$(element).text());
          // if ($(element).find('.item-head').text()){
          //   jsonData.title = $(element).find('.item-head').text();
          //   return;
          // } else if ($(element).attr('class')==='gray'){
          //   jsonData.provider = $(element).text();
          //   return;
          // } else if ($(element).attr('class')==='c-descript'){
          //   jsonData.description = $(element).text();
          //   return;
          // }
          // var provider = $(element).find('.gray').text();
          // var description = $(element).find('c-descript').text();
          // console.log(`Title of product: ${title};
          //             Provider of product ${provider};
          //             Product description ${description};`);
      });
      // console.log("*********** Total JSONdata: ******** ");
      // console.log(jsonData);

      if (returnedArray.length>0) {
        resolve(returnedArray);
      }
        reject('No items found');
      });
}
// getElementArray(htmlPage,classToSearch).then((success)=>{
//   console.log(success);
// }, (err) =>{
//   console.log("Something went wrong: "+ err);
// });

module.exports = {
  getElementArray
}
