// ==========================================
// LangChain.js Learning File
// ==========================================
// Uncomment sections one by one to learn and practice
// Remember to install: npm install langchain @langchain/google-genai @langchain/community dotenv

// ==========================================
// 1. BASIC IMPORTS
// ==========================================

import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence } from "@langchain/core/runnables";
import dotenv from "dotenv";

dotenv.config();

// ==========================================
// 2. SIMPLE CHAT MODEL USAGE
// ==========================================

const model = new ChatGoogleGenerativeAI({
  modelName: "gemini-pro",
  temperature: 0.7,
  apiKey: process.env.GOOGLE_API_KEY,
});

const response = await model.invoke("Hello! What is LangChain?");
console.log(response.content);

// ==========================================
// 3. USING MESSAGES
// ==========================================

// const messages = [
//   new SystemMessage("You are a helpful AI assistant who explains concepts simply."),
//   new HumanMessage("What is machine learning?"),
// ];

// const response = await model.invoke(messages);
// console.log(response.content);

// ==========================================
// 4. PROMPT TEMPLATES
// ==========================================

// const promptTemplate = ChatPromptTemplate.fromMessages([
//   ["system", "You are a {role} who speaks in a {style} manner."],
//   ["human", "{input}"],
// ]);

// const formattedPrompt = await promptTemplate.invoke({
//   role: "teacher",
//   style: "friendly and encouraging",
//   input: "Explain what a variable is in programming",
// });

// const response = await model.invoke(formattedPrompt);
// console.log(response.content);

// ==========================================
// 5. CHAINS - COMBINING COMPONENTS
// ==========================================

// const chain = promptTemplate.pipe(model).pipe(new StringOutputParser());

// const result = await chain.invoke({
//   role: "expert programmer",
//   style: "concise",
//   input: "What is async/await in JavaScript?",
// });

// console.log(result);

// ==========================================
// 6. OUTPUT PARSERS
// ==========================================

// import { StructuredOutputParser } from "langchain/output_parsers";
// import { z } from "zod";

// const parser = StructuredOutputParser.fromZodSchema(
//   z.object({
//     name: z.string().describe("Name of the programming language"),
//     yearCreated: z.number().describe("Year the language was created"),
//     mainUse: z.string().describe("Primary use case"),
//   })
// );

// const formatInstructions = parser.getFormatInstructions();

// const prompt = ChatPromptTemplate.fromTemplate(
//   "Extract information about the programming language.\n{format_instructions}\n{query}"
// );

// const chain = prompt.pipe(model).pipe(parser);

// const response = await chain.invoke({
//   query: "JavaScript was created in 1995 and is mainly used for web development",
//   format_instructions: formatInstructions,
// });

// console.log(response);

// ==========================================
// 7. DOCUMENT LOADERS
// ==========================================

// import { TextLoader } from "langchain/document_loaders/fs/text";
// import { PDFLoader } from "langchain/document_loaders/fs/pdf";
// import { CSVLoader } from "langchain/document_loaders/fs/csv";

// // Load text file
// const textLoader = new TextLoader("./example.txt");
// const docs = await textLoader.load();
// console.log(docs);

// // Load PDF
// const pdfLoader = new PDFLoader("./example.pdf");
// const pdfDocs = await pdfLoader.load();
// console.log(pdfDocs);

// // Load CSV
// const csvLoader = new CSVLoader("./example.csv");
// const csvDocs = await csvLoader.load();
// console.log(csvDocs);

// ==========================================
// 8. TEXT SPLITTERS
// ==========================================

// import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

// const text = `Your long text here...`;

// const splitter = new RecursiveCharacterTextSplitter({
//   chunkSize: 1000,
//   chunkOverlap: 200,
// });

// const chunks = await splitter.createDocuments([text]);
// console.log(chunks.length);
// console.log(chunks[0]);

// ==========================================
// 9. EMBEDDINGS
// ==========================================

// import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";

// const embeddings = new GoogleGenerativeAIEmbeddings({
//   apiKey: process.env.GOOGLE_API_KEY,
//   modelName: "embedding-001",
// });

// const vector = await embeddings.embedQuery("Hello world");
// console.log(vector.slice(0, 5)); // Show first 5 dimensions

// const docVectors = await embeddings.embedDocuments([
//   "Document 1",
//   "Document 2",
// ]);
// console.log(docVectors.length);

// ==========================================
// 10. VECTOR STORES
// ==========================================

// import { MemoryVectorStore } from "langchain/vectorstores/memory";

// const vectorStore = await MemoryVectorStore.fromTexts(
//   [
//     "LangChain is a framework for developing applications powered by language models",
//     "JavaScript is a programming language",
//     "Python is popular for machine learning",
//   ],
//   [{ id: 1 }, { id: 2 }, { id: 3 }],
//   new GoogleGenerativeAIEmbeddings({ apiKey: process.env.GOOGLE_API_KEY })
// );

// const results = await vectorStore.similaritySearch("What is LangChain?", 2);
// console.log(results);

// ==========================================
// 11. RETRIEVAL QA CHAIN
// ==========================================

// import { RetrievalQAChain } from "langchain/chains";

