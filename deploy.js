const axios = require("axios")

const axiosInstance = axios.create({
	baseURL: "https://api.starton.io",
	headers: {
		"x-api-key": "YOUR_API_KEY",
	},
})

axiosInstance.post(
	"/v3/smart-contract/from-template",
	{
		network: "polygon-mumbai",
		signerWallet: "WALLET",  // The Wallet that will pay for the gaz fees
		templateId: "ERC721_META_TRANSACTION",  //Smart contract template ID
		name: "PROJECT_NAME",
		description: "PROJECT_DESCRIPTION",
		params: [
			"SMART_CONTRACT_NAME",
			"SYMBOL",
			"ipfs://ipfs/",
			"FILE_CID",
			"OWNER_WALLET"
		],
		speed: "average"
	}
).then((response) => {
	console.log(response.data)
})