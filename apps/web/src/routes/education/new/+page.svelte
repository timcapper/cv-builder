<script>
    import { Input } from "$lib/components";
    
    export let form;
</script>

<div class="flex flex-col items-center h-full w-full">
    <h2 class="mt-2 text-center text-3xl font-bold tracking-tight text-base-content">
        Add new education
    </h2>
    <form action="?/newEducation" method="POST" class="flex flex-col items-center space-y-2 w-full pt-4">
        <Input
            id="institution"
            label="Institution"
            value={form?.data?.institution}
            errors={form?.errors?.institution}
        />
        <Input
            id="subject"
            label="Subject"
            value={form?.data?.subject}
            errors={form?.errors?.subject}
        />
        <Input
            id="qualification"
            label="Qualification"
            value={form?.data?.qualification}
            errors={form?.errors?.qualification}
        />
        <Input
            id="startDate"
            label="Start date"
            value={form?.data?.startDate}
            errors={form?.errors?.startDate}
        />
        <Input
            id="endDate"
            label="End date"
            value={form?.data?.endDate}
            errors={form?.errors?.endDate}
        />
        <Input
            id="grade"
            label="Grade"
            value={form?.data?.grade}
            errors={form?.errors?.grade}
        />
        <div class="w-full max-w-lg pt-2 flex space-x-2">
            <a href="/education" class="btn btn-outline flex-1">Cancel</a>
            <button type="submit" class="btn btn-primary flex-1">Add education</button>
        </div>
    </form>
</div>