const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes/searchRoute"); // Importing route handlers from searchRoute.js
const helmet = require("helmet");

const PORT = process.env.PORT || 3001; // Define the port for the server to listen on

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded request bodies
app.use(bodyParser.json()); // Parse JSON request bodies

// Enable CORS middleware to handle cross-origin requests
app.use(cors());

// Enable Helmet middleware for enhanced security (CSP is disabled due to inline script errors)
app.use(helmet({
  contentSecurityPolicy: false,
}));

app.use(express.json()); // Parse JSON request bodies

// Set up routes from the searchRoute.js file under the /search path
app.use("/search", routes);

const path = require("path");
// Serve static files from the "frontend/build" directory in production mode
if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build")); // Serve static files from the "frontend/build" directory
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html")); // Serve the index.html file for all routes
  });
}

// Start the server and listen on the specified port
app.listen(PORT);
console.log("Server is listening on port", PORT);

// Error handling middleware: if an error occurs during request processing, log the error and send a 500 response
app.use(function (err, req, res, next) {
  console.log(err.stack);

  // Respond with JSON format
  res.status(500).json({ error: "Something broke!" });
});