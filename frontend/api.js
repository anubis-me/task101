import axios from "axios";

//connecting from backend

//to get user profile
const fetchProfile = async (email, id) => {
	const res = await axios.get(
		`http://localhost:8000/api/user/${email}/profile/${id}`,
	);
	if (res) return res;
	else return {};
};

//to update the token if expired
const updateToken = async (email, accessToken) => {
	const res = await axios.put(
		`http://localhost:8000/api/user/${email}/accesstoken`,
		{
			accessToken,
		},
	);
	if (res) {
		// console.log("msg", res);
	}
};

//latest account detail
const getAccount = async (email) => {
	const res = await axios.get(
		`http://localhost:8000/api/user/${email}/accounts`,
	);
	if (res) {
		return res;
	}
	return {};
};


//to send the message to backend
const sendMessage = async (email, message, recipientId) => {
	const res = await axios.post(
		`http://localhost:8000/api/webhook/${email}/send_message`,
		{
			recipientId,
			message,
		},
	);
	if (res.status != 200) {
		console.log("Some error occured");
	}
};

export { updateToken, getAccount, fetchProfile, sendMessage };

export const getProfile = async (email) => {
	const res = await axios.get(`http://localhost:8000/api/user/${email}/me`);
	if (res) {
		return res;
	}
	return {};
};
