const express = require("express");
const app = express();
const product = require("./api/product");
const nunjucks = require('nunjucks');
const indexRouter = require('./api/index');
nunjucks.configure('./views/', {
    autoescape: true,
    express: app,
  });
app.use(express.json({ extended: false}));
app.use("/api/product", product);
app.use('/', indexRouter);
app.set('view engine', 'njk');

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> {
    console.log(`Server is running in port ${PORT}`);
})
