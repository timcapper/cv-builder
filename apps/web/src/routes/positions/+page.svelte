<script>
    import { JobItem } from '$lib/components';
    import MynauiPlusCircle from '~icons/mynaui/plus-circle';

    export let data;
    
    // Sort positions items by startDate in descending order
    $: sortedPositions = [...data.positions].sort((a, b) => {
        const dateA = new Date(a.startDate);
        const dateB = new Date(b.startDate); 
        return dateB - dateA;
    });
</script>

<div class="w-full h-full px-2">
    <div class="flex w-full items-center">
        <h3 class="text-2xl font-medium text-left my-auto">Positions</h3>
        <div class="flex-grow"></div>
        <div class="tooltip tooltip-bottom" data-tip="Add experience">
            <a href="/postitions/new" class="btn btn-ghost normal-case text-xl rounded-xl"><MynauiPlusCircle class="w-8 h-8" /></a>
        </div>
    </div>
    <div class="divider" />
</div>
<div class="w-full mt-4 flex flex-col items-center">
    {#if data.positions.length === 0}
        <p class="text-center">You haven't recorded any experience yet.</p>
        <a href="/experience/new" class="btn btn-primary max-w-md mt-4">Add experience</a>
    {:else}
        {#each sortedPositions as position}
            <JobItem {position} />
            <div class="divider mt-0 mb-2" />
        {/each}
    {/if}
</div>