require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const axios = require('axios');


const PORT = 8000;


// Line for getting general API request to a Generic Page with Generic Data
app.get("/api/home", (req, res) => {
    res.json({ message: "Like this video", people: ["Harry", "Jack", "Barry"] });
});



// Create API endpoint for Open AI - This is to CREATE A RUN/THREAD for Premade assistant USER PROFILE
app.get("/api/openai", (req, res) => {
    let data = JSON.stringify({
        "assistant_id": "asst_sTRPZRRmHRIptylbwXhpJy8d",
        "thread": {
            "messages": [
                {
                    "role": "user",
                    "content": "summarize the data from the company websites and recent meetings to create a sales followup"
                }
            ]
        }
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://api.openai.com/v1/threads/runs',
        headers: { 
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`, // Replace with your actual API key
            'OpenAI-Beta': 'assistants=v1', 
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios.request(config)
        .then((response) => {
            res.json(response.data);
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send("Error occurred while fetching data from OpenAI");
        });
});


// THIS IS FOR REPORTING THAT THE SERVER IS RUNNING
app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});
