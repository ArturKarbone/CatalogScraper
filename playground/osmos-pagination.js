const osmos = require('osmosis');
var {divisions} = require('../osmos/catalogDivisions');

osmos
  .get(divisions[0]['url'])
  .paginate('.paging.tech:first > a[href]:last',4)
  .set({'company': 'a.item-head'})
  .data(function(data){
    console.log(data);
  });

  // .find('.product-table')
  // .follow('a.item-head[href]')
  // .delay(2000)
  // .set({'company':'.card-left-side > h1'})
  // .data(function(data){
  //    console.log(data);
  // })


  osmos
    .get(divisions[0]['url'])
    .find('.paging.tech:first > a[href]:last')
    .set('nextButton')
    .data(function(data){
       console.log(data);
    });
