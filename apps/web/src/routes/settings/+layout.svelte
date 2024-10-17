<script>
    import { page } from '$app/stores'
    import { afterNavigate } from '$app/navigation';

    import MynauiUserSquare from '~icons/mynaui/user-square';
    import MynauiLockSquare from '~icons/mynaui/lock-square';
    import MynauiCreditCard from '~icons/mynaui/credit-card';

    const navigation = [
        {
            title: 'Profile',
            icon: MynauiUserSquare,
            href: '/settings/profile'
        },
        {
            title: 'Security',
            icon: MynauiLockSquare,
            href: '/settings/security'
        },
        {
            title: 'Credits',
            icon: MynauiCreditCard,
            href: '/settings/credits'
        }
    ]

    let currentPath;

    afterNavigate(() => {
        currentPath = $page.url.pathname;
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
