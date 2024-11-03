<script>
    import { Input } from '$lib/components';
    export let form;
</script>

<div class="flex flex-col items-center h-full w-full">
    <h2 class="mt-2 text-center text-3xl font-bold tracking-tight text-base-content">
        Add new certificate
    </h2>
    <form action="?/newCertificate" method="POST" class="flex flex-col items-center space-y-2 w-full pt-4">
        <Input
            id="name"
            label="Certificate name"
            value={form?.data?.name}
            errors={form?.errors?.name}
        />
        <Input
            id="institution"
            label="Institution"
            value={form?.data?.institution}
            errors={form?.errors?.institution}
        />
        <Input
            id="issueDate"
            label="Issue date"
            type="date"
            value={form?.data?.issueDate}
            errors={form?.errors?.issueDate}
        />
        <Input
            id="expiryDate"
            label="Expiry date"
            type="date"
            value={form?.data?.expiryDate}
            errors={form?.errors?.expiryDate}
        />
        <Input
            id="credentialUrl"
            label="Credential URL"
            type="url"
            value={form?.data?.credentialUrl}
            errors={form?.errors?.credentialUrl}
        />
        <div class="w-full max-w-lg pt-2 flex space-x-2">
            <a href="/certificates" class="btn btn-outline flex-1">Cancel</a>
            <button type="submit" class="btn btn-primary flex-1">Add certificate</button>
        </div>
    </form>
</div>