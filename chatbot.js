import "dotenv/config";
import promptSync from "prompt-sync";
import { ChatOpenAI } from "@langchain/openai";

const prompt = promptSync();

const model = new ChatOpenAI({
  model: "deepseek-ai/DeepSeek-V4-Pro:novita",
  apiKey: process.env.HF_TOKEN,
  configuration: {
    baseURL: "https://router.huggingface.co/v1",
  },
});


const chat_history = [];

while (true) {
  const question = prompt("You: ");

  if (question.toLowerCase() === "exit") {
    console.log("Bye 👋");
    break;
  }

  const response = await model.invoke(`give response of this in pure Json format like {questionasked: '' ,response :''} ${question}`);

  // Save conversation
  chat_history.push(`user: ${question}`);
  chat_history.push(`AI: ${response.content}`);

  // Keep only last 5 conversations
  while (chat_history.length > 10) {
    chat_history.shift();
  }

  console.log("\nAI:", response.content);

  console.log("\nLast 5 Conversations:");
  console.log(chat_history);
  console.log("\n--------------------\n");
}