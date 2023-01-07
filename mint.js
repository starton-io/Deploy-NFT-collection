const axios = require("axios")

const axiosInstance = axios.create({
	baseURL: "https://api.starton.io",
	headers: {
		"x-api-key": "YOUR_API_KEY",
	},
})

axiosInstance.post(
	"/v3/smart-contract/polygon-mumbai/SMART_CONTRACT_ADDRESS/call",
	{
		functionName: "mint(address,string)",
		params: [
			"RECIPIENT_ADDRESS",
			"FILE_CID"
		],
		signerWallet: "SMART_CONTRACT_OWNER_WALLET",
		speed: "average"
	}
).then((response) => {
	console.log(response.data)
})