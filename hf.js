import "dotenv/config";
import { ChatOpenAI } from "@langchain/openai";

const model = new ChatOpenAI({
  model: "deepseek-ai/DeepSeek-V4-Pro:novita",
  apiKey: process.env.HF_TOKEN,
  configuration: {
    baseURL: "https://router.huggingface.co/v1",
  },
});


const response = await model.invoke("What is the capital of France?");

console.log(response.content);