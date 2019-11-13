var express=require('express');
var router = express.Router();
var employeeController = require('../controllers/employeecontrollers');
 
router.get('/read',employeeController.getALLEmployee);

module.exports=router;