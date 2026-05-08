document.addEventListener('DOMContentLoaded', () => {
    const activeLink = document.querySelector('.submenu a.bg-gray-800.text-white');
    const activeMenu = activeLink ? activeLink.closest('.submenu') : document.getElementById('dashboard');
    const activeIcon = activeMenu ? document.getElementById(activeMenu.id + '-icon') : null;

    if (activeMenu && activeIcon) {
        activeMenu.classList.add('open');
        activeIcon.classList.add('rotate-180');
    }
});

function toggleMenu(menuId) {
    const menu = document.getElementById(menuId);
    const icon = document.getElementById(menuId + '-icon');
    
    // Check if the menu and icon elements were found
    if (!menu || !icon) {
        console.error("Menu or icon not found for ID:", menuId);
        return;
    }

    if (menu.classList.contains('open')) {
        // Close the clicked menu
        menu.classList.remove('open');
        icon.classList.remove('rotate-180');
    } else {
        // (Optional) Close all other open menus before opening this one
        /*
        document.querySelectorAll('.submenu.open').forEach(el => {
            el.classList.remove('open');
            const otherIcon = document.getElementById(el.id + '-icon');
            if(otherIcon) otherIcon.classList.remove('rotate-180');
        });
        */
        
        // Open the clicked menu
        menu.classList.add('open');
        icon.classList.add('rotate-180');
    }
}

// User Profile Dropdown Toggle
const userMenuButton = document.getElementById('user-menu-button');
const userDropdown = document.getElementById('user-dropdown');

if(userMenuButton && userDropdown) {
    userMenuButton.addEventListener('click', () => {
        userDropdown.classList.toggle('hidden');
    });

    // Close dropdown when clicking outside
    window.addEventListener('click', (e) => {
        if (!userMenuButton.contains(e.target) && !userDropdown.contains(e.target)) {
            userDropdown.classList.add('hidden');
        }
    });
}

// Dark Mode Toggle
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

if(themeToggleBtn && themeIcon) {
    // Check local storage or system preference on load
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
        document.documentElement.classList.remove('dark');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    }

    // Toggle theme on click
    themeToggleBtn.addEventListener('click', function() {
        document.documentElement.classList.toggle('dark');
        
        if (document.documentElement.classList.contains('dark')) {
            localStorage.setItem('color-theme', 'dark');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        } else {
            localStorage.setItem('color-theme', 'light');
            themeIcon.classList.replace('fa-sun', 'fa-moon');
        }
    });
}

// Sidebar Toggle for Mobile
const sidebar = document.getElementById('sidebar');
const sidebarToggleBtn = document.getElementById('sidebar-toggle');
const sidebarOverlay = document.getElementById('sidebar-overlay');

if (sidebarToggleBtn && sidebar && sidebarOverlay) {
    sidebarToggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('-translate-x-full');
        sidebarOverlay.classList.toggle('hidden');
    });

    sidebarOverlay.addEventListener('click', () => {
        sidebar.classList.add('-translate-x-full');
        sidebarOverlay.classList.add('hidden');
    });
}
