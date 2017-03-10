// takes an object, and encodes it's properties to utf8
const utf8 = require('utf8');

var encode = function(arrayOfObjects) {
  var encodedObjArray=[];
  return new Promise((resolve, reject) => {
    if (!Array.isArray(arrayOfObjects)){
      reject('Must had provided an Array to UTF8 encoding module');
    }
    arrayOfObjects.forEach(function(obj){
      // console.log('Typeof provided array element:', typeof obj);
      if ((typeof obj) !== 'object'){
        reject('Found a non object inside provided Array');
      }
      if (Object.keys(obj).length ===0){
        return;
      }
      // for (var prop in obj){
      //   obj[prop] = utf8.encode(obj[prop]);
      // }
//Strange but there is no need to make this conversion. Don't know why.
// Lets keep module just to get rid of empty objects and double check every-ing
      encodedObjArray.push(obj);
    });
      resolve(encodedObjArray);
  });
}

module.exports = {
        encode
    }
