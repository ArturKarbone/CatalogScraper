var jsdom  = require('jsdom');
var linkList = [];
var getLinkList = function(){
  return new Promise((resolve,reject)=>{
    jsdom.env({
      url: 'http://ruexport.org/rus_export_catalog/?action=areas&s=0&id=28',
      scripts: ['http://code.jquery.com/jquery.js'],
      done: function(err, window){
        if (err){
          reject(err);
        }
        let linkList = [];
        let $ = window.$;
        $('td > .paging > a').each(function(i, element){
          linkList.push('Page Nr.'+$(element).text()+' page link: '+$(element).attr('href'));
          $(element).click(()=>{console.log("Clicked "+element);});
        });

        resolve(linkList);
      }
    });
  });
}
var iterateList = function(linkList){

}
getLinkList()
  .then(
    (succ)=>{console.log(succ);},
    (fail)=>{console.log(fail);}
  );
