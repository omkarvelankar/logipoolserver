
var express = require('express');
var cors =require('cors');
var bodyparser =require('body-parser');

var port=process.env.PORT || 3000;
var app=express();
var path= require('path');

app.use(bodyparser.urlencoded({extended:false}));

app.use(bodyparser.json({limit:1000000000,type:'application/json'}));

var EmployeeRoute = require('./app/routes/employeeroutes');
app.use('/employee',EmployeeRoute)

app.listen(port, function(){console.log("server is running at http://localhost:" + port);});