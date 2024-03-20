const express = require('express');
const router = express.Router();
const UserController = require('../controllers/usercontroller');

router.get('/all', UserController.getAllEmployees);
router.put('/updateEmail/:employeeId', UserController.updateEmployeeEmail);
router.put('/updateDetails/:employeeId', UserController.updateEmployeeDetails);
router.put('/updateStatus/:employeeId', UserController.updateEmployeeStatus); // Add this line for updating status

module.exports = router;
