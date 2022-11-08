const http = require('http')
const data =[
     {id:'1',
     name:'niki'
     },
     {id:'2',
     name:'niki'}
    
 ]
const server = http.createServer((req,res)=>{
    res.write("<h1>writen using html element</h1>")
    res.write(JSON.stringify(data))
    res.end()
})
server.listen(5000,() =>(
    console.log("server started in port 5000")
))