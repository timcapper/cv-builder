<script>
    import { Input } from "$lib/components";
    
    export let form;

    let stillInRole = true;
</script>

<div class="flex flex-col items-center h-full w-full">
    <h2 class="mt-2 text-center text-3xl font-bold tracking-tight text-base-content">
        Add new position
    </h2>
    <form action="?/newExperience" method="POST" class="flex flex-col items-center space-y-2 w-full pt-4">
        <Input
            id="company"
            label="Company"
            value={form?.data?.company}
            errors={form?.errors?.company}
        />
        <Input
            id="jobTitle"
            label="Job title"
            value={form?.data?.jobTitle}
            errors={form?.errors?.jobTitle}
        />
        <Input
            id="startDate"
            label="Start date"
            type="date"
            value={form?.data?.startDate}
            errors={form?.errors?.startDate}
        />
        <div class="form-control w-full max-w-lg">
            <label class="label cursor-pointer justify-start gap-2">
                <input type="checkbox" class="checkbox" bind:checked={stillInRole} />
                <span class="label-text">I am currently in this role</span>
            </label>
        </div>
        <Input
            id="endDate"
            label="End date"
            type="date"
            value={form?.data?.endDate}
            errors={form?.errors?.endDate}
            disabled={stillInRole}
        />
        <Input
            id="location"
            label="Location"
            value={form?.data?.location}
            errors={form?.errors?.location}
        />
        <div class="w-full max-w-lg pt-2 flex space-x-2">
            <a href="/experience" class="btn btn-outline flex-1">Cancel</a>
            <button type="submit" class="btn btn-primary flex-1">Add position</button>
        </div>
    </form>
</div>