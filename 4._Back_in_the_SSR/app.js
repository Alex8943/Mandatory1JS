const express = require("express");
const app = express();

app.use(express.static("public"));

const fs = require("fs");
//Making nav and footer html readable by making it to a string. The same goes for the other html files. 
const nav = fs.readFileSync("./public/components/nav.html").toString();
const footer = fs.readFileSync("./public/components/footer.html").toString();
const frontpage = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString();
const packagejson = fs.readFileSync("./public/pages/types/packageJson.html").toString(); 
const nodemon = fs.readFileSync("./public/pages/types/nodemon.html").toString(); 
const ssr = fs.readFileSync("./public/pages/types/SSR.html").toString(); 
const introduction = fs.readFileSync("./public/pages/types/introduction.html").toString();
const es = fs.readFileSync("./public/pages/types/express.html").toString();
const callBack = fs.readFileSync("./public/pages/types/callbackFunctions.html").toString();

//Making these objects will it make it usefull, to send a request to the client. And get a respond t 
const frontpagePage = nav.replace("%%DOCUMENT_TITLE%%", "Welcome to all type of js. learning goals") + frontpage + footer;
const packageJson = nav.replace("%%DOCUMENT_TITLE%%", "You are in the intro to loops") + packagejson + footer;
const nodemonPage = nav.replace("%%DOCUMENT_TITLE%%", "You are in the nodemon intro") + nodemon + footer;
const ssrPage = nav.replace("%%DOCUMENT_TITLE%%", "you are in the ssr intro") + ssr + footer;
const introductionPage = nav.replace("%%DOCUMENT_TITLE%%", "You are in the introduction file") + introduction + footer; 
const expressPage = nav.replace("%%DOCUMENT_TITLE%%", "You are in the express intro") + es + footer; 
const callbackFunctionPage = nav.replace("%%DOCUMENT_TITLE%%", "you are in the callback intro") + callBack + footer; 


//End points for the html sides.

//Front page
app.get("/", (req, res) => {
    res.send(frontpagePage); //TODO: Why do we send a res? Dont we send a req ? 
});

//Loops page
app.get("/packageJson", (req, res) => {
    res.send(packageJson)
});

app.get("/nodemon", (req, res) => {
    res.send(nodemonPage)
});

app.get("/ssr", (req, res) => {
    res.send(ssrPage)
});


app.get("/introduction", (req, res) => {
    res.send(introductionPage)
});

app.get("/express", (req, res) => {
    res.send(expressPage)
});

app.get("/callback", (req, res) => {
    res.send(callbackFunctionPage)
});

//Creating a port 3000 to run the project on 
app.listen(3000, () => console.log("Server is running on", 3000));
