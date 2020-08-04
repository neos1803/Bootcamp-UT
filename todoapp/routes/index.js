var express = require('express');
var router = express.Router();
const TaskController = require("../controllers/TaskController");

/* GET home page. */
router.get('/', TaskController.read);

module.exports = router;
