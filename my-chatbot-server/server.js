require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// Allow CORS requests from your client's origin
app.use(cors({ origin: 'http://localhost:8080' }));

// Your existing route and server setup

const { OpenAI } = require('openai');

const port = 3000;
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});


// Middleware to parse JSON bodies
app.use(express.json());

// OpenAI API setup
const openai = new OpenAI({
    apiKey: process.env['OPENAI_API_KEY'],
});

// Endpoint to handle chat messages
app.post('/getAIResponse', async (req, res) => {
    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: req.body.message,
            max_tokens: 150,
        });
        res.json({ reply: response.data.choices[0].text.trim() });
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
