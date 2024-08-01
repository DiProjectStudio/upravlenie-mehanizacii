// Открытие списка опций по меню в header
function headerCloseAction() {
    let actionHeaderLinks = document.querySelectorAll('.header__bottom .menu-nav__list .list-item.action-link');
    actionHeaderLinks.forEach(link => {
        link.addEventListener('click', (linkEvent) => {
            link.classList.toggle('active');

            // скрытие списка по клику на любом месте, кроме списка
            document.addEventListener('click', function (event) {
                if (!event.composedPath().includes(link)) {
                    link.classList.remove('active');
                }
            });
        });
    })
}

document.addEventListener('resize', ()=> {
    if (document.documentElement.clientWidth < 1200) {
        headerCloseAction()
    }
})



document.addEventListener('DOMContentLoaded', function () {
    const pageElement = document.getElementById('page');
    const headerElement = document.getElementById('header');

    headerCloseAction();

    // Копирование списка контактов из header top в header bottom
    (function copyAndPasteContacts () {
        const headerContacts = document.getElementById('header__contacts');
        const headerNavListElement = document.querySelector('#headerBottom .header__menu-nav');
        const cloneHeaderContacts = headerContacts.cloneNode(true);
        headerNavListElement.appendChild(cloneHeaderContacts);
    })();

    // Открытие и скрытие навбара
    (function toggleNavbar() {
        const burgerItemElement = document.getElementById('burger');
        const navbarCloseElement = document.getElementById('navbarClose');
        const headerBottom = document.getElementById('headerBottom');


        burgerItemElement.addEventListener('click', (event)=> {
            headerBottom.classList.add('active');
            event.stopPropagation();
            addOverlay();

        });

        navbarCloseElement.addEventListener('click', ()=> {
            headerBottom.classList.remove('active');
            removeOverlay();
        });

        document.addEventListener('click', (event) => {
            if (headerBottom && !headerBottom.contains(event.target)) { // Проверка, что клик вне headerBottom
                headerBottom.classList.remove('active'); // Скрытие headerBottom
                removeOverlay();
            }
        });
    })();

    function addOverlay() {
        pageElement.classList.add('bg-overlay');
        headerElement.classList.add('bg-overlay');
    }

    function removeOverlay() {
        pageElement.classList.remove('bg-overlay');
        headerElement.classList.remove('bg-overlay');
    }
});