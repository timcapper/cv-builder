<script>
    import { Input } from '$lib/components';
    
    export let data;
    export let form;

    const proficiencyLevels = [
        { value: 'A1', label: 'A1 - Beginner' },
        { value: 'A2', label: 'A2 - Elementary' },
        { value: 'B1', label: 'B1 - Intermediate' },
        { value: 'B2', label: 'B2 - Upper Intermediate' },
        { value: 'C1', label: 'C1 - Advanced' },
        { value: 'C2', label: 'C2 - Mastery' },
        { value: 'Native', label: 'Native Speaker' }
    ];
</script>

<div class="flex flex-col items-center h-full w-full">
    <h2 class="mt-2 text-center text-3xl font-bold tracking-tight text-base-content">
        Edit language
    </h2>
    <form action="?/updateLanguage" method="POST" class="flex flex-col items-center space-y-2 w-full pt-4">
        <Input
            id="name"
            label="Language"
            value={form?.data?.name ?? data.language.name}
            errors={form?.errors?.name}
        />
        <div class="form-control w-full max-w-lg">
            <label for="proficiency" class="label font-medium pb-1">
                <span class="label-text">Proficiency level</span>
            </label>
            <select 
                name="proficiency" 
                id="proficiency" 
                class="select select-bordered w-full" 
                value={form?.data?.proficiency ?? data.language.proficiency}
            >
                <option value="">Select proficiency level</option>
                {#each proficiencyLevels as level}
                    <option value={level.value}>{level.label}</option>
                {/each}
            </select>
            {#if form?.errors?.proficiency}
                <label class="label">
                    <span class="label-text-alt text-error">{form.errors.proficiency}</span>
                </label>
            {/if}
        </div>
        <div class="w-full max-w-lg pt-2 flex space-x-2">
            <a href="/languages" class="btn btn-outline flex-1">Cancel</a>
            <button type="submit" class="btn btn-primary flex-1">Update language</button>
        </div>
    </form>
</div>