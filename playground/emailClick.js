const osmos = require('osmosis');

var page ='http://ruexport.org/rus_export_catalog/17926/154.html?area=28&s=0';
var localPage='http://localhost:3000/';
var errStr;
osmos
  .get(localPage)
  .set({'email':'button:source'})
  .data(console.log);
