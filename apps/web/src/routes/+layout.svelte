<script>
	import { page } from '$app/stores';
	import MynauiCogOne from '~icons/mynaui/cog-one';
	import MynauiLogoutSolid from '~icons/mynaui/logout-solid';
	import MynauiAcademicHat from '~icons/mynaui/academic-hat';

	import '../app.css';

	export let data;
</script>

{#if !data.user}
<div class="min-h-full">
	<nav class="navbar bg-base-100 border-b">
		<div class="flex-1">
			<a href="/" class="btn btn-ghost normal-case text-xl">Showcase</a>
		</div>
		<div class="flex-none">
			<div class="dropdown dropdown-end">
				<a href="/login" class="btn btn-primary">Login</a>
				<a href="/register" class="btn btn-secondary">Register</a>
			</div>
		</div>
	</nav>
	<div class="py-4">
		<div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
			<slot />
		</div>
	</div>
</div>
{:else}
<div class="min-h-screen flex">
	<nav class="bg-base-100 border-r w-24 h-screen flex flex-col p-4">
		<div class="mb-6">
			<a href="/" class="btn btn-ghost normal-case text-xl">CV</a>
		</div>
		<div class="flex flex-col h-full">
			<div class="flex-grow">
				<a 
					href="/education/" 
					class="btn btn-ghost normal-case text-xl rounded-xl {$page.url.pathname.startsWith('/education') ? 'border-2 border-black' : ''}"
				>
					<MynauiAcademicHat />
				</a>
			</div>
			<div class="mt-auto space-y-4">
				<a 
					href="/settings/" 
					class="btn btn-ghost normal-case text-xl rounded-xl {$page.url.pathname.startsWith('/settings') ? 'border-2 border-black' : ''}"
				>
					<MynauiCogOne />
				</a>
				<form action="/logout" method="POST">
					<button class="btn btn-ghost normal-case text-xl" type="submit"><MynauiLogoutSolid /></button>
				</form>
			</div>
		</div>
	</nav>
	<div class="flex-grow py-4">
		<div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
			<slot />
		</div>
	</div>
</div>
{/if}
