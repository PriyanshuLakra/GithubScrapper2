require('dotenv').config();
const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// const openai = new OpenAI();
async function analyzeUserProfile(user) {
  const prompt = `
Summarize this GitHub user's profile and infer their main skills, experience level, and technical expertise:

Username: ${user.username}
Bio: ${user.bio}
Location: ${user.location}
Profile: ${user.profileURL}
`;

    try{

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "user",
                    content: prompt,
                },
            ],
        });
    }catch(err){
        console.error("Open AI Error:", err);
        return "AI summary not available.";
    }

  return response.choices[0].message.content;
}

module.exports = { analyzeUserProfile };


