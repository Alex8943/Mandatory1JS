const express = require("express");
const app = express();
const port = 8080;

//With express.static("public") i specify which resources my client has access to.
//app.use(express.static("public")); since i dont have any private files, i am giving all maps acces to the client. 

app.get("/index",(req,res) =>{
    res.sendFile(__dirname + "/frontpage/index.html");
});




app.listen(port, () => {
    console.log("Server is running on port", port);
});











