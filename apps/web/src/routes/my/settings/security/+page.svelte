<script>
    import { Input } from "$lib/components";

    export let form;
</script>

<div class="flex flex-col w-full h-full">
    <div class="w-full">
        <form action="?/updatePassword" method="POST" class="flex flex-col space-y-2 w-full">
            <h3 class="text-2xl font-medium">Change password</h3>
            <Input
                id="oldPassword"
                label= "Old password"
                type="password" 
                required
                errors={form?.errors?.oldPassword}
            />
            <a href="/reset-password" class="test-primary hover:cursor-point hover:underline">Forgot your password? Click here to reset it</a>
            <Input
                id="password"
                label= "New password"
                type="password"
                required
                errors={form?.errors?.password}
            />
            <Input
                id="passwordConfirm"
                label= "Confirm new password"
                type="password"
                required
                errors={form?.errors?.passwordConfirm}
            />
            <div class="w-full max-w-lg pt-3">
                <button type="submit" class="btn btn-primary w-full max-w-lg">Update password</button>
            </div>
        </form>
    </div>
</div>