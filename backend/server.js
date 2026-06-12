const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { GoogleGenAI } = require('@google/genai');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Gemini API
let ai;
if (process.env.GEMINI_API_KEY) {
  ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
} else {
  console.warn("⚠️ GEMINI_API_KEY is not set in .env. The chatbot will use mock responses.");
}

// System Prompt for the AI
const SYSTEM_PROMPT = `
You are the Cartify AI Assistant, a friendly and professional customer support bot for an e-commerce SaaS platform called Cartify. 
Cartify helps merchants build premium, Shopify-style online stores quickly and easily. 

Your goals:
- Answer questions about Cartify's features (Store Builder, Analytics, Integrations, Pricing).
- Be polite, concise, and helpful.
- Keep your answers short (2-3 sentences max) unless a detailed explanation is specifically requested.
- Format responses nicely (you can use emojis).
- If you don't know the answer, politely say you can connect them with human support.
`;

app.post('/chat', async (req, res) => {
  const { message, history } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  // Use mock response if no API key is provided
  if (!ai) {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    return res.json({ 
      reply: `[MOCK MODE] I am the Cartify AI. You said: "${message}". Please set your GEMINI_API_KEY in the backend/.env file to enable real AI responses!` 
    });
  }

  try {
    // Format history for Gemini API
    const formattedHistory = (history || []).map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.text }]
    }));

    // Add current message to history
    formattedHistory.push({
      role: 'user',
      parts: [{ text: message }]
    });

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: formattedHistory,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.7,
      }
    });

    const reply = response.text;
    res.json({ reply });

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    res.status(500).json({ error: "Failed to generate AI response. Please try again later." });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Cartify AI Backend running on http://localhost:${PORT}`);
  if (!process.env.GEMINI_API_KEY) {
    console.log(`⚠️  Running in MOCK mode. Add GEMINI_API_KEY to .env to enable AI.`);
  }
});
