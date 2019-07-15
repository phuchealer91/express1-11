
const express = require('express');
var app = express();
var bodyParser = require('body-parser');
var usserRoute = require('./routes/user.route');
// var db = require('./db');

var port = 3000;



app.set('view engine','pug');
app.set('views','./views');

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// var users = [
//     {id: 1, name: "Phuc"},
//     {id: 2, name: "SuSu"}
// ]
app.get('/',function(req,res){
    res.render("index",{
        name : "Nguyen Khac Minh Phuc"
    });
});

app.use(express.static('public'))

app.use('/users', usserRoute);

// function autoSave(){
//     var searchInput = document.getElementById('input-field');
//     var value = searchInput.value;
//     console.log(value);
//     searchInput.addEventListener('change', function() {
//     sessionStorage.setItem('draft', searchInput.value)})
//     searchInput.value = sessionStorage.getItem('draft');
// }






app.listen(port,function(){
    console.log("This is a port: "+ port);
});