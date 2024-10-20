const http = require('http');


//localhost::3500
http.createServer(function(req,res){

    console.log('server work');
    res.end('1');
}).listen(3500);