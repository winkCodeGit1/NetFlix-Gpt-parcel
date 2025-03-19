import OpenAI from 'openai';
import { OPENAI_KEY } from './constants';

const openai = new OpenAI({
    //   apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted

    // This is the default and can be omitted
    apiKey: OPENAI_KEY,
    dangerouslyAllowBrowser: true,
});



// console.log(response.output_text);

export default openai;