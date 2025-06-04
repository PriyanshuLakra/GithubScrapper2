const express = require('express');
const { scrapeAndAnalyze } = require('../controllers/githubController');

const router = express.Router();

router.get('/scrape', scrapeAndAnalyze);

module.exports = router;
