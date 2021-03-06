const json2csv = require('json2csv');
// https://www.npmjs.com/package/json2csv
const fs = require('fs');
const utf8 = require('utf8');

var fields = ['name', 'surname', 'age']; //these must be equal to JSON prop names
var fieldNames = ['Name', 'Surname', 'Age']; //these make things pretty

var dummyJson = [
  {
  name: utf8.encode('Дмитрий Чу'),
  surname: utf8.encode('Чё'),
  age: 34
  // encoded string looks bad inside the terminal, but nice inside csv file.
},{
  name: 'Volodja',
  surname: 'Ku',
  age: 23
}];

var opts = {
  data: dummyJson,
  fields: fields,
  fieldNames: fieldNames,
  quotes: ''
};

try {
  var csv = json2csv(opts);
  fs.writeFileSync('dummyCSV.csv', csv, 'binary');
  console.log('File written:');
  console.log(csv);
} catch (e){
  console.log(e);
}
