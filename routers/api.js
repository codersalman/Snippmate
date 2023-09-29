const express =require('express');
const router=express.Router();
const OpenAI = require('openai');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const apikey = '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';
const openai = new OpenAI({ apiKey: apikey });



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
async function explainCodeBlocksFromHTML(htmlContent){
    const dom = new JSDOM(htmlContent);
    const codeElements = dom.window.document.querySelectorAll('code');

    if (codeElements.length > 0) {
        for (const codeElement of codeElements) {
            const code = codeElement.textContent.trim();
            const explanation = await generateExplanation(code);
            console.log(explanation);
        }
    } else {
        console.log('No code blocks found in the HTML content.');
    }

}


 
router.get('/responce', async (req,res)=>{
    // try {
    //     const response = await openai.create({
    //         model: 'text-davinci-003',
    //         prompt: htmlContent,
    //         max_tokens: 50, // Adjust max_tokens as needed
    //     });
    //      res.send(response.data.choices[0].text);
    // } catch (error) {
    //     console.error('Error generating explanation:', error);
    //      res.send('Error generating explanation.');
    // }
    explainCodeBlocksFromHTML();

})


module.exports=router;