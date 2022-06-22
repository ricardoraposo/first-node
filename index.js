const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  console.log(req.url, req.method)
  res.setHeader("Content-Type", "text/html")
  let path = "./pages/"

  switch(req.url){
    case "/":
      path += "index.html"
      break
    case "/about.html":
      path += "about.html"
      break
    case "/contact.html":
      path+= "contact.html"
      break
    default:
      path+="404.html"
      break
  }

  fs.readFile(path, (err,data) => {
    if(err){
      console.error(err)
      res.end()
    } else{
      res.end(data)
    }
  })
})

server.listen(3000)
