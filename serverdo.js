// server.js
const express = require("express");
const jwt = require("jsonwebtoken");

// The secret should be an unguessable long string (you can use a password generator for this!)
//const JWT_SECRET =  "goK!pusp6ThEdURUtRenOwUhAsWUCLheBazl!uJLPlS8EbreWLdrupIwabRAsiBu";

const app = express();
app.use(express.json());

const dotenv = require('dotenv');

// get config vars
dotenv.config();

// access config var
process.env.TOKEN_SECRET = "goK!pusp6ThEdURUtRenOwUhAsWUCLheBazl!uJLPlS8EbreWLdrupIwabRAsiBu";




// app.post("/login", (req, res) => {
//     const { username, password } = req.body;
//     console.log(`${username} is trying to login ..`);

//     if (username === "admin" && password === "admin") {
//         return res.json({
//             token: jsonwebtoken.sign({ user: "admin" }, JWT_SECRET),
//         });
//     }

//     return res
//         .status(401)
//         .json({ message: "The username and password your provided are invalid" });
// });

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    debugger;
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.TOKEN_SECRET , (err, user) => {
        console.log(err)
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}

app.post("/login", (req, res) => {
    const { username, password } = req.body;
    console.log(`${username} is trying to login ..`);

    if (username === "admin" && password === "admin") {
        return res.json({
            token: jwt.sign({ user: "admin" }, process.env.TOKEN_SECRET, { expiresIn: '1600s' } ),
        });
    }

    return res
        .status(401)
        .json({ message: "The username and password your provided are invalid" });
});





app.get("/super-secure-resource", authenticateToken, (req, res) => {
    res
        // .status(401)
        // .json({ message: "You need to be logged in to access this resource" });
         .status(200)
        .json({ message: "Heyah!!!! Sukces" });
});





app.listen(3001, () => {
    console.log("API running on localhost:3001");
});