const express = require("express");
const { updateToken } = require("../controllers/tokenCtrl");
const router = express.Router();
const userController = require("../controllers/userCtrl");

const { getDatabase } = require("../handlers/databaseHanlders");
const { getToken } = require("../handlers/tokenHandlers");
const { getPageToken } = require("../handlers/pageHandlers");

router.get(
	"/:email/profile/:id",
	getDatabase,
	getToken,
	getPageToken,
	userController.getProfile,
);
router.get("/:email/me", getDatabase, userController.getUser);
router.get(
	"/:email/accounts",
	getDatabase,
	getToken,
	userController.getAccounts,
);
router.put("/:email/accesstoken", getDatabase, getToken, updateToken);

module.exports = router;
