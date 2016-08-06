

const http = require("http")

http.createServer((request, response) => {
  response.writeHead(200, {"Content-Type": "aplication/json;charset=utf-8"})

  const url = request.url
  console.log('url', url)

  switch(url){
  	case '/listar':
  	const listagem = [
  	{name:"Suissa", age: 31},
  	{name:"João", age: 24},
  	{name:"José", age: 23},
  	{name:"Maria", age: 22}
  	]
  }
  	

  

  response.write('Hello Wordsld')

  response.end()
})
.listen(3000)
console.log('Server running at http://localhost:3000/')
