const io = require("socket.io")();
const client = require("./redis");

io.on("connection", (socket) => {
	console.log("connected", socket.id);
	socket.on("/init", (data) => {
		console.log(data);
		client.set(data.pageId, socket.id);
	});
	socket.on("disconnect", () => {
		console.log("socket Disconnected", socket.id);
	});
});

// io.on("disconnect", (socket) => {
// 	console.log("disconnect", socket.id);
// });

module.exports = io;
