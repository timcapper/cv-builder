<script>
    import { JobApplicationItem } from '$lib/components';

    export let data;
    
    // Sort job applications by date in descending order
    $: sortedApplications = [...data.jobApplications].sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateB - dateA;
    });
</script>

<div class="w-full h-full px-2">
    <div class="flex w-full items-center">
        <h3 class="text-2xl font-medium text-left my-auto">Job Applications</h3>
        <div class="flex-grow"></div>
        <a href="/job-applications/new" class="btn btn-primary">Add application</a>
    </div>
    <div class="divider" />
</div>
<div class="w-full mt-4 flex flex-col items-center">
    {#if data.jobApplications.length === 0}
        <p class="text-center">You haven't recorded any job applications yet.</p>
        <a href="/job-applications/new" class="btn btn-primary max-w-md mt-4">Add application</a>
    {:else}
        {#each sortedApplications as application}
            <JobApplicationItem {application} />
            <div class="divider mt-0 mb-2" />
        {/each}
    {/if}
</div>