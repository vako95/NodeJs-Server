const http = require('http');
const fs = require('fs');

const PORT = '3500';

http.createServer(function(req,res){
const url = req.url;
res.setHeader('Content-Type', 'text/html; charset=utf-8' )
switch(url){
    case "/":
        res.write("<h1> Main page 1 </h1>");
        break;

        case "/contact":
         let data  = fs.readFileSync('./contact.html', {encoding:"utf8", flag:'r'})
         res.write(data);
         break;

         default:
         res.write("<h1> Page Not Found </h1>");
}
res.end();

}).listen(PORT);