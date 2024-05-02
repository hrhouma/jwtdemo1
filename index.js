const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const SECRET = process.env.PASSWORD;
const EXPECTED_USERNAME = 'admin'; // Replace with the desired username

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT} ...`);
});

// Generate JWT Token with username and password
app.post("/user/generateToken", (req, res) => {
    const { username, password } = req.body;

    console.log("Received username:", username); // Debugging
    console.log("Received password:", password);

    // Check if the username and password are correct
    if (username === EXPECTED_USERNAME && password === SECRET) {
        const token = jwt.sign({ username }, SECRET);
        console.log("Generated Token:", token); // Debugging
        res.send(token);
    } else {
        res.status(401).send("Invalid credentials");
    }
});

// Middleware to verify JWT Token
function verifyToken(req, res, next) {
    try {
        const token = req.header('EMAIL');
        if (!token) {
            return res.status(401).send("No token provided");
        }

        const verified = jwt.verify(token, SECRET);
        req.user = verified; // Store the verified data for later use
        next(); // Continue to the next middleware
    } catch (error) {
        console.error("Token Verification Error:", error); // Debugging
        return res.status(401).send("Invalid Token");
    }
}

// Validate JWT Token
app.get("/user/validateToken", verifyToken, (req, res) => {
    console.log("Verified Data:", req.user); // Debugging
    res.send("Successfully Verified");
});

console.log(`Starting server on port ${PORT}`);
