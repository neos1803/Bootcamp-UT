var express = require('express');
var router = express.Router();
const TaskController = require("../controllers/TaskController")
const multer = require("multer");
const path = require('path')

// Set Storage
const storage = multer.diskStorage({
  destination : (req, file, cb) => {
      cb(null, '../todoapp/public/images')
  },
  filename: (req, file, cb) => {
      cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({ storage })

/* GET users listing. */
router.post('/add', [upload.single('images'), TaskController.add]);
router.get('/edit/:id', TaskController.find);
router.post('/edit/:id', [upload.single('images'), TaskController.update]);
router.put('/update/:id/:status', TaskController.doneUndone);
router.delete('/:id', TaskController.destroy)

module.exports = router;