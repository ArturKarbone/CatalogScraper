// put chcp 65001 in console

const casper = require('casper').create({
  pageSettings: {
    loadImages: false,
    encoding: 'utf8'
  },
  verbose: true,
});
var links = [];
var pages = [];

function getLinks(){
  var links = document.querySelectorAll('.item-head');
  return Array.prototype.map.call(links, function(e){
    return e.innerHTML+ ": "+e.getAttribute('href');
  });
}

function getPages(){
  var pages = document.querySelectorAll('.tech a');
  return Array.prototype.map.call(pages, function(e){
    return e.innerHTML+ ": "+e.getAttribute('href');
  })
}

var linkId = "#mtd_97";
casper.start('http://ruexport.org/rus_export_catalog/?action=areas&s=0&id=28',function(){
    this.echo('Page title: '+ this.getTitle());
});

casper.then(function(){
  links = this.evaluate(getLinks);
});

casper.then(function(){
  pages = this.evaluate(getPages);
});



// casper.then(function(){
//   var link = this.evaluate(function(){
//       var _link=document.querySelector(".item-head");
//       _link.click();
//       return _link;
//   });
//   this.echo('Clicking the Link: '+link.textContent);
//
// });
// casper.then(function(){
//   this.echo('Making the screenShot');
//   casper.page.render('a2.png');
// });



casper.run(function(){
  this.echo(links.length +" links found:");
  this.echo('-'+links.join('\n-'));
  this.echo(pages.length +" pages found:");
  this.echo('-'+pages.join('\n-')).exit();
});
