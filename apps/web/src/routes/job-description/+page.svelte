<script>
	import { Input } from "$lib/components";

    export let data;
</script>

<div class="flex flex-col w-full h-full">
    <form action="?/newJobDescription" method="POST" class="flex flex-col space-y-2 w-full" enctype="multipart/form-data">
        <h3 class="text-2xl">Add a job description automatically</h3>
        <label for="jobDescriptionUpload" class="label font-medium pb-1">
            <span class="label-text">Upload a job decription</span>
        </label>
        <input type="file" name="jobDescriptionUpload" id="jobDescriptionUpload" accept="application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, image/png, image/jpeg, image/gif" class="file-input file-input-bordered w-full max-w-lg" />
        <label for="jobDescriptionLink" class="label font-medium pb-1">
            <span class="label-text">Take a job description from a website</span>
        </label>
        <Input id="jobDescriptionLink" label="Link to job description" value={data?.jobDescription?.jobDescriptionLink} />
        <div class="divider pt-5 pb-5 w-full max-w-lg">OR</div>
        <h3 class="text-2xl">Add a job description manually</h3>
        <Input id="company" label="Company" value={data?.jobDescription?.company} />
        <Input id="jobTitle" label="Job Title" value={data?.jobDescription?.jobTitle} />
    </form>
</div>