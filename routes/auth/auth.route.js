const express = require('express');
const router = express.Router();

const auth_controller = require('../../controllers/auth/auth.controller');

router.post('/signup-partners', auth_controller.auth_signup_partners);

router.post('/signup-customers', auth_controller.auth_signup_customers);

router.post('/signin', auth_controller.auth_signin);

router.put('/:email/change-password-partners', auth_controller.auth_change_password_partners);

router.put('/:email/change-password-customers', auth_controller.auth_change_password_customers);

module.exports = router;