<script>
    import { Input } from "$lib/components";
    import { onMount } from 'svelte';
    
    export let form;

    onMount(() => {
        if (form?.success) {
            window.location.href = `/job-applications/${form.record.id}`;
        }
    });
</script>

<div class="flex flex-col items-center h-full w-full">
    <h2 class="mt-2 text-center text-3xl font-bold tracking-tight text-base-content">
        Start a new job application
    </h2>
    <p class="text-center max-w-2xl mb-6">You can add a job description by uploading a file, linking to the job posting, or by entering the details manually.</p>

    <form 
        action="?/submitManualJob"
        method="POST" 
        class="flex flex-col items-center space-y-2 w-full max-w-lg"
    >
        <Input
            id="company"
            label="Company name"
            value={form?.data?.company}
            errors={form?.errors?.company}
        />
        <Input
            id="jobTitle"
            label="Job title"
            value={form?.data?.jobTitle}
            errors={form?.errors?.jobTitle}
        />
        <div class="form-control w-full">
            <label for="jobDescription" class="label">
                <span class="label-text">Job description</span>
            </label>
            <textarea
                id="jobDescription"
                name="jobDescription"
                class="textarea textarea-bordered h-32"
                value={form?.data?.jobDescription}
            ></textarea>
            {#if form?.errors?.jobDescription}
                <label class="label" for="jobDescription">
                    <span class="label-text-alt text-error">{form.errors.jobDescription}</span>
                </label>
            {/if}
        </div>
        <button type="submit" class="btn btn-primary w-full">Submit job details</button>
    </form>
</div>