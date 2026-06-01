const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');
const currentYear = document.querySelector('#current-year');

if (menuToggle && navigation) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}
