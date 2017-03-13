const osmosis = require('osmosis');
const fs = require('fs');

var {saveToFile} = require('./writeToFile');


var companyProfile = {
    company: '.card-left-side > h1',
    productTitle: '.descript-wrap > h2',
    productDescription: '.descript-wrap > p',
    productKeywords: '.descript-wrap > i',
    contactName: '.info > div:nth-child(1)',
    contactPosition: '.info > div:nth-child(2)',
    contactPhone: '.info > div:nth-child(3)',
    email: '.info > button:source'
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
        companies.push(data);
    })
    .done(function() {
        // prettifyEmail(companies);
        saveToFile(companies);
    });