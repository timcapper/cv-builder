<script>
    export let form

</script>

<div class="flex flex-col items-center h-full w-full">
    <h2 class="mt-2 text-center text-3xl font-bold tracking-tight text-base-content">
        Reset your password
    </h2>
    <p class="text-center mt-1">
        Or <a href="/login" class="text-primary font-medium hover:cursor-pointer hover:underline">login</a> if you know your password.
    </p>
    <form action="?/resetPassword" method="POST" class="flex flex-col items-center space-y-2 w-full max-w-md pt-4">
        <div class="form-control w-full max-w-md">
            <label for="email" class="label font-medium pb-1">
                <span class="label-text">Email</span>
            </label>
            <input type="email" name="email" class="input input-bordered w-full max-w-md" />
        </div>
        <div class="w-full max-w-md pt-2">
            <button type="submit" class="btn btn-primary w-full">Request password reset</button>
        </div>
        {#if form?.success}
            <div role="alert" class="alert alert-success w-full max-w-md">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24">
                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Check your emails to reset your password.</span>
            </div>
        {/if}
    </form>
</div>