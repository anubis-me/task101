const express = require("express");
const router = express.Router();
const {	verifyWebhook,addWebhook,sendMessage,} = require("../controllers/messengerCtrl");
const { getDatabase } = require("../handlers/databaseMiddleware");
const { getPageToken } = require("../handlers/pagetokenhandler");
const { getToken } = require("../handlers/tokenhandler");

router.post("/", addWebhook);
router.get("/", verifyWebhook);
router.post(
	"/:email/send_message",
	getDatabase,
	getToken,
	getPageToken,
	sendMessage,
);

module.exports = router;
