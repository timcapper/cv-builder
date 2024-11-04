export async function processWithOpenAI(dbData: any) {
    const response = await fetch('/api/openai', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ dbData })
    });

    if (!response.ok) {
        throw new Error('Failed to process data with OpenAI');
    }

    return response.json();
}