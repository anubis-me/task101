const express = require("express");
const router  = express.Router();

const clientRouter    = require("./client");
const messengerRouter = require("./messenger");

router.use("/ping", (req, res) => {
	res.status(200).send({ msg: "Server has started and is running" });
});

router.use("/client", clientRouter);
router.use("/messenger", messengerRouter);

module.exports = router;
