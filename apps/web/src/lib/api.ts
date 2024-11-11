export async function processWithOpenAI(jobDetails: {
    company: string;
    jobTitle: string;
    jobDescription: string;
}, fetch: typeof globalThis.fetch) {
    const response = await fetch('/api/openai', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            prompt: `write me a CV for a job with this job description:\n\nCompany: ${jobDetails.company}\nJob Title: ${jobDetails.jobTitle}\nDescription: ${jobDetails.jobDescription}`,
            jobDetails
        })
    });

    if (!response.ok) {
        throw new Error('Failed to process data with OpenAI');
    }

    return response;
}