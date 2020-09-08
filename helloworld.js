var http = require("http")

http.createServer(function (request, response) {

   // Send the HTTP header
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'})

   // Send the response body as "Hello and welcome to Harjot's page..stay tuned for more information. have a great Day !!"
   response.end('Hello and welcome to HK page..stay tuned for more information. have a great Day !!\n')
}).listen(3000)

// Console will print the message
console.log('Server running')
