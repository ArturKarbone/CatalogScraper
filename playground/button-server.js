const express = require('express');
const hbs = require('hbs');
var pagePath = "./button.hbs";

var app = express();
app.set('view engine', 'hbs');
app.set('views', './playground');

app.get('/', (req, res) =>{
  res.render(pagePath);
});

app.listen(3000, () => {
  console.log('Server is up and running on port: 3000');
});
