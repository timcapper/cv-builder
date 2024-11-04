import { OPENAI_API_KEY } from '$env/static/private';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
    try {
        // Get data from request body
        const { dbData } = await request.json();

        // OpenAI API configuration
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
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
                        content: 'You are a helpful assistant processing database information.'
                    },
                    {
                        role: 'user',
                        content: `Process this data: ${JSON.stringify(dbData)}`
                    }
                ]
            })
        });

        const openAIResponse = await response.json();

        // Store in database (example using your preferred DB client)
        await storeProcessedData(openAIResponse.choices[0].message.content);

        return json({ success: true, data: openAIResponse.choices[0].message.content });
    } catch (error) {
        console.error('Error processing OpenAI request:', error);
        return json({ success: false, error: 'Failed to process request' }, { status: 500 });
    }
});

async function storeProcessedData(processedContent: string) {
    // Implement your database storage logic here
    // Example:
    // await db.insert({ 
    //     table: 'processed_responses',
    //     data: { content: processedContent, created_at: new Date() }
    // });
}