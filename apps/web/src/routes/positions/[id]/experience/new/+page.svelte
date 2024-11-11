<script>
    import { Input } from "$lib/components";
    
    export let data;
    export let form;
</script>

<div class="flex flex-col items-center h-full w-full">
    <h2 class="mt-2 text-center text-3xl font-bold tracking-tight text-base-content">
        Add new experience for {data.position.jobTitle} at {data.position.company}
    </h2>
    <form action="?/newExperience" method="POST" class="flex flex-col items-center space-y-2 w-full pt-4">
        <input type="hidden" name="positionId" value={data.positionId} />
        <Input
            id="situation"
            label="Situation"
            type="textarea"
            rows={4}
            value={form?.data?.situation}
            errors={form?.errors?.situation}
        />
        <Input
            id="task"
            label="Task"
            type="textarea"
            value={form?.data?.task}
            errors={form?.errors?.task}
        />
        <Input
            id="action"
            label="Action"
            type="textarea"
            value={form?.data?.action}
            errors={form?.errors?.action}
        />
        <Input
            id="result"
            label="Result"
            type="textarea"
            value={form?.data?.result}
            errors={form?.errors?.result}
        />
        <Input
            id="startDate"
            label="Start date"
            type="date"
            value={form?.data?.startDate}
            errors={form?.errors?.startDate}
        />
        <Input
            id="endDate"
            label="End date"
            type="date"
            value={form?.data?.endDate}
            errors={form?.errors?.endDate}
        />
        <div class="w-full max-w-lg pt-2 flex space-x-2">
            <a href="/positions" class="btn btn-outline flex-1">Cancel</a>
            <button type="submit" class="btn btn-primary flex-1">Add experience</button>
        </div>
    </form>
</div>