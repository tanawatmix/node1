const http = require('http')
const fs = require('fs')
const path = require('path')
const PORT = 3000

//create Web Server
const server = http.createServer((request, Response) => {
    if(request.url == '/'){
       getPage(Response,'home.html')
    }else if(request.url == '/product'){
        getPage(Response,'product.html')
    }else if(request.url == '/about'){
        getPage(Response,'about.html')
    }else {
        Response.writeHead(404,{'content-type': 'text/html'})
        Response.write('<h1>File not found</h1><hr>^o^')
        Response.end()
    }

})

//การแสดงผลของserver
server.listen(PORT,()=>{
    console.log('Server running  on port 3000.....^_^')
})

function getPage(response, pageFile){
    response.writeHead(200,{'context-type':'text/html'})

    fs.readFile(
        path.join(__dirname,'views',pageFile),
        function(err,data){
            if(err) throw err
            response.write(data)
            response.end()
        }
    )
}
