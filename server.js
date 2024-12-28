const http=require('http');
const server=http.createServer((req,res)=>{
    console.log(req.url)
    if(req.url==='getSecretData'){
        res.end('there is no data')
    }
    res.end("hello World")
});

server.listen(7777);