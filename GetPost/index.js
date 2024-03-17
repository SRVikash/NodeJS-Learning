// Require the Express module
const express = require("express")

// Create an Express application
const app = express()

// Define the port number
const port = 3000

// Create an empty array to store submitted data
let array_data = []

// Middleware to parse incoming JSON requests
app.use(express.json());

// Initial route
app.get('/', (req, res) => {
    // Send the array_data as response
    res.send("Hello world");
})

// Route to view submitted user data
app.get('/viewuser', (req, res) => {
    // Send the array_data as response
    res.send(array_data);
})

// Route to submit user data
app.post('/submit', (req, res) => {
    // Extract data from the request body
    let data = req.body;
    // Log the received data to console
    console.log(data, "DATA")
    // Push the received data to the array_data array
    array_data.push(data);
    // Send response indicating successful data addition
    res.send("Data added")
})

// Start the server and listen on the defined port
app.listen(port, () => {
    // Log a message indicating that the server is running
    console.log(`Server is running on port ${port}`);
})
