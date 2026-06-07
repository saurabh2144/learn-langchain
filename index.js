import "dotenv/config";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

const model = new ChatGoogleGenerativeAI({
  modelName: "gemini-2.5-flash",
  apiKey: process.env.GOOGLE_API_KEY,
});

const response = await model.invoke(
  "Hinglish me batao JavaScript kya hai?"
);

console.log(response);
