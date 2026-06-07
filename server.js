import "dotenv/config";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(__dirname));

const model = new ChatGoogleGenerativeAI({
  modelName: "gemini-1.5-pro",
  apiKey: process.env.GOOGLE_API_KEY,
});



app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;
    console.log("User message:", message);
    
    const response = await model.invoke(message);
    console.log("Bot reply:", response.content.substring(0, 50) + "...");
    
    res.json({ reply: response.content });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Kuch galat ho gaya!" });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server chal raha hai: http://localhost:${PORT}`);
});
