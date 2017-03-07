// takes an object, and encodes it's properties to utf8
const utf8 = require('utf8');

var encode = function(obj){
  return new Promise((resolve, reject)=>{
    if ((typeof obj)!=='object'){
      reject('Must provided an object');
    }
    for (var prop in obj){
      obj[prop]=utf8.encode(obj[prop]);
    }
    resolve(obj);
  });
};

module.exports ={
  encode
}
