const express = require("express");
const { updateToken } = require("../controllers/tokenController");
const router = express.Router();
const userController = require("../controllers/userController");

const { getDatabase } = require("../middlewares/databaseMiddleware");
const { getToken } = require("../middlewares/tokenMiddleware");
const { getPageToken } = require("../middlewares/pageTokenMiddleware");

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
