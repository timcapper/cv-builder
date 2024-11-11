<script lang=ts>
    import { Modal } from '$lib/components'
    import { enhance } from '$app/forms';
    import MynauiEditOne from '~icons/mynaui/edit-one';
    import MynauiTrash from '~icons/mynaui/trash';
    import MynauiUserPlus from '~icons/mynaui/user-plus';
    
    export let position;

    let modalOpen;

    $: modalOpen = false;

    function formatDate(dateString: string): string {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
    }
</script>

<div class="w-full h-28 flex items-center justify-between">
    <div class="flex flex-col w-full ml-4 h-full justify-center">
        <p class="font-semibold text-lg">{position.jobTitle}</p>
        <p>{position.company} | {position.location}</p>
        <p class="text-gray-500">{position.endDate ? `${formatDate(position.startDate)} - ${formatDate(position.endDate)}` : `${formatDate(position.startDate)} - Present`}</p>
        <a href="/positions/{position.id}/experience/new" class="btn btn-outline btn-sm mt-2 mb-4 rounded-xl w-fit"><MynauiUserPlus />Add experience</a>
    </div>
    <div class="flex items-center justify-end w-full">
        <div class="tooltip tooltip-top" data-tip="Edit">
            <a href="/positions/{position.id}/edit" class="btn btn-ghost normal-case text-xl rounded-xl"><MynauiEditOne /></a>
        </div>
        <Modal label={position.id} checked={modalOpen}>
            <span slot="trigger" class="btn btn-ghost normal-case text-xl rounded-xl"><MynauiTrash /></span>
            <div slot="heading">
                <h3 class="text-2xl">Delete position record</h3>
                <p class="text-base font-normal mt-2">
                    Are you sure you want to delete this position? Once deleted this record cannot be restored.
                </p>
            </div>
            <div slot="actions" class="flex w-full items-center justify-center space-x-2">
                <label for={position.id} class="btn btn-outline rounded-xl">Cancel</label>
                <form action="?/deletePosition" method="POST" use:enhance>
                    <input type="hidden" name="id" value={position.id} />
                    <button type="submit" class="btn btn-error rounded-xl">Confirm</button>
                </form>
            </div>
        </Modal>
    </div>
</div>