const express = require('express');
const router = express.Router();

const EventsCtrl = require('../controllers/events');

router.get('', EventsCtrl.getEvents);
router.get('/:id', EventsCtrl.getEventById);

module.exports = router;
