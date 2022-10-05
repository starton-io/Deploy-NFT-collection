const axios = require("axios")

const http = axios.create({
    baseURL: "https://api.starton.io/v2",
    headers: {
        "x-api-key": 'YOUR API KEY',
    },
})
http.post( '/smart-contract/from-template',
 {
        "network": 'polygon-mumbai',
        "name": 'NFT collection test',
        "templateId": 'sct_e851adefe4494fc991207b2c37ed8a83',
        "signerWallet": "YOUR KMS ADDRESS",
        "speed": "low",
        "params": [
            'Bored Burger Yacht Club',
            'BBYC',
            'ipfs://ipfs/',
            'Image CID',
            'YOUR KMS ADDRESS'
        ]

 }).then(response => { console.log(response.data) })