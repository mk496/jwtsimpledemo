// server.js
const express = require("express");
const jsonwebtoken = require("jsonwebtoken");

// The secret should be an unguessable long string (you can use a password generator for this!)
const JWT_SECRET =  "goK!pusp6ThEdURUtRenOwUhAsWUCLheBazl!uJLPlS8EbreWLdrupIwabRAsiBu";

const app = express();
app.use(express.json());

app.post("/login", (req, res) => {
    const { username, password } = req.body;
    console.log(`${username} is trying to login ..`);

    if (username === "admin" && password === "admin") {
        return res.json({
            token: jsonwebtoken.sign({ user: "admin" }, JWT_SECRET),
        });
    }

    return res
        .status(401)
        .json({ message: "The username and password your provided are invalid" });
});

app.get("/super-secure-resource", (req, res) => {
    res
        // .status(401)
        // .json({ message: "You need to be logged in to access this resource" });
         .status(200)
        .json({ message: "Heyah!!!! Sukces" });
});





app.listen(3001, () => {
    console.log("API running on localhost:3001");
});