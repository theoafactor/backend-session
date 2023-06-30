const express = require("express");
const cors = require("cors");


//create a server app
const server = express();
const PORT = 2323

server.use(cors());

//routes 

// - contact point
server.get("/contact", (request, response) => {
    //
    response.send({
        message: "Contact page loaded",
        data: {
            username: "james",
            firstname: "JAMES"
        }
    });

});


// - home
server.get("/", (request, response) => {

    response.send("This is the home page")

});


// - quotes 
server.get("/quotes", (request, response) => {



})




//make server listen
server.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}`))