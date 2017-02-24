const cheerio = require('cheerio');

var getElementArray = (htmlPage, classToSearch) => {

  var returnedArray=[];
  // seach values for all provided classes
  return new Promise((resolve, reject) => {
    //classToSearch must be an Array
    if (classToSearch.isArray || classToSearch.length<1){
      reject('Must provide an array with a list of classes to search');
    }
      let $ = cheerio.load(htmlPage);
      $(classToSearch[0]).each( function (i, element) {
          console.log('Elements that correspond to: '+classToSearch+": "+$(element).text());
          returnedArray.push('Elements that correspond to: '+classToSearch+": "+$(element).text());
      });

      if (returnedArray.length>0) {
        resolve(returnedArray);
      }
        reject('No items found');
      });
}

module.exports = {
  getElementArray
}
