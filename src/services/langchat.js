import { ChatOpenAI } from "@langchain/openai";

import { ConversationChain } from "langchain/chains";
import {
  ChatPromptTemplate,
  MessagesPlaceholder,
} from "@langchain/core/prompts";
import { BufferMemory } from "langchain/memory";

const chatmodel = new ChatOpenAI({
  openAIApiKey: process.env.REACT_APP_OPENAI_KEY,
  modelName: "gpt-4-turbo-preview",
});

let chain = null;

export const setUpChat = (instructions) => {
  const chatPrompt = ChatPromptTemplate.fromMessages([
    [
      "system",
      instructions,
    ],  
    new MessagesPlaceholder("history"),
    ["human", "{input}"],
  ]);

  chain = new ConversationChain({
    memory: new BufferMemory({ returnMessages: true, memoryKey: "history", }),
    prompt: chatPrompt,
    llm: chatmodel,
  });     
};

export const chat = async (input) => {
  if (!chain) {
    window.alert("Chat is not set up");
  }
  const response = await chain.call({
    input: input,
  });

  console.log(response);
  return response.response;
};
