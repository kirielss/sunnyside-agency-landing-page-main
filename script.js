const title = document.querySelector('.title');
const arrow = document.querySelector('.arrow-down')
const menu = document.querySelector('.hidden-menu');

function toggleMenu() {
    if (menu.style.display === 'none') {
        title.classList.add('hide');
        arrow.classList.add('hide');
        menu.style.display = 'flex';
    }
    else {
        title.classList.remove('hide');
        arrow.classList.remove('hide');
        menu.style.display = 'none';
    }
}