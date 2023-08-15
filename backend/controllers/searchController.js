const express = require("express");
const axios = require("axios");

// Define the searchController function, which takes in a request (req) and a response (res) object.
exports.searchController = (req, res) => {
    // Use Axios to fetch data from the iTunes Search API using the provided query parameters.
    axios.get(`https://itunes.apple.com/search`, {
        params: {
            term: req.query.name,
            limit: 30,
            entity: req.query.type
        }
    })
    .then((response) => {
        // Send the fetched results as the response.
        res.send(response.data);
    })
    .catch((error) => {
        // Handle any errors that occur during the fetch or processing.
        console.error("Error fetching data:", error);
        res.status(500).send("An error occurred while fetching data.");
    });
};
