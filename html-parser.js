const cheerio = require('cheerio');

var getElementArray = (htmlPage, classToSearch) => {
  var returnObj = {};
  return new Promise((resolve, reject) => {
    let $ = cheerio.load(htmlPage);
    for (var a = 0; a < classToSearch.itemToSearch.length; a++){
      var itemsMatch = $(classToSearch.itemToSearch[a]).length;
      // loop throug all tags and classes to find needed text;

      if (itemsMatch>1){
        // corresponds to contact info. all info is just ".info > div"
        $(classToSearch.itemToSearch[a]).each( function (i, element) {
          returnObj[classToSearch.propToReturn[4][i]] = $(element).text();
          // 4 - element is a sub array with contact info properties;
        });
      } else {
        // when needed text corresponds to a unique selector
        returnObj[classToSearch.propToReturn[a]]=$(classToSearch.itemToSearch[a]).text();
      }
    }
      if (returnObj) {
        resolve(returnObj);
      }
        reject('No items found');
    });
}

module.exports = {
  getElementArray
}
