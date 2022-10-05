 const axios = require("axios")

const http = axios.create({
    baseURL: "https://api.starton.io/v2",
    headers: {
        "x-api-key": 'YOUR API KEY',
    },
})
http.post('/smart-contract/polygon-mumbai/0x8A7b7DE8fDbB9652A820FCc85c3dA3b1D9986FE7/call',
    {
        "functionName": 'safeMint(address,string)',
        "signerWallet": 'YOUR KMS ADDRESS',
        "speed": "low",
        "params": [
            'RECEIVER ADDRESS',
            'IMAGE CID'
        ],

    }).then(response => { console.log(response.data) })