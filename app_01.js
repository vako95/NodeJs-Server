const http = require('http');
const PORT = '3500';

http.createServer(function(req,res){
const url = req.url;
console.log(url)
 switch(url){
    case'/':
    res.write("<h1> Main Page </h1>");
    break;
    case'/contact':
    res.write('<p> Contact Page </p>')
    break;
    default:'*'
        res.write('Page Not Fount')

}
res.end();
}).listen(PORT)
