// Install
// npm install @langchain/community @huggingface/inference
// Example


import "dotenv/config";
import { HuggingFaceInferenceEmbeddings } from "@langchain/community/embeddings/hf";

const embeddings = new HuggingFaceInferenceEmbeddings({
  apiKey: process.env.HF_TOKEN,
  model: "sentence-transformers/all-MiniLM-L6-v2",
});

const vector = await embeddings.embedQuery(
  "JavaScript is a programming language"
);

console.log(vector.length);
console.log(vector);
