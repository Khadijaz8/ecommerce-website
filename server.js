require("dotenv").config()

const express = require("express");
const app = express();
const port = 3000;
const jwt = require("jsonwebtoken");

app.use(express.json());

app.listen(port, () => {
    console.log(`We are listening on ${port}`);
});

const posts = [
    {
        emailId: "khadijaijaz2@gmail.com",
        password: "khalid2",
        title: "Post 1"
    },
    {
        emailId: "khadijaijaz1@gmail.com",
        password: "khalid1",
        title: "Post 2"
    }
];

// Protect the posts route with authentication middleware
app.get('/posts', authenticateToken, (req, res) => {
    res.json(posts.filter(post => post.emailId === req.email));
});

// Login route to generate a JWT token
app.post('/login', (req, res) => {
    const { emailId, password } = req.body;
    
    // Create the payload to sign with JWT
    const payload = { email: emailId, password: password };

    // Sign the JWT with the payload and secret
    const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });

    res.json({ accessToken });
});


function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; 
    if (token == null) return res.sendStatus(401); 

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) return res.sendStatus(403); 
       
        req.email = decoded.email;
        next();
    });
}
