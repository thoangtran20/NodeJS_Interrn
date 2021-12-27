const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.use('/:slug', courseController.show);
router.use('/', courseController.index);

module.exports = router;
