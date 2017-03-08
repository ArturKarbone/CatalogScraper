// put chcp 65001 in console

const casper = require('casper').create({
    pageSettings: {
        loadImages: false,
        encoding: 'utf8'
    },
    verbose: true,
    // clientScripts: ['https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js']
});
var iteration = 1;
function getLinks() {
    var links = document.querySelectorAll('.item-head');
    return Array.prototype.map.call(links, function(e) {
        return e.innerHTML + ": " + e.getAttribute('href');
    });
};
var links =[];
function doStuff() {
    var buttonNext = '.tech > a:last-child';
    this.echo('Performing actions on each page');
    this.echo('Making the screenShot');
    casper.page.render('./playground/page' + iteration + '.png');
    if (casper.visible(buttonNext)) {
        iteration++;
        casper.thenClick(buttonNext);
        casper.wait(3000);
        casper.then(doStuff);
    } else {
        casper.echo('end');
    }
}
casper.start('http://ruexport.org/rus_export_catalog/18405/?area=16&s=0', function() {
    this.echo('Page title: ' + this.getTitle());
});
casper.then(doStuff);
casper.run();
