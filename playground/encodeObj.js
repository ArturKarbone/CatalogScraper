const utf8 = require('utf8');

var obj = {
  companyName: "ООО русский текст",
  productTitle: "Уникод 8 название ЩЁЙРСЗ"
};
console.log('Before encoding');
console.log(obj);
for (var prop in obj){
  obj[prop] = utf8.encode(obj[prop]);
}
console.log('After encoding');
console.log(obj);
