/**
 * AloftX theme toggle — dark / light with localStorage + OS preference
 */
window.AloftXTheme = (function () {
    const html = document.documentElement;
    const STORAGE = 'aloftx-theme';

    function getInitialTheme() {
        const saved = localStorage.getItem(STORAGE);
        if (saved === 'dark' || saved === 'light') return saved;
        return 'light';
    }

    function applyTheme(theme, animate) {
        if (animate === true) {
            html.classList.add('theme-animate');
        } else {
            html.style.setProperty('transition', 'none', 'important');
        }
        html.setAttribute('data-theme', theme);
        localStorage.setItem(STORAGE, theme);
        if (animate !== true) {
            void html.offsetHeight;
            html.style.removeProperty('transition');
        }
    }

    function toggleTheme() {
        const current = html.getAttribute('data-theme') || 'light';
        applyTheme(current === 'dark' ? 'light' : 'dark', true);
    }

    function bindToggles() {
        document.querySelectorAll('.theme-toggle').forEach(function (btn) {
            if (btn.dataset.themeBound) return;
            btn.dataset.themeBound = 'true';
            btn.addEventListener('click', function (e) {
                e.preventDefault();
                toggleTheme();
            });
        });
    }

    function init() {
        if (!html.getAttribute('data-theme')) {
            applyTheme(getInitialTheme(), false);
        }
        bindToggles();

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
            if (!localStorage.getItem(STORAGE)) {
                applyTheme(e.matches ? 'dark' : 'light', true);
            }
        });
    }

    return {
        init: init,
        bindToggles: bindToggles,
        applyTheme: applyTheme,
        toggleTheme: toggleTheme,
        getInitialTheme: getInitialTheme,
        STORAGE: STORAGE
    };
})();

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
        window.AloftXTheme.init();
    });
} else {
    window.AloftXTheme.init();
}
