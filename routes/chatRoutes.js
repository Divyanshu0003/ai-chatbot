const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { chat } = require('../controllers/chatController');

router.post('/message', auth, chat);

module.exports = router;
