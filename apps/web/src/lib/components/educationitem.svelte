<script>
    import { Modal } from '$lib/components'
    
    export let education

    let modalOpen

    $: modalOpen = false
</script>

<div class="w-full h-28 flex items-center justify-between">
    <div class="flex flex-col w-full ml-4 h-full justify-center">
        <a href="/education/{education.id}" class="font-semibold text-lg">{education.subject}</a>
        <p>{education.institution}</p>
    </div>
    <div class="flex items-center justify-end w-full">
        <a href="/education/{education.id}/edit" class="btn btn-outline">Edit</a>
        <Modal label={education.id} checked={modalOpen}>
            <span slot="trigger" class="btn btn-error ml-2">Delete</span>
            <div slot="heading">
                <h3 class="text-2xl">Delete {education.subject} at {education.institution}</h3>
                <p class="text-base font-normal mt-2">
                    Are you sure you want to delete this education record? Once deleted this education record it cannot be restored.
                </p>
            </div>
            <div slot="actions" class="flex w-full items-center justify-center space-x-2">
                <label for={education.id} class="btn btn-outline">Cancel</label>
                <form action="?/deleteEducation" method="POST">
                    <input type="hidden" name="id" value={education.id} />
                    <button type="submit" class="btn btn-error">Confirm</button>
                </form>
            </div>
        </Modal>
    </div>
</div>