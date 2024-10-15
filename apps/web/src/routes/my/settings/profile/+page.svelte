<script>
	import { enhance, applyAction } from "$app/forms";
    import { invalidateAll } from "$app/navigation";
	import { Input } from "$lib/components";

    export let data;
    let loading;

    $: loading = false

    const submitUpdateProfile = () => {
        loading = true
        return async ({ result }) => {
            switch (result.type) {
                case 'success':
                    await invalidateAll();
                    break;
                case 'error':
                    break;
                default:
                    await applyAction(result);
            }
            loading = false;
        }
    };
</script>

<div class="flex flex-col w-full h-full">
    <form action="?/updateProfile" method="POST" class="flex flex-col space-y-2 w-full" use:enhance={submitUpdateProfile}>
        <h3 class="text-2xl">Update profile</h3>
        <Input id="firstName" label="First name" value={data?.user?.firstName} disabled={loading} />
        <Input id="lastName" label="Last name" value={data?.user?.lastName} disabled={loading} />
        <Input id="location" label="Location" value={data?.user?.location} disabled={loading} />
        <Input id="linkedIn" label="LinkedIn profile" value={data?.user?.linkedIn} disabled={loading} />
        <Input id="github" label="Github profile" value={data?.user?.github} disabled={loading} />
        <Input id="gitlab" label="Gitlab profile" value={data?.user?.gitlab} disabled={loading} />
        <Input id="googleScholar" label="Google scholar" value={data?.user?.googleScholar} disabled={loading} />
        <div class="w-full max-w-lg pt-3">
            <button class="btn btn-primary w-full max-w-lg" type="submit">
                Update profile
            </button>
        </div>
    </form>
</div>