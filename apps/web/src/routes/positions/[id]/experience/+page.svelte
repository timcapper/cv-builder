<script>
    import MynauiPlusSolid from '~icons/mynaui/plus-solid';
    import MynauiArrowLeft from '~icons/mynaui/arrow-left';
    import MynauiEditOne from '~icons/mynaui/edit-one';
    import MynauiTrash from '~icons/mynaui/trash';
    import { Modal } from '$lib/components';
    import { enhance } from '$app/forms';
    
    export let data;
    
    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
    }

    let modalOpen = {};
    
    // Initialize modalOpen state for each experience
    $: {
        data.experiences.forEach(exp => {
            if (!(exp.id in modalOpen)) {
                modalOpen[exp.id] = false;
            }
        });
    }
</script>

<div class="w-full h-full px-2">
    <div class="flex w-full items-center">
        <div class="flex items-center gap-4">
            <a href="/positions" class="btn btn-ghost btn-circle">
                <MynauiArrowLeft class="w-6 h-6" />
            </a>
            <div>
                <h3 class="text-2xl font-medium text-left my-auto">{data.position.jobTitle} at {data.position.company}</h3>
                <p class="text-gray-500 mt-1">
                    {data.position.endDate ? 
                        `${formatDate(data.position.startDate)} - ${formatDate(data.position.endDate)}` : 
                        `${formatDate(data.position.startDate)} - Present`}
                </p>
            </div>
        </div>
        <div class="flex-grow"></div>
        <a href="/positions/{data.position.id}/experience/new" class="btn btn-outline normal-case rounded-xl">
            <MynauiPlusSolid /> Add experience
        </a>
    </div>
    <div class="divider" />
</div>

<div class="w-full mt-4 flex flex-col items-center">
    {#if data.experiences.length === 0}
        <p class="text-center">You haven't recorded any experiences for this position yet.</p>
        <a href="/positions/{data.position.id}/experience/new" class="btn btn-primary max-w-md mt-4">Add experience</a>
    {:else}
        {#each data.experiences as experience}
            <div class="w-full max-w-3xl bg-base-100 p-6 rounded-xl mb-4">
                <div class="flex justify-between items-start">
                    <div class="flex-grow">
                        <div class="mb-4">
                            <h4 class="font-semibold mb-2">Situation</h4>
                            <p>{experience.situation}</p>
                        </div>
                        <div class="mb-4">
                            <h4 class="font-semibold mb-2">Task</h4>
                            <p>{experience.task}</p>
                        </div>
                        <div class="mb-4">
                            <h4 class="font-semibold mb-2">Action</h4>
                            <p>{experience.action}</p>
                        </div>
                        <div class="mb-4">
                            <h4 class="font-semibold mb-2">Result</h4>
                            <p>{experience.result}</p>
                        </div>
                        <div class="text-sm text-gray-500">
                            {formatDate(experience.startDate)} - {experience.endDate ? formatDate(experience.endDate) : 'Present'}
                        </div>
                    </div>
                    <div class="flex items-center ml-4">
                        <div class="tooltip tooltip-top" data-tip="Edit">
                            <a href="/positions/{data.position.id}/experience/{experience.id}/edit" class="btn btn-ghost normal-case text-xl rounded-xl">
                                <MynauiEditOne />
                            </a>
                        </div>
                        <Modal label={experience.id} checked={modalOpen[experience.id]}>
                            <span slot="trigger" class="btn btn-ghost normal-case text-xl rounded-xl">
                                <MynauiTrash />
                            </span>
                            <div slot="heading">
                                <h3 class="text-2xl">Delete experience record</h3>
                                <p class="text-base font-normal mt-2">
                                    Are you sure you want to delete this experience? Once deleted this record cannot be restored.
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
            </div>
            <div class="divider mt-0 mb-2" />
        {/each}
    {/if}
</div>