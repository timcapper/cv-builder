<script>
    import { LanguageItem } from '$lib/components';
    import MynauiPlusCircle from '~icons/mynaui/plus-circle';

    export let data;
    
    // Sort languages alphabetically
    $: sortedLanguages = [...data.languages].sort((a, b) => 
        a.name.localeCompare(b.name)
    );
</script>

<div class="w-full h-full px-2">
    <div class="flex w-full items-center">
        <h3 class="text-2xl font-medium text-left my-auto">Languages</h3>
        <div class="flex-grow"></div>
        <div class="tooltip tooltip-bottom" data-tip="Add language">
            <a href="/languages/new" class="btn btn-ghost normal-case text-xl rounded-xl">
                <MynauiPlusCircle class="w-8 h-8" />
            </a>
        </div>
    </div>
    <div class="divider" />
</div>
<div class="w-full mt-4 flex flex-col items-center">
    {#if data.languages.length === 0}
        <p class="text-center">You haven't recorded any languages yet.</p>
        <a href="/languages/new" class="btn btn-primary max-w-md mt-4">Add language</a>
    {:else}
        {#each sortedLanguages as language}
            <LanguageItem {language} />
            <div class="divider mt-0 mb-2" />
        {/each}
    {/if}
</div>