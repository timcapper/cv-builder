<script>
    import { page } from '$app/stores'
    import { afterNavigate } from '$app/navigation';

    import MynauiUserSquare from '~icons/mynaui/user-square';
    import MynauiLockSquare from '~icons/mynaui/lock-square';

    const navigation = [
        {
            title: 'Profile',
            icon: MynauiUserSquare,
            href: '/my/settings/profile'
        },
        {
            title: 'Security',
            icon: MynauiLockSquare,
            href: '/my/settings/security'
        },
    ]

    let currentPath;

    afterNavigate(() => {
        currentPath = $page.url.pathname;
        console.log('Navigated to:', currentPath);
    });
</script>

<div class="w-full h-full px-2">
    <h3 class="text-2xl font-medium">Settings</h3>
    <div class="divider" />
</div>
<div class="flex w-full h-full space-x-4">
    <ul class="menu bg-base-100 w-56 p-2 rounded-box">
        {#each navigation as navItem}
            <li class="flex items-left">
                <a 
                    href={navItem.href} 
                    class="font-medium {currentPath === navItem.href ? 'active' : ''} flex items-center space-x-2"
                >
                    <svelte:component this={navItem.icon} class="w-5 h-5" />
                    <span>{navItem.title}</span>
                </a>
            </li>
        {/each}
    </ul>
    <div class="w-full">
        <slot />
    </div>
</div>
