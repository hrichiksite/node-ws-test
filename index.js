var WebSocketServer = require("ws").Server
var http = require("http")
var express = require("express")
var app = express()
var port = process.env.PORT || 5000

app.use(express.static(__dirname + "/"))

var server = http.createServer(app)
server.listen(port)

console.log("http server listening on %d", port)

var wss = new WebSocketServer({server: server})
console.log("websocket server created")

wss.on("connection", function(ws) {
  var id = setInterval(function() {
    ws.send(JSON.stringfy({"apps":{"com-apppro-companion":{"description":"live test your apps, blah, blah, bhah","dev":"AppPro Team","downloadlink":"https://firebasestorage.googleapis.com/v0/b/apppro-store.appspot.com/o/test.apk?alt=media&token=73418ff4-89f6-44fc-a285-780228f2190f","icon":"https://apppro-store-test.vercel.app/apppro.png","metrics":{"downloads":10000},"name":"AppPro Companion"}}}), function() {  })
  }, 1000)

  console.log("websocket connection open")

  ws.on("close", function() {
    console.log("websocket connection close")
    clearInterval(id)
  })
})
