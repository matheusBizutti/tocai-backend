const express = require('express');
const router = express.Router();

const profile_controller = require('../../controllers/profile/profile.controller');

router.put('/:email/change-personal-data-partners', profile_controller.profile_partners_change_personal_data);

router.put('/:email/change-personal-data-customers', profile_controller.profile_customers_change_personal_data);

module.exports = router;