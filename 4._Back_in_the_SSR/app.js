const express = require("express");
const app = express();

app.use(express.static("public"));

const fs = require("fs");
//Making nav and footer html readable by making it to a string. The same goes for the other html files. 
const nav = fs.readFileSync("./public/components/nav.html").toString();
const footer = fs.readFileSync("./public/components/footer.html").toString();
const frontpage = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString();
const loops = fs.readFileSync("./public/pages/types/loops.html").toString(); 
const nodemon = fs.readFileSync("./public/pages/types/nodemon.html").toString(); 

//Making these objects will it make it usefull, to send a request to the client. And get a respond t 
const frontpagePage = nav.replace("%%DOCUMENT_TITLE%%", "Welcome to all type of js. learning goals") + frontpage + footer;
const loopPage = nav.replace("%%DOCUMENT_TITLE%%", "You are in the intro to loops") + loops + footer;
const nodemonPage = nav.replace("%%DOCUMENT_TITLE%%", "You are in the nodemon intro") + nodemon + footer;  


//End points for the html sides.

//Front page
app.get("/", (req, res) => {
    res.send(frontpagePage); //TODO: Why do we send a res? Dont we send a req ? 
});

//Loops page
app.get("/loops", (req, res) => {
    res.send(loopPage)
});

app.get("/nodemon", (req, res) => {
    res.send(nodemonPage)
});


//Creating a port 3000 to run the project on 
app.listen(3000, () => console.log("Server is running on", 3000));
