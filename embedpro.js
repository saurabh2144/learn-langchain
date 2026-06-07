import { HuggingFaceTransformersEmbeddings } from "@langchain/community/embeddings/hf_transformers";
import { MemoryVectorStore } from "langchain/vectorstores/memory";

const embeddings = new HuggingFaceTransformersEmbeddings({
  model: "Xenova/all-MiniLM-L6-v2",
});

const docs = [
  "Delhi is the capital of India",
  "Paris is the capital of France",
  "Tokyo is the capital of Japan",
];

const vectorStore = await MemoryVectorStore.fromTexts(
  docs,
  [{}],
  embeddings
);

//yaha vector store bananne  se ye khud hi docs ko vector me convert karega
//fir khud hi save bhi karega khud me 
//similaritysearch naam ka method b deta hai jisme 
//similaritySearch(query, 1) dena hota hai 
//query ko b same vector me convert save  match sab khud karta hai
//1 yaha represent kar rha top 1 search 2 rakh denge to 2 result aa jayega top wala
//aur convert b karta hai llm se result ko dikhane ke liye 



const result = await vectorStore.similaritySearch(
  "What is the capital of India?",
  1
);

console.log(result[0].pageContent);