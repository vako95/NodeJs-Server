const http = require("http");
const fs = require("fs");
const path = require("path");
const PORT = '3500';

const mimeTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".gif": "image/gif",
    ".svg": "image/svg+xml",
    ".ico": "image/x-icon",
    ".webp": "image/webp",
    ".bmp": "image/bmp",
    ".mp4": "video/mp4",
    ".webm": "video/webm",
    ".avi": "video/x-msvideo",
    ".mp3": "audio/mpeg",
    ".wav": "audio/wav",
    ".ogg": "audio/ogg",
    ".pdf": "application/pdf",
    ".xml": "application/xml",
    ".zip": "application/zip",
    ".ttf": "font/ttf",
    ".woff": "font/woff",
    ".woff2": "font/woff2",
    ".doc": "application/msword",
    ".xls": "application/vnd.ms-excel",
    ".ppt": "application/vnd.ms-powerpoint",
    ".bin": "application/octet-stream"
  };
function staticFile (res,filePath,ext){
    res.setHeader("Content-Type", mimeTypes[ext]);
    fs.readFile('./public' + filePath,(error,data) => {
        if(error){
            res.statusCode = 404;
            res.end();
        }
        res.end(data);
    })
}
  http.createServer(function(req,res){
    const url = req.url;
    console.log(url);

    switch(url){
        case '/':
            console.log("Main Page");
            res.write("<h1> Main Page </h1>");
            res.end();
        case '/contact':
            staticFile(res, '/contact.html', '.html');
            break;
            default:
                const extname = String(path.extname(url)).toLowerCase();
                if(extname in mimeTypes){
                   staticFile(res,url,extname);
                }
                else{
                    res.statusCode = 404;
                    res.end();
                }
    }
  }).listen(PORT);