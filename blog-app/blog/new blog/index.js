import express from "express";
const app = express();
const port = 3005;

app.get("/", (req, res) => {
    res.send('<h1>Home Page</h1>');
});

app.get("/about", (req, res) => {
    res.send('<h1>About me</h1><p>My name is Chad</p>');
});

app.get("/contact", (req, res) => {
    res.send('<h1>Contact Us</h1>');
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});