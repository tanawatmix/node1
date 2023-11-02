const http = require('http')

const PORT = 3000

//create Web Server
const server = http.createServer((request, Response) => {
    if(request.url == '/'){
        Response.writeHead(200,{'content-type' : 'text/html'})
        Response.write('<h1>Home page</h1><hr>Home')
        Response.end()
    }else if(request.url == '/product'){
        Response.writeHead(200,{'content-type' : 'text/html'})
        Response.write('<h1>product page</h1><hr>product')
        Response.end()
    }else if(request.url == '/about'){
        Response.writeHead(200,{'content-type' : 'text/html'})
        Response.write('<h1>about page</h1><hr>about')
        Response.end()
    }else {
        Response.writeHead(404,{'content-type' : 'text/html'})
        Response.write('<h1>file not found</h1><hr>^O^')
        Response.end()
    }

})

//การแสดงผลของserver
server.listen(PORT,()=>{
    console.log('Server running  on port 3000.....^_^')
})

