const express =require('express');
const router=express.Router();
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const axios = require('axios');



const API_ENDPOINT = 'https://api.openai.com/v1/chat/completions'; // Replace with the appropriate endpoint
const API_KEY = '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';


// const openai = new OpenAI({ apiKey: apikey });


const htmlContent = `
    <p>Here is a code example in JavaScript:</p>
    <code>
        function greet(name) {
            return 'Hello, ' + name + '!';
        }
    </code>

    <p>This code defines a function called 'greet' that takes a 'name' parameter and returns a greeting message.</p>
    
    <p>Another code block in Python:</p>
    <code>
        def calculate_sum(a, b):
            return a + b
    </code>

    <p>This Python code calculates the sum of two numbers.</p>
`;



 
router.post('/responce', async (req,res)=>{

   let inputText =   req.body.inputText;
    axios.post(API_ENDPOINT, {
        prompt: inputText,
        max_tokens: 100, // Adjust as needed
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer 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`,
        },
      })
        .then((response) => {
          // Handle the API response here
          console.log('ChatGPT Response:', response.data.choices[0].text);
        })
        .catch((error) => {
          // Handle errors
          console.error('Error:',error);
      });
   

})


module.exports=router;

// async function explainCodeBlocksFromHTML(htmlContent){
//     const dom = new JSDOM(htmlContent);
//     const codeElements = dom.window.document.querySelectorAll('code');

//     if (codeElements.length > 0) {
//         for (const codeElement of codeElements) {
//             const code = codeElement.textContent.trim();
//             const explanation = await generateExplanation(code);
//             console.log(explanation);
//         }
//     } else {
//         console.log('No code blocks found in the HTML content.');
//     }

// }
// const axios = require('axios');

// // Define your API endpoint and API key
//  // Replace with your actual API key

// // Text input for ChatGPT
// const inputText = 'Translate the following English text to French:';

// // Make a POST request to the API
// axios.post(API_ENDPOINT, {
//   prompt: inputText,
//   max_tokens: 50, // Adjust as needed
// }, {
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': Bearer ${API_KEY},
//   },
// })
//   .then((response) => {
//     // Handle the API response here
//     console.log('ChatGPT Response:', response.data.choices[0].text);
//   })
//   .catch((error) => {
//     // Handle errors
//     console.error('Error:', error);
//   });