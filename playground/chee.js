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
    <span id="e809006831"><button class="btn btn-small" onclick=" document.location.href = 'mailto:granica32@mail.ru'  ">E-mail<i class="myicon-envelope myicon-blue"></i></button></span><script type="text/javascript">/*<![CDATA[*/eval("var a=\"Za3oIUF7@JwxBlsHQzcX5rd8e0gNT2VEm4MvpnfWCtOyj9-SuG.hD+LPqiR_6AkYb1K\";var b=a.split(\"\").sort().join(\"\");var c=\"SRtLGytFUl+tGD3RA\";var d=\"\";for(var e=0;e<c.length;e++)d+=b.charAt(a.indexOf(c.charAt(e)));document.getElementById(\"e809006831\").innerHTML=\"<button class=\\\"btn btn-small\\\" onclick=\\\" document.location.href = 'mailto:\"+d+\"'  \\\">E-mail<i class=\\\"myicon-envelope myicon-blue\\\"></i></button>\"")/*]]>*/</script>
`;

let $ = cheerio.load(htmlPage);

console.log(`the whole page:`, $.html());
console.log('Selected items only: ',$('span > button').attr('onclick'));

var elArray = [];
// $('.list-item').each(
//   function(i, element){
//     // elArray.push($(this).text());
//     elArray[i]={
//       title: $(element).text()
//     };
//     // console.log($(element).text());
//   });
