const osmosis = require('osmosis');
const fs = require('fs');

var encode = require('./encodeArr');
const exportCsv = require('./exportCsv.js');

var companyProfile = {
    company: '.card-left-side > h1',
    productTitle: '.descript-wrap > h2',
    productDescription: '.descript-wrap > p',
    productKeywords: '.descript-wrap > i',
    contactName: '.info > div:nth-child(1)',
    contactPosition: '.info > div:nth-child(2)',
    contactPhone: '.info > div:nth-child(3)',

};
var companies=[];

osmosis //loop through links and visit them on one page
    .get('http://ruexport.org/rus_export_catalog/18405/?area=16&s=0')
    .find('.paging')
    .delay(Math.random(3000))
    .paginate('a[href]',2) // delete number 2 when using prod. means we use only first 2 pages
    .find('.product-table')
    .delay(Math.random(3000))
    .follow('a.item-head[href]')
    .set(companyProfile)
    .delay(Math.random(3000)) // some sort of delay.
    .data(function(data) {
        // console.log(data);
        companies.push(data);
    })
    .done(function() {
        // encode to utf8
        encode.encode(companies).then(
            (encodedData) => {
                    exportCsv.convertJson(encodedData).then(
                    (csv) => {
                        // write to filesystem
                        console.log(csv);
                        fs.writeFile('data.csv', csv, function(err) {
                          if(err) console.error(err);
                          else console.log('Data Saved to data.csv file');
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
    });
