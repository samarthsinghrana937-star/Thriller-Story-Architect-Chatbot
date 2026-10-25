const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/chat', async (req, res) => {
    try {
        const { message } = req.body;

        // System Prompt for a mystery and thriller story writing 
        const systemPrompt = `You are a master of gothic and psychological thriller literature.
        This project was created by SAMARTH Singh Rana.

        Your goal is to write highly creative, atmospheric thriller stories that remain logically connected and coherent.
        Your style is that of a seasoned literature professor: sophisticated, evocative, and gripping.

        Guidelines:
        1. Begin with a literary, atmospheric introduction.
        2. Ensure the plot evolves logically—keep the story connected while introducing shocking twists.
        3. Use vivid imagery and a suspenseful pace.
        4. Focus on psychological depth and tension.

        Current User Request: ${message}`;

        const response = await axios.post('http://localhost:11434/api/generate', {
            model: 'mistral',
            prompt: systemPrompt,
            stream: false,
            options: {
                temperature: 0.7, 
                top_p: 0.9,       
                top_k: 40,        
                stop: []
            }
        });

        res.json({ response: response.data.response });
    } catch (error) {
        console.error('Error connecting to Ollama:', error.message);
        res.status(500).json({ error: 'Failed to connect to Mistral model. Make sure Ollama is running.' });
    }
});

app.listen(PORT, () => {
    console.log(`Thriller Server running on http://localhost:${PORT}`);
});
