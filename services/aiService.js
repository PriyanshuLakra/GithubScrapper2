// require('dotenv').config();
// const OpenAI = require('openai');

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY
// });

// // const openai = new OpenAI();
// async function analyzeUserProfile(user) {
//   const prompt = `
// Summarize this GitHub user's profile and infer their main skills, experience level, and technical expertise:

// Username: ${user.username}
// Bio: ${user.bio}
// Location: ${user.location}
// Profile: ${user.profileURL}
// `;

//   const response = await openai.chat.completions.create({
//     model: "gpt-3.5-turbo",
//     messages: [
//       {
//         role: "user",
//         content: prompt,
//       },
//     ],
//   });

//   return response.choices[0].message.content;
// }

// module.exports = { analyzeUserProfile };


// services/aiService.js
require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "models/gemini-pro" }); // 👈 correct path!



exports.analyzeUserProfile = async (user) => {
  const prompt = `
You are an AI assistant. Summarize this GitHub user's profile:

Username: ${user.username}
Bio: ${user.bio || 'No bio available'}
Location: ${user.location || 'Not specified'}
Followers: ${user.followers}
Public Repos: ${user.public_repos}

Generate a short 2-3 line professional summary.
`;

  try {
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (err) {
    console.error("Gemini AI Error:", err);
    return "AI summary not available.";
  }
};
