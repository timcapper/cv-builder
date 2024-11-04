<script lang="ts">
    import { Modal } from '$lib/components'
    import { enhance } from '$app/forms';
    import MynauiEditOne from '~icons/mynaui/edit-one';
    import MynauiTrash from '~icons/mynaui/trash';
    import MynauiFileText from '~icons/mynaui/file-text';
    
    export let language
    
    let modalOpen
    
    $: modalOpen = false
</script>

<div class="w-full h-28 flex items-center justify-between">
    <div class="flex flex-col w-full ml-4 h-full justify-center">
        <p class="font-semibold text-lg">{language.language}</p>
        <p>{language.level}</p>
        {#if language.certificates?.length > 0}
            <div class="tooltip tooltip-right" data-tip="View certificates">
                <a href="/certificates?language={language.id}" class="btn btn-ghost btn-sm normal-case rounded-xl w-fit">
                    <MynauiFileText />Certificates ({language.certificates.length})
                </a>
            </div>
        {:else}
            <a href="/certificates/new?language={language.id}" class="btn btn-outline btn-sm mt-2 mb-4 rounded-xl w-fit">
                <MynauiFileText />Add certificate
            </a>
        {/if}
    </div>
    <div class="flex items-center justify-end w-full">
        <div class="tooltip tooltip-top" data-tip="Edit">
            <a href="/languages/{language.id}/edit" class="btn btn-ghost normal-case text-xl rounded-xl">
                <MynauiEditOne />
            </a>
        </div>
        <Modal label={language.id} checked={modalOpen}>
            <span slot="trigger" class="btn btn-ghost normal-case text-xl rounded-xl"><MynauiTrash /></span>
            <div slot="heading">
                <h3 class="text-2xl">Delete {language.language}</h3>
                <p class="text-base font-normal mt-2">
                    Are you sure you want to delete this language? Once deleted this language cannot be restored.
                </p>
            </div>
            <div slot="actions" class="flex w-full items-center justify-center space-x-2">
                <label for={language.id} class="btn btn-outline rounded-xl">Cancel</label>
                <form action="?/deleteLanguage" method="POST" use:enhance>
                    <input type="hidden" name="id" value={language.id} />
                    <button type="submit" class="btn btn-error rounded-xl">Confirm</button>
                </form>
            </div>
        </Modal>
    </div>
</div>