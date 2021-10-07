const express = require('express');
const ejs = require('ejs');
const mainPage = require('./routes/main');
const errorPage = require('./routes/error');
const app = express();

app.set('view engine', ejs);
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));


app.use(mainPage);
app.use(errorPage);



app.listen(3000, () => {
    console.log('Server is running on Port 3000');
});
