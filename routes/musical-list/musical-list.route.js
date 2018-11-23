const express = require('express');
const router = express.Router();

const musical_list_controller = require('../../controllers/musical-list/musical-list.controller');

// router.get('/:id', meeting_room_controller.meeting_room_details);

router.get('/list/:typeuser', musical_list_controller.musical_list_all);

// router.get('/list/:init/:end', meeting_room_controller.meeting_room_meetings);

// router.post('/create', meeting_room_controller.meeting_room_create);

// router.put('/:id/update', meeting_room_controller.meeting_room_update);

// router.delete('/:id/delete', meeting_room_controller.meeting_room_delete);

// router.delete('/deleteAll', meeting_room_controller.meeting_room_deleteAll);

module.exports = router;