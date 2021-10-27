const express = require('express');
const router = express.Router();

const EventsCtrl = require('../controllers/events');
const AuthCtrl = require('../controllers/auth')

router.get('', EventsCtrl.getEvents);
router.get('/secret', AuthCtrl.onlyAuthUser, EventsCtrl.getSecret);

router.get('/:id', EventsCtrl.getEventById);

module.exports = router;
