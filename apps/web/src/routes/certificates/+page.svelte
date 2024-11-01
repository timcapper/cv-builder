<script>
    import { CertificateItem } from '$lib/components';
    import MynauiPlusCircle from '~icons/mynaui/plus-circle';

    export let data;
    
    // Sort certificates by issueDate in descending order
    $: sortedCertificates = [...data.certificates].sort((a, b) => {
        const dateA = new Date(a.issueDate);
        const dateB = new Date(b.issueDate);
        return dateB - dateA;
    });
</script>

<div class="w-full h-full px-2">
    <div class="flex w-full items-center">
        <h3 class="text-2xl font-medium text-left my-auto">Certificates & Licenses</h3>
        <div class="flex-grow"></div>
        <div class="tooltip tooltip-bottom" data-tip="Add certificate">
            <a href="/certificates/new" class="btn btn-ghost normal-case text-xl rounded-xl">
                <MynauiPlusCircle class="w-8 h-8" />
            </a>
        </div>
    </div>
    <div class="divider" />
</div>
<div class="w-full mt-4 flex flex-col items-center">
    {#if data.certificates.length === 0}
        <p class="text-center">You haven't recorded any certificates yet.</p>
        <a href="/certificates/new" class="btn btn-primary max-w-md mt-4">Add certificate</a>
    {:else}
        {#each sortedCertificates as certificate}
            <CertificateItem {certificate} />
            <div class="divider mt-0 mb-2" />
        {/each}
    {/if}
</div>