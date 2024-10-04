<script>
	import { enhance } from "$app/forms";
    import { Input } from "$lib/components";
</script>

<div class="flex flex-col w-full h-full p-2">
    <div class="w-full">
        <form action="?/create" method="POST" class="flex flex-col space-y-2 w-full items-center" use:enhance>
            <h3 class="text-3xl font-bold">Add education</h3>
            <p class="mt-2 text-lg">Tell us about your eduction and qualifications. These are things like degrees. Add certificates and licenses elsewhere.</p>
            <Input id="institution" label="Institution" />
            <Input id="subject" label="Subject" />
            <Input id="qualification" label="Qualification" />
            <Input id="startDate" type="date" label="Start date" />
            <Input id="endDate" type="date" label="End date" />
            <Input id="grade" label="Grade" />
            <div class="w-full max-w-lg pt-3">
                <button type="submit" class="btn btn-primary w-full max-w-lg">Add education</button>
            </div>
        </form>
    </div>
</div>