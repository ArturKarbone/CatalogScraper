const osmosis = require('osmosis');
const fs = require('fs');

var {saveToFile} = require('./writeToFile');
var {makeEmailPretty} = require('./prettifyEmail');
var {getEmail} = require('./get-email');

var {divisions} = require('./catalogDivisions');
// skipped 18
var currentDiv = divisions[19];

// var companyProfile = {
//     company: '.card-left-side > h1',
//     productTitle: '.descript-wrap > h2',
//     productDescription: '.descript-wrap > p',
//     productKeywords: '.descript-wrap > i',
//     contactName: '.info > div:nth-child(1)',
//     contactPosition: '.info > div:nth-child(2)',
//     contactPhone: '.info > div:nth-child(3)',
//     email: [ // TODO
//       osmosis
//         .find('.info > script')
//         .set('script')
//         .data(function(data){
//           getEmail(data.script).then(
//             (cleanEmail)=>{
//               return cleanEmail;
//             }
//           ).catch((e)=>{
//             console.log('Error while obtainig email: ', e);
//             return "not found a email";
//           });
//         })
//         .done()
//     ]
// };
var companyProfile = {
    company: '.card-left-side > h1',
    productTitle: '.descript-wrap > h2',
    productDescription: '.descript-wrap > p',
    productKeywords: '.descript-wrap > i',
    contactName: '.info > div:nth-child(1)',
    contactPosition: '.info > div:nth-child(2)',
    contactPhone: '.info > div:nth-child(3)',
    emailScript: '.info > script',
};

var companies=[];

osmosis //loop through links and visit them on one page
    .get(currentDiv['url'])
    .paginate('.paging.tech:first > a[href]:last',currentDiv['pagination']) // delete number 2 when using prod. means we use only first 2 pages
    .delay(4000)
    .find('.product-table')
    .follow('a.item-head[href]')
    .delay(4800)
    .set(companyProfile)
    // .delay(1500) // some sort of delay.
    .data(function(data) {
        getEmail(data.emailScript).then(
          (cleanEmail) => {
            data.emailScript = cleanEmail;
          }
        ).catch((e) =>{
            data.emailScript = 'fallback email';
        });
        companies.push(data);
    })
    .delay(1500)
    .done(function() {
        // prettifyEmail(companies);
        // console.log(companies)
        saveToFile(companies,currentDiv['name']);
    });
