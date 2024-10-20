const http = require("http");
const fs = require("fs");

const PORT = '3500';

http.createServer(function (req, res) {
    const url = req.url;
res.setHeader("Content-Type", "text/html; charset=utf-8");
    switch (url) {
        case "/":
            res.write("<p>Main Page </p>");
            res.end();
            break;
        case "/contact":
            let data = fs.readFileSync("./public/contact.html", { encoding: "utf-8", flag: "r" });
            res.write(data);
            res.end();
            break;

        default:
            if (url.includes("/images")) {
                 fs.readFile("./public/"+ url, {} , function(error,data){
                    if(error){

                    }else{
                        res.setHeader("Content-type" , "image/png")
                        res.write(data);
                        res.end()
                    }
                 });
             

            } else {
                console.log("Error");
                res.write("<h1> Page Not Found </h1>");
                res.end();
            }
    }
   
}).listen(PORT);