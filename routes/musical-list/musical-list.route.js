const express = require('express');
const router = express.Router();

const musical_list_controller = require('../../controllers/musical-list/musical-list.controller');

router.get('/list/:typeuser', musical_list_controller.musical_list_all);

router.get('/email/:email', musical_list_controller.musical_list_email);

module.exports = router;