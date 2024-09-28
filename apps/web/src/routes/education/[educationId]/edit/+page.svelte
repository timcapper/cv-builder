<script>
    import { Input } from '$lib/components';
    export let data;
</script>

<div class="flex flex-col w-full h-full p-2">
    <div class="w-full">
        <form method="POST" action="?/updateEducation" class="flex flex-col space-y-2 w-full items-center">
            <h3 class="text-3xl font-bold">Edit {data.education.subject} at {data.education.institution}</h3>
            <Input id="institution" label="Institution" value={data.education.institution ?? ''} />
            <Input id="subject" label="Subject" value={data.education.subject ?? ''} />
            <Input id="qualification" label="Qualification" value={data.education.qualification ?? ''} />
            <Input id="startDate" type="date" label="Start date" value={data.education.startDate ?? ''} />
            <Input id="endDate" type="date" label="End date" value={data.education.endDate ?? ''} />
            <Input id="grade" label="Grade" value={data.education.grade ?? ''} />
            <div class="w-full max-w-lg pt-3">
                <button type="submit" class="btn btn-primary w-full max-w-lg">Save changes</button>
            </div>
        </form>
    </div>
</div>