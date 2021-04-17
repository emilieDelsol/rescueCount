const express = require('express');
const router = express.Router();
const controller = require('./../controllers/rescueCountController');


router.get('/all-reports', controller.getAllReports);
router.post('/addReport', controller.addReport);

module.exports = router;