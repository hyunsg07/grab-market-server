var http =require('http');
var hostname = '127.0.0.1';
// host name 은 내 컴퓨터 ip를 가르킨다
var port = 8080;

const server = http.createServer(function(req,res){
    console.log('REQUEST : ', req);
    res.end("hello Clinet!");
});

server.listen(port, hostname);

console.log('grab-market-server on!');