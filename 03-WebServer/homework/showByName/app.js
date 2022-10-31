var fs = require("fs")
var http = require("http")

// Escribí acá tu servidor

http.createServer((req, res) => {
    const name = req.url.slice(1); 
    const files= fs.readdirSync("./images");
    for(const file of files){
    if(file.includes(name)){
        res.writeHead(200,{"Content-type":"image/jpg"})
const img= fs.readFileSync(`./images/${name}_doge.jpg`)
       return res.end(img)
    }
}
return res.writeHead(404,).end("Image not found")

}).listen(3002, "localhost");