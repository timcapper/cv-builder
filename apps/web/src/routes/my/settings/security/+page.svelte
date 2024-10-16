<script lang="ts">
	import { enhance, applyAction } from '$app/forms';
    import { invalidateAll } from '$app/navigation';
    import { Input, Modal } from '$lib/components';

    export let form;
    export let data;

    let emailModalOpen = false;
    let deleteAccountModalOpen = false;
    let loading = false;

    const submitUpdateEmail = () => {
        loading = true;
        emailModalOpen = true;
        return async ({ result }) => {
            switch (result.type) {
                case 'success':
                    await invalidateAll();
                    emailModalOpen = false;
                    break;
                case 'error':
                    console.log(result);
                    break;
                default:
                    await applyAction(result);
            }
            loading = false;
        };
    };

    const submitDeleteAccount = () => {
        loading = true;
        deleteAccountModalOpen = true;
        return async ({ result }) => {
            switch (result.type) {
                case 'success':
                    await invalidateAll();
                    deleteAccountModalOpen = false;
                    loading = false;
                    break;
                case 'error':
                    console.log(result);
                    break;
                default:
                    await applyAction(result);
                    loading = false;
            }
        };
    };
</script>

<div class="flex flex-col w-full h-full">
    <div class="flex flex-col space-y-4 w-full">
        <h3 class="text-2xl font-medium">Email</h3>
        <p>Your email address is <strong>{data?.user?.email}</strong>.</p>
        <Modal label="change-email" checked={emailModalOpen}>
            <span slot="trigger" class="btn btn-primary w-full max-w-lg">Change email</span>
            <h3 slot="heading">Change your email</h3>
            <form action="?/updateEmail" method="POST" class="space-y-2" use:enhance={submitUpdateEmail}>
                <Input
                    id="email"
                    type="email"
                    label="Enter your new email address"
                    required={true}
                    value={form?.data?.email}
                    disabled={loading}
                    errors={form?.errors?.email}
                />
                <button type="submit" class="btn btn-primary w-full max-w-lg" disabled={loading}>Change email</button>
            </form>
        </Modal>
    </div>
    <div class="w-full">
        <form action="?/updatePassword" method="POST" class="flex flex-col space-y-2 w-full">
            <div class="divider" />
            <h3 class="text-2xl font-medium">Password</h3>
            <Input
                id="oldPassword"
                label= "Enter your current password"
                type="password" 
                required
                errors={form?.errors?.oldPassword}
            />
            <a href="/reset-password" class="test-primary hover:cursor-point hover:underline">Forgot your password?</a>
            <Input
                id="password"
                label= "Enter your new password"
                type="password"
                required
                errors={form?.errors?.password}
            />
            <Input
                id="passwordConfirm"
                label= "Re-enter your new password"
                type="password"
                required
                errors={form?.errors?.passwordConfirm}
            />
            <div class="w-full max-w-lg pt-3">
                <button type="submit" class="btn btn-primary w-full max-w-lg">Change password</button>
            </div>
        </form>
    </div>
    <div class="flex flex-col space-y-4 w-full">
        <div class="divider" />
        <h3 class="text-2xl font-medium">Delete account</h3>
        <p>Deleting your account will delete all your data and cannot be undone.</p>
        <Modal label="delete-account" checked={deleteAccountModalOpen}>
            <span slot="trigger" class="btn btn-warning w-full max-w-lg">Delete account</span>
            <h3 slot="heading">Delete your account</h3>
            <form action="?/deleteAccount" method="POST" class="space-y-2" use:enhance={submitDeleteAccount}>
                <Input
                    id="deleteAccountPassword"
                    type="password"
                    label="Enter your password"
                    required={true}
                    value={form?.data?.password}
                    disabled={loading}
                />
                {#if form?.errors?.deleteAccountPassword}
                    <p class="text-red-500">{form.errors.deleteAccountPassword}</p>
                {/if}
                <button type="submit" class="btn btn-warning w-full max-w-lg" disabled={loading}>Delete account</button>
            </form>
        </Modal>
    </div>
</div>
