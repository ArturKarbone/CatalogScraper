const cheerio = require('cheerio');

// var htmlPage = `
//     <h1>Some H1 tag</h1>
//     <ul class = "list">
//         <li class="list-item">Apple</li>
//         <li class="list-item">Pear</li>
//         <li class="list-item">Orange</li>
//         <li class="list-item">Peach</li>
//     </ul>
//     <p class="description">Apples are sweet</p>
//     <p class="description">Pears ar sandy</p>
//     <p class="description">Oranges are juicy</p>
//     <p class="description">Peachs are soft</p>
// `;

var classToSearch = ['.list-item','.description'];


var getElementArray = (htmlPage, classToSearch) => {

  var returnedArray=[];
  // seach values for all provided classes

  return new Promise((resolve, reject) => {
    //classToSearch must be an Array
    if (classToSearch.isArray || classToSearch.length<1){
      reject('Must provide an array with a list of classes to search');
    }
      let $ = cheerio.load(htmlPage);

      classToSearch.forEach(function(singleClassToSerach){

        $(singleClassToSerach).each(function(i, element){
          returnedArray.push($(this).text());
        });

        if (returnedArray.length>0) {
          resolve(returnedArray);
        }
        reject('No items found');
      });
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
