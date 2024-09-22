const express = require('express');
const userController = require('../controllers/userController');
const isAuthenticated = require('../middleware/isAuthenticated');
const router = express.Router();

// router.get('/main', isAuthenticated, userController.getMainPage);

// Routes
router.get('/login', userController.getLoginPage);
router.get('/register', userController.getRegisterPage);
// router.get('/reminder', userController.getReminderPage);
router.get('/main', userController.getMainPage);

router.get('*', userController.get404Page);

module.exports = router;
