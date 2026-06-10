import "dotenv/config";
import { ChatOpenAI } from "@langchain/openai";
import { z } from "zod";

const model = new ChatOpenAI({
  model: "deepseek-ai/DeepSeek-V4-Pro:novita",
  apiKey: process.env.HF_TOKEN,
  configuration: {
    baseURL: "https://router.huggingface.co/v1",
  },
});

// Structured Output Model
const structuredModel = model.withStructuredOutput(
  z.object({
    name: z.string(),
    age: z.number(),
  })
);


// LLM Call
const result = await structuredModel.invoke(
  "My name is Saurabh and I am 22 years old."
);

console.log(result);