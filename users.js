const express = require('express');
const router = express.Router();
router.get('/', (req,res) => {
    res.send('Hello World from user');
});


router.get('/about', (req,res) => {
    res.send('About Page');
});

module.exports = router;