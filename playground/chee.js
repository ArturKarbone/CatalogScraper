const cheerio = require('cheerio');

var htmlPage = `
    <h1>Some H1 tag</h1>
    <ul class = "list">
        <li class="list-item">Apple</li>
        <li class="list-item">Pear</li>
        <li class="list-item">Orange</li>
        <li class="list-item">Peach</li>
        <li class="other">Non freuit</li>
    </ul>
`;

let $ = cheerio.load(htmlPage);

console.log(`the whole page:`, $.html());
console.log('Selected items only: ',$('.list-item').text());

var elArray = [];
$('.list-item').each(
  function(i, element){
    // elArray.push($(this).text());
    elArray[i]={
      title: $(element).text()
    };
    // console.log($(element).text());
  });
console.log(elArray);
console.log($.text());
