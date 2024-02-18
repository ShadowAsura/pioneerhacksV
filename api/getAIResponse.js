import { OpenAI } from 'openai';

const openai = new OpenAI({
    apiKey: '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',
});

export default async function(req, res) {
    if (req.method === 'POST') {
        try {
            const chatCompletion = await openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: [{
                    role: "user",
                    content: req.body.message
                }]
            });
            const lastMessage = chatCompletion.choices[0].message.content;
            res.status(200).json({ reply: lastMessage });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error processing AI response');
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
