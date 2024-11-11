<script>
    import { Input } from "$lib/components";
    
    export let data;
    export let form;

    // Format dates to YYYY-MM-DD
    const formatDate = (dateString) => {
        if (!dateString) return '';
        return new Date(dateString).toISOString().split('T')[0];
    };
</script>

<div class="flex flex-col items-center h-full w-full">
    <h2 class="mt-2 text-center text-3xl font-bold tracking-tight text-base-content">
        Edit experience for {data.position.jobTitle} at {data.position.company}
    </h2>
    <form action="?/updateExperience" method="POST" class="flex flex-col items-center space-y-2 w-full pt-4">
        <Input
            id="situation"
            label="Situation"
            type="textarea"
            rows={4}
            value={form?.data?.situation ?? data.experience.situation}
            errors={form?.errors?.situation}
        />
        <Input
            id="task"
            label="Task"
            type="textarea"
            value={form?.data?.task ?? data.experience.task}
            errors={form?.errors?.task}
        />
        <Input
            id="action"
            label="Action"
            type="textarea"
            value={form?.data?.action ?? data.experience.action}
            errors={form?.errors?.action}
        />
        <Input
            id="result"
            label="Result"
            type="textarea"
            value={form?.data?.result ?? data.experience.result}
            errors={form?.errors?.result}
        />
        <Input
            id="startDate"
            label="Start date"
            type="date"
            value={form?.data?.startDate ?? formatDate(data.experience.startDate)}
            errors={form?.errors?.startDate}
        />
        <Input
            id="endDate"
            label="End date"
            type="date"
            value={form?.data?.endDate ?? formatDate(data.experience.endDate)}
            errors={form?.errors?.endDate}
        />
        <div class="w-full max-w-lg pt-2 flex space-x-2">
            <a href="/positions/{data.position.id}/experience" class="btn btn-outline flex-1">Cancel</a>
            <button type="submit" class="btn btn-primary flex-1">Update experience</button>
        </div>
    </form>
</div> 