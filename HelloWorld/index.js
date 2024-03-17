// Importing the Express library
const express = require('express');

// Creating an instance of the Express application
const app = express();

// Setting the port number
const port = 3000;

// Setting up a route to respond with "Hello World!" for requests to the root URL (/)
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Starting the server to listen for connections on the specified port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
