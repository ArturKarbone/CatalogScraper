const fs = require('fs');
const encode = require('./encodeArr');
const exportCsv = require('./exportCsv.js');

saveToFile = (companies, fileName) => {
  encode.encode(companies).then(
      (encodedData) => {
          exportCsv.convertJson(encodedData).then(
              (csv) => {
                  // console.log(csv);
                  fs.writeFile(fileName, csv, function(err) {
                      if (err) console.error(err);
                      else console.log('Data Saved to '+fileName+' file');
                  });
              },
              (failedToCSV) => {
                  console.log('Failed at converting to CSV, ' + failedToCSV);
              }).catch((e) => {
              console.log('Failed at  writing to fileSystem');
          });
      }, (failedEncoding) => {
          console.log('Failed at encoding data, ' + failedEncoding);
  });
};

module.exports={
  saveToFile
}
