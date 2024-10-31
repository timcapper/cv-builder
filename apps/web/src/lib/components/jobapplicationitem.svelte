<script lang=ts>
    import { Modal } from '$lib/components'
    import { enhance } from '$app/forms';
    
    export let application

    let modalOpen

    $: modalOpen = false

    function formatDate(dateString: string): string {
        const date = new Date(dateString)
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
    }
</script>

<div class="w-full h-28 flex items-center justify-between">
    <div class="flex flex-col w-full ml-4 h-full justify-center">
        <p class="font-semibold text-lg">{application.jobTitle}</p>
        <p>{application.company}</p>
        <p>Created: {formatDate(application.created)}</p>
    </div>
    <div class="flex items-center justify-end w-full">
        <a href="/job-applications/{application.id}/edit" class="btn btn-outline">Edit</a>
        <Modal label={application.id} checked={modalOpen}>
            <span slot="trigger" class="btn btn-error ml-2">Delete</span>
            <div slot="heading">
                <h3 class="text-2xl">Delete {application.jobTitle} at {application.company}</h3>
                <p class="text-base font-normal mt-2">
                    Are you sure you want to delete this job application? Once deleted this record cannot be restored.
                </p>
            </div>
            <div slot="actions" class="flex w-full items-center justify-center space-x-2">
                <label for={application.id} class="btn btn-outline rounded-xl">Cancel</label>
                <form action="?/deleteApplication" method="POST" use:enhance>
                    <input type="hidden" name="id" value={application.id} />
                    <button type="submit" class="btn btn-error rounded-xl">Confirm</button>
                </form>
            </div>
        </Modal>
    </div>
</div>