const express = require("express");

// Define the searchController function, which takes in a request (req) and a response (res) object.
exports.searchController = (req, res) => {
    // Fetch data from the iTunes Search API using the provided query parameters.
    fetch(
        `http://localhost:3001/search?term=${req.params.name}&limit=30&entity=${req.params.type}`
    )
    .then((response) => response.json()) // Convert the response to JSON
    .then((results) => {
        // Send the fetched results as the response.
        res.send(results);
    })
    .catch((error) => {
        // Handle any errors that occur during the fetch or processing.
        console.error("Error fetching data:", error);
        res.status(500).send("An error occurred while fetching data.");
    });
};
