import { OPENAI_API_KEY } from '$env/static/private';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import pdfParse from 'pdf-parse';
import { Buffer } from 'buffer';

export const POST: RequestHandler = async ({ request }) => {
    try {
        const formData = await request.formData();
        const file = formData.get('file') as File;
        
        if (!file) {
            return json({ success: false, error: 'No file provided' }, { status: 400 });
        }

        let fileContent: string;
        const buffer = await file.arrayBuffer();

        if (file.name.endsWith('.pdf')) {
            const dataBuffer = Buffer.from(buffer);
            const pdfData = await pdfParse(dataBuffer);
            fileContent = pdfData.text;
        } else {
            fileContent = await file.text();
        }

        // OpenAI API configuration
        /*const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [
                    {
                        role: 'system',
                        content: 'You are a helpful assistant processing document information.'
                    },
                    {
                        role: 'user',
                        content: `Process this document content: ${fileContent}`
                    }
                ]
            })
        });

        const openAIResponse = await response.json();

        return json({ success: true, data: openAIResponse.choices[0].message.content }); */
        return json({ success: true, data: fileContent });
    } catch (error) {
        console.error('Error processing OpenAI request:', error);
        return json({ success: false, error: 'Failed to process request' }, { status: 500 });
    }
};