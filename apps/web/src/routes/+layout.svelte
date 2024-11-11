<script>
	import { page } from '$app/stores';
	import MynauiCogOne from '~icons/mynaui/cog-one';
	import MynauiLogoutSolid from '~icons/mynaui/logout-solid';
	import MynauiAcademicHat from '~icons/mynaui/academic-hat';
	import MynauiRocket from '~icons/mynaui/rocket';
	import MynauiBriefcase from '~icons/mynaui/briefcase';
	import MynauiFileText from '~icons/mynaui/file-text';
	import MynauiChat from '~icons/mynaui/chat';

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
	<nav class="bg-base-100 border-r w-24 sticky top-0 flex flex-col p-4 h-screen">
		<div class="mb-6">
			<a href="/" class="btn btn-ghost normal-case text-xl">CV</a>
		</div>
		<div class="flex flex-col flex-1">
			<div class="space-y-4">
				<div class="tooltip tooltip-right" data-tip="Job applications">
					<a 
						href="/job-applications/" 
						class="btn btn-ghost normal-case text-xl rounded-xl {$page.url.pathname.startsWith('/job-applications') ? 'border-2 border-black' : ''}"
					>
						<MynauiRocket />
					</a>
				</div>
				<div class="divider my-4" />
				<div class="tooltip tooltip-right" data-tip="Positions">
					<a 
						href="/positions/" 
						class="btn btn-ghost normal-case text-xl rounded-xl {$page.url.pathname.startsWith('/positions') ? 'border-2 border-black' : ''}"
					>
						<MynauiBriefcase />
					</a>
				</div>
				<div class="tooltip tooltip-right" data-tip="Education">
					<a 
						href="/education/" 
						class="btn btn-ghost normal-case text-xl rounded-xl {$page.url.pathname.startsWith('/education') ? 'border-2 border-black' : ''}"
					>
						<MynauiAcademicHat />
					</a>
				</div>
				<div class="tooltip tooltip-right" data-tip="Certificates & licenses">
					<a 
						href="/certificates/" 
						class="btn btn-ghost normal-case text-xl rounded-xl {$page.url.pathname.startsWith('/certificates') ? 'border-2 border-black' : ''}"
					>
						<MynauiFileText />
					</a>
				</div>
				<div class="tooltip tooltip-right" data-tip="Languages">
					<a 
						href="/languages/" 
						class="btn btn-ghost normal-case text-xl rounded-xl {$page.url.pathname.startsWith('/languages') ? 'border-2 border-black' : ''}"
					>
						<MynauiChat />
					</a>
				</div>
			</div>
			<div class="mt-auto space-y-4">
				<div class="tooltip tooltip-right" data-tip="Settings">
					<a 
						href="/settings/" 
						class="btn btn-ghost normal-case text-xl rounded-xl {$page.url.pathname.startsWith('/settings') ? 'border-2 border-black' : ''}"
					>
						<MynauiCogOne />
					</a>
				</div>
				<div class="tooltip tooltip-right" data-tip="Logout">
					<form action="/logout" method="POST">
						<button class="btn btn-ghost normal-case text-xl rounded-xl" type="submit">
							<MynauiLogoutSolid />
						</button>
					</form>
				</div>
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
