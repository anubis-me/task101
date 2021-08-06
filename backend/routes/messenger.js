const express = require("express");
const router = express.Router();
const {	verifyWebhook,addWebhook,sendMessage,} = require("../controllers/messengerCtrl");
const { getDatabase } = require("../handlers/databaseHandlers");
const { getPageToken } = require("../handlers/pageHandlers");
const { getToken } = require("../handlers/tokenHandlers");

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
