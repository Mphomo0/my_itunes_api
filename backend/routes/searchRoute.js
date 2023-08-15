const express = require('express')
const router = express.Router(); // Create an instance of an Express router

const { searchController } = require('../controllers/searchController'); // Import the searchController from the controllers folder

// Define a route handler for the root path ("/"). When a GET request is made to this path, the searchController function will be invoked.
router.get("/", searchController);

module.exports = router; // Export the router so it can be used in other parts of the application
