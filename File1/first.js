// const http = require("http");
//
// const server = http.createServer((req,res)=>{
//   res.end("hello from other side");
// });
//
// server.listen(8000,"127.0.0.1",()=>{
//   console.log("listening to port no 8000");
// })

// const http = require("http");
//
// const server = http.createServer((req,res)=>{
//   if(req.url == "/" ){
//   res.end("hello from Home side");
//   }
//   else if(req.url == "/about")
//   {
//   res.end("hello from About side");
//   }
//   else if(req.url == "/contact")
//   {
//   res.end("hello from contact Us side");
//   }
//   else{
//     res.writeHead(404,{"Content-type":"text/html"});
//     res.end("<h1>404 error </h1> ");
//   }
// });
//
// server.listen(8000,"127.0.0.1",()=>{
//   console.log("listening to port no 8000");
// })

const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>{
  const data = fs.readFileSync(`${__dirname}/userApi/userApi.json`,'utf-8');
const objdata = JSON.parse(data);

  if(req.url == "/" ){
  res.end("hello from Home side");
  }
  else if(req.url == "/about")
  {
  res.end("hello from About side");
  }
  else if(req.url == "/userapi")
  {
    res.writeHead(200,{"Content-type":"application/json"});
    res.end(objdata[0].name);
  }
  else{
    res.writeHead(404,{"Content-type":"text/html"});
    res.end("<h1>404 error </h1> ");
  }
});
server.listen(8000,"127.0.0.1",()=>{
  console.log("listening to port no 8000");
})