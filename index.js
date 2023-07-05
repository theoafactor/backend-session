const express = require("express");
const mongodb = require("mongodb");
require("dotenv").config();

const cors = require("cors");

const mongoClient = new mongodb.MongoClient(process.env.DB_URL)


//create a server app
const server = express();
const PORT = process.env.PORT;

server.use(cors());

//allow server read JSON data
server.use(express.json());

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


//login endpoint
server.post("/login", (request, response) => {

    // check that the login details are correct


})


server.post("/register", async function(request, response){

    //register a new user
    if(request.body.username && request.body.password){
        let username = request.body.username;
        let password = request.body.password;

        if(username.trim().length === 0 || password.trim().length === 0){
            //no username or password was provided 
            return response.send({
                message: "Please provide username and password",
                code: "error",
                data: null
            });
        }

            //proceed to registering the user
            try{
                const feedback = await mongoClient.db(process.env.DB_NAME).collection("users").insertOne({ username, password });
                if(feedback){
                    return response.send({
                        message: "Account created successfuly!",
                        code: "success",
                        data: {
                            username,
                            token: 123456
                        }
                    })
                }
            }catch(error){
                console.error(error)
            }

           

    }

    return response.send({
        message: "Invalid data passed. Provide Username and Password",
        code: "error",
        data: null
    });


  


 
});




//make server listen
server.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}`))