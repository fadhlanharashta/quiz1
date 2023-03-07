// toggle active sidebar
const navbarnav = document.querySelector('.navbar-navigation');
document.querySelector('#quickmenu').onclick = () => {
    navbarnav.classList.toggle('active');
};