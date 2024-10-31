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
        Edit education
    </h2>
    <form action="?/updateEducation" method="POST" class="flex flex-col items-center space-y-2 w-full pt-4">
        <Input
            id="institution"
            label="Institution"
            value={form?.data?.institution ?? data.education.institution}
            errors={form?.errors?.institution}
        />
        <Input
            id="subject"
            label="Subject"
            value={form?.data?.subject ?? data.education.subject}
            errors={form?.errors?.subject}
        />
        <Input
            id="qualification"
            label="Qualification"
            value={form?.data?.qualification ?? data.education.qualification}
            errors={form?.errors?.qualification}
        />
        <Input
            id="startDate"
            label="Start date"
            type="date"
            value={form?.data?.startDate ?? formatDate(data.education.startDate)}
            errors={form?.errors?.startDate}
        />
        <Input
            id="endDate"
            label="End/award date"
            type="date"
            value={form?.data?.endDate ?? formatDate(data.education.endDate)}
            errors={form?.errors?.endDate}
        />
        <Input
            id="grade"
            label="Grade"
            value={form?.data?.grade ?? data.education.grade}
            errors={form?.errors?.grade}
        />
        <div class="w-full max-w-lg pt-2 flex space-x-2">
            <a href="/education" class="btn btn-outline flex-1">Cancel</a>
            <button type="submit" class="btn btn-primary flex-1">Update education</button>
        </div>
    </form>
</div>