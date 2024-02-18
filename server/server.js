require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// Allow CORS requests from your client's origin
app.use(cors());


// Your existing route and server setup

const { OpenAI } = require('openai');

const port = 3000;


// Middleware to parse JSON bodies
app.use(express.json());

// OpenAI API setup
const openai = new OpenAI({
    apiKey: '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',
});

// Endpoint to handle chat messages
// Correct OpenAI SDK usage for chat completions
// Updated Endpoint to handle chat messages
app.post('api/getAIResponse', async (req, res) => {
    try {
        const chatCompletion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{
                role: "user",
                content: req.body.message
            }]
        });
        const lastMessage = chatCompletion.choices[0].message.content;
        res.json({ reply: lastMessage });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error processing AI response');
    }
});



app.get('/', (req, res) => {
    res.send('Welcome to the Chatbot Server');
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
