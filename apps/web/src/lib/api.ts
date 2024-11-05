export async function processWithOpenAI(fileData: File, fetch: typeof globalThis.fetch) {
    const formData = new FormData();
    formData.append('file', fileData);

    const response = await fetch('/api/openai', {
        method: 'POST',
        body: formData
    });

    if (!response.ok) {
        throw new Error('Failed to process data with OpenAI');
    }

    return response;
}