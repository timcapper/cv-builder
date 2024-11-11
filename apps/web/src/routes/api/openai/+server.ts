import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { OPENAI_API_KEY } from '$env/static/private';

export const POST: RequestHandler = async ({ request }) => {
    const { prompt } = await request.json();

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [
                    {
                        role: 'user',
                        content: prompt
                    }
                ]
            })
        });

        const data = await response.json();
        
        if (!data.choices || !data.choices.length || !data.choices[0].message) {
            console.error('Unexpected OpenAI response:', data);
            return json({ error: 'Invalid response from OpenAI' }, { status: 500 });
        }

        return json({
            cv: data.choices[0].message.content
        });
    } catch (error) {
        console.error('OpenAI API error:', error);
        return json({ error: 'Failed to generate CV' }, { status: 500 });
    }
};
