<script>
    import { EducationItem } from '$lib/components';

    export let data;
    
    // Sort education items by endDate in descending order
    $: sortedEducation = [...data.education].sort((a, b) => {
        const dateA = new Date(a.endDate);
        const dateB = new Date(b.endDate);
        return dateB - dateA;
    });
</script>

<div class="w-full h-full px-2">
    <div class="flex w-full items-center">
        <h3 class="text-2xl font-medium text-left my-auto">Education</h3>
        <div class="flex-grow"></div>
        <a href="/education/new" class="btn btn-primary">Add education</a>
    </div>
    <div class="divider" />
</div>
<div class="w-full mt-4 flex flex-col items-center">
    {#if data.education.length === 0}
        <p class="text-center">You haven't recorded any education yet.</p>
        <a href="/education/new" class="btn btn-primary max-w-md mt-4">Add education</a>
    {:else}
        {#each sortedEducation as education}
            <EducationItem {education} />
            <div class="divider mt-0 mb-2" />
        {/each}
    {/if}
</div>