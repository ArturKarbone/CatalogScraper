const osmos = require('osmosis');
const S = require('string');


var page ='http://ruexport.org/rus_export_catalog/17926/154.html?area=28&s=0';
var localPage='http://localhost:3000/';
var individualPage = 'http://ruexport.org/rus_export_catalog/18405/3774.html?area=16&cat=18405&s=';
var errStr;
var extractEmail = function(data){
    // console.log(data);
    var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return new Promise ((resolve,reject)=>{
      if (!data.hasOwnProperty('email')){
        reject ("no email provided");
      }
      var startIndex = data.email.search(':');
      var endIndex = data.email.lastIndexOf('\'');
      var email = data.email.slice(startIndex+1,endIndex);
      if(re.test(email)){
          resolve(email);
      }
      resolve(email+" mistakes may be here");
    });
};

osmos
    .get(individualPage)
    .find('.info > script')
    .set('script')
    .data(function(data){
      var scriptStr = data.script;
      console.log(typeof scriptStr);
      console.log(S(scriptStr).capitalize().s);
      
    });

// osmos
//   .get(localPage)
//   .set({'email':'button:source'})
//   .data(function(data){
//     var email;
//     extractEmail(data).then(
//       (email) => {
//         console.log(email);
//       }).catch((e) =>{
//       console.log('Some other error while obtaining an email:', e);
//     });
//     // console.log('Prettified Email: ',email);
//   })
//   .then((context, data, next)=>{
//     var button = context.find
//     console.log(data);
//   });

var a="m6@QE0g9e7jwoBpsk+1R-3K2A8a.vcJ4UTnNFVtXqhx_HDSOuyYbZ5ILdCGMziWrPfl";
var b=a.split("").sort().join("");
var c="AuiGi5LWhB5hMMh@Gi";
var d="";
for(var e=0;e<c.length;e++){d+=b.charAt(a.indexOf(c.charAt(e)))};
console.log(d);
