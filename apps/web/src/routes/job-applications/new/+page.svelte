<script>
    import { Input } from "$lib/components";
    
    export let form;

    let activeTab = 'upload';
</script>

<div class="flex flex-col items-center h-full w-full">
    <h2 class="mt-2 text-center text-3xl font-bold tracking-tight text-base-content">
        Start a new job application
    </h2>
    <p class="text-center max-w-2xl mb-6">You can add a job description by uploading a file, linking to the job posting, or by entering the details manually.</p>

    <div class="tabs tabs-boxed bg-base-200 p-1 gap-2 mb-6">
        <button 
            type="button"
            class="tab tab-lg transition-all duration-200 hover:bg-base-100 {activeTab === 'upload' ? 'tab-active bg-primary text-primary-content' : ''}" 
            on:click={() => activeTab = 'upload'}>Upload File</button>
        <button 
            type="button"
            class="tab tab-lg transition-all duration-200 hover:bg-base-100 {activeTab === 'link' ? 'tab-active bg-primary text-primary-content' : ''}" 
            on:click={() => activeTab = 'link'}>Provide Link</button>
        <button 
            type="button"
            class="tab tab-lg transition-all duration-200 hover:bg-base-100 {activeTab === 'manual' ? 'tab-active bg-primary text-primary-content' : ''}" 
            on:click={() => activeTab = 'manual'}>Enter Manually</button>
    </div>

    <!-- Upload File Option -->
    <form 
        action="?/uploadJobDescription" 
        method="POST" 
        enctype="multipart/form-data" 
        class="flex flex-col items-center space-y-2 w-full max-w-lg" 
        class:hidden={activeTab !== 'upload'}
    >
        <div class="form-control w-full">
            <label for="jobDescriptionFile" class="label">
                <span class="label-text">Upload job description document</span>
            </label>
            <input 
                type="file" 
                name="jobDescriptionFile"
                id="jobDescriptionFile"
                accept=".pdf,.doc,.docx,.txt"
                class="file-input file-input-bordered w-full" 
            />
            {#if form?.errors?.jobDescriptionFile}
                <label class="label" for="jobDescriptionFile">
                    <span class="label-text-alt text-error">{form.errors.jobDescriptionFile}</span>
                </label>
            {/if}
        </div>
        <button type="submit" class="btn btn-primary w-full">Upload description</button>
    </form>

    <!-- Link Option -->
    <form 
        action="?/submitJobLink" 
        method="POST" 
        class="flex flex-col items-center space-y-2 w-full max-w-lg"
        class:hidden={activeTab !== 'link'}
    >
        <Input
            id="jobUrl"
            label="Job posting URL"
            type="url"
            value={form?.data?.jobUrl}
            errors={form?.errors?.jobUrl}
        />
        <button type="submit" class="btn btn-primary w-full">Submit link</button>
    </form>

    <!-- Manual Entry Option -->
    <form 
        action="?/submitManualJob" 
        method="POST" 
        class="flex flex-col items-center space-y-2 w-full max-w-lg"
        class:hidden={activeTab !== 'manual'}
    >
        <Input
            id="companyName"
            label="Company name"
            value={form?.data?.companyName}
            errors={form?.errors?.companyName}
        />
        <Input
            id="jobTitle"
            label="Job title"
            value={form?.data?.jobTitle}
            errors={form?.errors?.jobTitle}
        />
        <div class="form-control w-full">
            <label for="jobDescription" class="label">
                <span class="label-text">Job description</span>
            </label>
            <textarea
                id="jobDescription"
                name="jobDescription"
                class="textarea textarea-bordered h-32"
                value={form?.data?.jobDescription}
            ></textarea>
            {#if form?.errors?.jobDescription}
                <label class="label" for="jobDescription">
                    <span class="label-text-alt text-error">{form.errors.jobDescription}</span>
                </label>
            {/if}
        </div>
        <button type="submit" class="btn btn-primary w-full">Submit job details</button>
    </form>
</div>