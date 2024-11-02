//import package(s)
//http package
const http = require ('http');

//create server
const web = http.createServer ((request,response) => {
    //update to handle different routes
    //default - homepage
    //about
    //contact us
    if(request.url === '/')(
        response.writeHead(200, {'content-type' :'text/plain'})
        response.end('This is my landing page')
    )else if(request.url === '/registration')(
        response.writeHead(200, {'content-type' : 'text/plain'})
        response.end('successfully registered')
    )else if(request.url === '/login')(
        response.writeHead(200, {'content-type' : 'text/plain'})
        response.end('successfully logged in')
    )else (
        response.writeHead(200, {'content-type' : 'text/plain'})
        response.end('This is my landing page')    
    )
});
    

//launch the server
web.listen(3000, () =>  {
    console.log('server is runnig on port: 3000')
})