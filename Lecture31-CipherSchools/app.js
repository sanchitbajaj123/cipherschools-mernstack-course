const http= require("http");

const server= http.createServer((req,res)=>{

    res.write("This is some response from your first nodejs serves")

    res.end();
});

server.listen(3000, ()=>{
    console.log("server is running");
})