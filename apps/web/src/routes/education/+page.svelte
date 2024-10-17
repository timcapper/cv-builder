<script>
    import { EducationItem } from '$lib/components';

    export let data;
</script>

<div class="w-full h-full px-2">
    <h3 class="text-2xl font-medium">Education</h3>
    <div class="divider" />
</div>
<div class="w-full mt-4 flex flex-col items-center">
    {#if data.education.length === 0}
        <p class="text-center text-3xl">You haven't recorded any education yet.</p>
        <a href="/education/new" class="btn btn-primary max-w-md mt-4">Add your education</a>
    {:else}
        {#each data.education as education}
            <EducationItem {education} />
            <div class="divider mt-0 mb-2" />
        {/each}
    {/if}
</div>