const express = require('express');
const router = express.Router();

const authcontrollers = require('../controllers/authControllers');

router.route('/signin').post(authcontrollers.singin);
router.route('/register').post(authcontrollers.register);



module.exports = router;

