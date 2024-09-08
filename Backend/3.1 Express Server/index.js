import express from 'express';
const app = express();
const port = 3001;

console.log("Starting server setup...");

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, (err) => {
    if (err) {
        return console.error('Failed to start server:', err);
    }
    console.log(`Server running on port ${port}.`);
});

console.log("Server setup complete.");
