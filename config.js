var mysql = require('mysql');
var pool = mysql.createPool({connectionLimit:100,host:'root', password:'',database:'logipool',debug:false});


function handle_database(query,callback){
    pool.getConnection(function(err,connection){
if(err)
{
    callback({"code":100,"status":"Error in connection database"},null);
    return;
}
connection.query(query,function(err,rows){
    connection.release();
    if(!err){
        callback(null,rows);
    }
});

connection.on('error',function(){
    callback({"code":100,"status":"Error in connection database"},null);
    return;
});
    });
}

module.exports ={
    executeQuery:handle_database
}