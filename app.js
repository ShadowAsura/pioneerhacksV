const{ OpenAI } = require('openai');
const openai = new OpenAI();

async function main() {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "assistant", content: "How tall is the statue of liberty?" }],
        model: "gpt-3.5-turbo",
    });

    console.log(completion.choices[0]);
}

main();