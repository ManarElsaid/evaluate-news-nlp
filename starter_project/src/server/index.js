var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('dist'));

console.log(__dirname);

// Variables for url and api key
const baseUrl = "https://api.meaningcloud.com/sentiment-2.1";
const apiKey = process.env.API_KEY;

if (!apiKey) {
    console.error("API_KEY is not defined in the .env file");
    process.exit(1);
}


app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
});




// POST Route
app.post('/analyze', async (req, res) => {
    console.log(req.body);
    const userUrl = req.body.url;

    // analyze the article
    const response = await fetch(`${baseUrl}?key=${apiKey}&url=${userUrl}&lang=en`);

    try {
        const data = await response.json();
        console.log("API response:", data);
        res.send(data);
    } catch(error) {
        console.log(`Error: ${error}`);
    }

})

// function to analyze the news
// const analyzeData = async (baseUrl = '', key, userUrl = '') => {
//     const res = await fetch(`${baseURL}?key=${apiKey}&url=${url}&lang=en`);

//     try {
//         const data = await res.json();
//         return data;
//     } catch(error) {
//         console.log(`Error: ${error}`);
//     }
// };

// Designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!');
});
