import { HuggingFaceTransformersEmbeddings } from "@langchain/community/embeddings/hf_transformers";

const embeddings = new HuggingFaceTransformersEmbeddings({
  model: "Xenova/all-MiniLM-L6-v2",
});

const text = "Delhi is the capital of India";

const vector = await embeddings.embedQuery(text);

console.log("Length:", vector.length);
console.log(vector.slice(0, 5));


// Multiple texts embed karo
// const vectors = await embeddings.embedDocuments([
//   "Delhi is the capital of India",
//   "Paris is the capital of France",
//   "Tokyo is the capital of Japan"
// ]);

// console.log(vectors.length);     // 3
// console.log(vectors[0].length);  // 384