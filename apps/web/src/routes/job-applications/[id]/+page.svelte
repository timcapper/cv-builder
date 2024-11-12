<script lang="ts">
    export let data;
    
    const { jobApplication } = data;
</script>

<div class="flex flex-col items-center w-full max-w-4xl mx-auto px-4">
    <h2 class="text-2xl font-bold mb-4">Generated CV for {jobApplication.company}</h2>
    
    <div class="card w-full bg-base-200 shadow-xl">
        <div class="card-body">
            <h3 class="card-title">{jobApplication.jobTitle}</h3>
            <div class="whitespace-pre-wrap">
                {jobApplication.rawResponse}
            </div>
        </div>
    </div>
    
    <div class="flex gap-4 mt-6">
        <a href="/job-applications" class="btn">Back to Applications</a>
        <a href="/job-applications/new" class="btn btn-primary">Create Another</a>
    </div>
</div>