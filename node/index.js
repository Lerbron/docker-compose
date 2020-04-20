const http = require('http')

http.createServer((req, res) => {
  // res.send('hello world!')
  res.end('hello world!')
}).listen(3000)