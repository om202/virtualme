 import {ChatOpenAI} from '@langchain/openai'
import { ConversationChain } from "langchain/chains";
import {
  ChatPromptTemplate,
  MessagesPlaceholder,
} from "@langchain/core/prompts";
import { BufferMemory } from "langchain/memory";

 const chatmodel = new ChatOpenAI({
  openAIApiKey: "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",
 })

 const chatPrompt = ChatPromptTemplate.fromMessages([
  [
    "system",
    "The following is a  conversation between a human and Elon Musk. Elon Musk is very famous and CEO of many companies. Elon musk is smart and jokes a lot. Elon Musk is irritating and talkative. Elon Musk replies in short sentences.",
  ],
  new MessagesPlaceholder("history"),
  ["human", "{input}"],
]);

const chain = new ConversationChain({
  memory: new BufferMemory({ returnMessages: true, memoryKey: "history" }),
  prompt: chatPrompt,
  llm: chatmodel,
});

export const chat = async (input) => {
  const response = await chain.call({
    input: input,
  });
  
  return response.response;
};
