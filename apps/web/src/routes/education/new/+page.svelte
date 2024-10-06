<script>
	import { enhance } from "$app/forms";
    import { Input } from "$lib/components";

    export let form;
</script>

<div class="flex flex-col w-full h-full p-2">
    <div class="w-full">
        <form action="?/create" method="POST" class="flex flex-col space-y-2 w-full items-center" use:enhance>
            <h3 class="text-3xl font-bold">Add education</h3>
            <p class="mt-2 text-lg">Tell us about your eduction and qualifications. These are things like degrees. Add certificates and licenses elsewhere.</p>
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
                type="date"
                label="Start date"
                value={form?.data?.startDate}
            />
            <Input
                id="endDate"
                type="date"
                label="End date"
                value={form?.data?.endDate}
                errors={form?.errors?.endDate}
            />
            <Input
                id="grade"
                label="Grade"
                value={form?.data?.grade}
            />
            <div class="w-full max-w-lg pt-3">
                <button type="submit" class="btn btn-primary w-full max-w-lg">Add education</button>
            </div>
        </form>
    </div>
</div>