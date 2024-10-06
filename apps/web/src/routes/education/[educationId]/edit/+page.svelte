<script>
	import { enhance } from '$app/forms';
    import { Input } from '$lib/components';

    export let data;
    export let form;
</script>

<div class="flex flex-col w-full h-full p-2">
    <div class="w-full">
        <form method="POST" action="?/updateEducation" class="flex flex-col space-y-2 w-full items-center" use:enhance>
            <h3 class="text-3xl font-bold">Edit {data.education.subject} at {data.education.institution}</h3>
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
                type="date"
                label="Start date"
                value={form?.data?.startDate ?? data.education.startDate}
            />
            <Input
                id="endDate"
                type="date"
                label="End date"
                value={form?.data?.endDate ?? data.education.endDate}
                errors={form?.errors?.endDate}
            />
            <Input
                id="grade"
                label="Grade"
                value={form?.data?.grade ?? data.education.grade}
            />
            <div class="w-full max-w-lg pt-3">
                <button type="submit" class="btn btn-primary w-full max-w-lg">Save changes</button>
            </div>
        </form>
    </div>
</div>