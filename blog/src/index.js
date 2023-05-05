const express = require('express');
const path = require('path')
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000 //để chạy web ở cổng nào

app.use(morgan('combined'))
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

console.log('PATH: ', path.join(__dirname, 'resource\\view'))

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(port, () => {
  console.log(`Example app listening on  https://localhost:${port}`)
})