// const chain = RetrievalQAChain.fromLLM(
//   model,
//   vectorStore.asRetriever()
// );

// const response = await chain.call({
//   query: "What is LangChain?",
// });

// console.log(response.text);

// ==========================================
// 12. CONVERSATIONAL CHAIN WITH MEMORY
// ==========================================

// import { ConversationChain } from "langchain/chains";
// import { BufferMemory } from "langchain/memory";

// const memory = new BufferMemory();

// const conversationChain = new ConversationChain({
//   llm: model,
//   memory: memory,
// });

// const response1 = await conversationChain.call({
//   input: "Hi! My name is Raj.",
// });
// console.log(response1.response);

// const response2 = await conversationChain.call({
//   input: "What is my name?",
// });
// console.log(response2.response);

// ==========================================
// 13. AGENTS
// ==========================================

// import { initializeAgentExecutorWithOptions } from "langchain/agents";
// import { Calculator } from "langchain/tools/calculator";
// import { SerpAPI } from "@langchain/community/tools/serpapi";

// const tools = [
//   new Calculator(),
//   new SerpAPI(process.env.SERPAPI_API_KEY),
// ];

// const executor = await initializeAgentExecutorWithOptions(tools, model, {
//   agentType: "zero-shot-react-description",
//   verbose: true,
// });

// const result = await executor.call({
//   input: "What is 25 * 4 + 10?",
// });

// console.log(result.output);

// ==========================================
// 14. CUSTOM TOOLS
// ==========================================

// import { DynamicTool } from "@langchain/core/tools";

// const customTool = new DynamicTool({
//   name: "get-current-date",
//   description: "Returns the current date and time",
//   func: async () => {
//     return new Date().toString();
//   },
// });

// const result = await customTool.invoke("");
// console.log(result);

// ==========================================
// 15. STREAMING RESPONSES
// ==========================================

// const stream = await model.stream("Write a short poem about coding");

// for await (const chunk of stream) {
//   process.stdout.write(chunk.content);
// }

// ==========================================
// 16. FEW-SHOT PROMPTING
// ==========================================

// import { FewShotPromptTemplate } from "@langchain/core/prompts";

// const examples = [
//   { input: "happy", output: "sad" },
//   { input: "tall", output: "short" },
//   { input: "hot", output: "cold" },
// ];

// const examplePrompt = ChatPromptTemplate.fromTemplate(
//   "Input: {input}\nOutput: {output}"
// );

// const fewShotPrompt = new FewShotPromptTemplate({
//   examples,
//   examplePrompt,
//   prefix: "Give the antonym of every input",
//   suffix: "Input: {input}\nOutput:",
//   inputVariables: ["input"],
// });

// const formatted = await fewShotPrompt.format({ input: "big" });
// console.log(formatted);

// ==========================================
// 17. CACHING
// ==========================================

// import { InMemoryCache } from "@langchain/core/caches";

// const cache = new InMemoryCache();

// const cachedModel = new ChatGoogleGenerativeAI({
//   apiKey: process.env.GOOGLE_API_KEY,
//   cache,
// });

// // First call - hits API
// console.time("First call");
// await cachedModel.invoke("What is 2+2?");
// console.timeEnd("First call");

// // Second call - uses cache
// console.time("Second call");
// await cachedModel.invoke("What is 2+2?");
// console.timeEnd("Second call");

// ==========================================
// 18. FALLBACKS
// ==========================================

// const primaryModel = new ChatGoogleGenerativeAI({ 
//   modelName: "gemini-pro",
//   apiKey: process.env.GOOGLE_API_KEY 
// });
// const fallbackModel = new ChatGoogleGenerativeAI({ 
//   modelName: "gemini-pro",
//   apiKey: process.env.GOOGLE_API_KEY,
//   temperature: 0.5
// });

// const modelWithFallback = primaryModel.withFallbacks({
//   fallbacks: [fallbackModel],
// });

// const response = await modelWithFallback.invoke("Hello!");
// console.log(response.content);

// ==========================================
// 19. CALLBACKS
// ==========================================

// const modelWithCallbacks = new ChatGoogleGenerativeAI({
//   apiKey: process.env.GOOGLE_API_KEY,
//   callbacks: [
//     {
//       handleLLMStart: async (llm, prompts) => {
//         console.log("LLM started with prompts:", prompts);
//       },
//       handleLLMEnd: async (output) => {
//         console.log("LLM finished");
//       },
//     },
//   ],
// });

// await modelWithCallbacks.invoke("Hello!");

// ==========================================
// 20. RUNNABLE PASSTHROUGH & PARALLEL
// ==========================================

// import { RunnablePassthrough, RunnableParallel } from "@langchain/core/runnables";

// const chain = RunnableParallel.from({
//   joke: model.pipe(new StringOutputParser()),
//   original: new RunnablePassthrough(),
// });

// const result = await chain.invoke("Tell me a joke");
// console.log(result);

// ==========================================
// PRACTICE EXERCISES
// ==========================================

// Exercise 1: Create a chain that translates English to Hindi
// Exercise 2: Build a simple chatbot with memory
// Exercise 3: Create a document QA system
// Exercise 4: Build an agent with custom tools
// Exercise 5: Implement streaming with a progress indicator
