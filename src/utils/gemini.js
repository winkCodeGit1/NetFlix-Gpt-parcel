import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai";
import { GEMINI_KEY } from "./constants";

const apiKey = GEMINI_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

const runGemni = async (input) => {
    const chatSession = model.startChat({
        generationConfig,
        history: [
        ],
    });
    console.log(input, '------input');
    const result = await chatSession.sendMessage(input);
    console.log(result.response.text(), '-------geminitext');

    return result.response.text();
}

export default runGemni;