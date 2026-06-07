# LangChain.js Learning Project

Complete learning resource for LangChain.js with all code examples in comments.

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup Environment Variables
```bash
# Copy the example env file
cp .env.example .env

# Edit .env and add your Google Gemini API key
# Get your key from: https://makersuite.google.com/app/apikey
```

### 3. Start Learning

Open `langchain-learning.js` and:
1. Read each section's comments
2. Uncomment the code you want to try
3. Run: `npm start`
4. See the results
5. Comment it back out
6. Move to the next section

## Learning Path

The file covers these topics in order:

1. **Basic Imports** - Required packages
2. **Simple Chat Model** - Your first LLM call
3. **Messages** - System and human messages
4. **Prompt Templates** - Reusable prompts
5. **Chains** - Combining components
6. **Output Parsers** - Structured responses
7. **Document Loaders** - Loading files
8. **Text Splitters** - Breaking text into chunks
9. **Embeddings** - Vector representations
10. **Vector Stores** - Storing and searching embeddings
11. **Retrieval QA** - Question answering
12. **Conversational Memory** - Chatbots with context
13. **Agents** - Autonomous decision making
14. **Custom Tools** - Building your own tools
15. **Streaming** - Real-time responses
16. **Few-Shot Prompting** - Learning from examples
17. **Caching** - Speed optimization
18. **Fallbacks** - Error handling
19. **Callbacks** - Event hooks
20. **Advanced Runnables** - Complex chains

## Tips

- Start with sections 1-5 for basics
- Sections 6-11 cover document processing
- Sections 12-14 are for chatbots and agents
- Sections 15-20 are advanced features
- Practice exercises are at the bottom

## Resources

- [LangChain.js Docs](https://js.langchain.com/)
- [Google AI Studio](https://makersuite.google.com/app/apikey) - Get your Gemini API key
- [Gemini API Docs](https://ai.google.dev/docs)
- [LangChain Discord](https://discord.gg/langchain)

## Common Issues

**Module not found**: Run `npm install`

**API Key error**: Check your `.env` file

**Import errors**: Make sure `"type": "module"` is in package.json

Happy Learning! 🚀
