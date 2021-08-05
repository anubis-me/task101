const express = require("express");
const cors = require("cors");
const { mongoConnect } = require("./utils/database");
const router = require("./routes/router");
const io = require("./utils/sockets");

require("dotenv").config({
	path: `${__dirname}/.env`,
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api", router);

mongoConnect((client) => {
	const serv = app.listen(process.env.PORT || 4000, (err) => {
		if (err) {
			console.log(err);
			process.exit(0);
		}

		io.attach(serv, {
			cors: {
				origin: "http://localhost:3000",
				methods: ["GET", "POST"],
			},
		});

		console.log("Server is Listening at Port:4000!");
	});
});
