const { getDb } = require("../utils/database");

exports.getDatabase = async (req, res, next) => {
	req.db = await getDb();
	next();
};
