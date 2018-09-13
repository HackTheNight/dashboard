const express = require('express');

const router = express.Router();

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', (req, res) => res.send('Message'));

module.exports = router;
