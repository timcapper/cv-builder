<script lang=ts>
    import { Modal } from '$lib/components'
    import { enhance } from '$app/forms';
    import MynauiEditOne from '~icons/mynaui/edit-one';
    import MynauiTrash from '~icons/mynaui/trash';
    
    export let experience;

    let modalOpen;

    $: modalOpen = false;

    function formatDate(dateString: string): string {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
    }
</script>

<div class="w-full h-28 flex items-center justify-between">
    <div class="flex flex-col w-full ml-4 h-full justify-center">
        <p class="font-semibold text-lg">{experience.situation}</p>
        <p>{experience.task}</p>
        <p class="text-gray-500">{experience.startDate ? `${formatDate(experience.startDate)} - ${formatDate(experience.endDate)}` : formatDate(experience.endDate)}</p>
    </div>
    <div class="flex items-center justify-end w-full">
        <div class="tooltip tooltip-top" data-tip="Edit">
            <a href="/experience/{experience.id}/edit" class="btn btn-ghost normal-case text-xl rounded-xl"><MynauiEditOne /></a>
        </div>
        <Modal label={experience.id} checked={modalOpen}>
            <span slot="trigger" class="btn btn-ghost normal-case text-xl rounded-xl"><MynauiTrash /></span>
            <div slot="heading">
                <h3 class="text-2xl">Delete experience record</h3>
                <p class="text-base font-normal mt-2">
                    Are you sure you want to delete this experience record? Once deleted this experience record cannot be restored.
                </p>
            </div>
            <div slot="actions" class="flex w-full items-center justify-center space-x-2">
                <label for={experience.id} class="btn btn-outline rounded-xl">Cancel</label>
                <form action="?/deleteExperience" method="POST" use:enhance>
                    <input type="hidden" name="id" value={experience.id} />
                    <button type="submit" class="btn btn-error rounded-xl">Confirm</button>
                </form>
            </div>
        </Modal>
    </div>
</div>