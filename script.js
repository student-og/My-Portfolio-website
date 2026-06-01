const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');
const currentYear = document.querySelector('#current-year');

if (menuToggle && navigation) {
  const setMenuState = (isOpen) => {
    navigation.classList.toggle('open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    const hideNav = !isOpen && window.matchMedia('(max-width: 768px)').matches;
    navigation.setAttribute('aria-hidden', String(hideNav));
  };

  menuToggle.addEventListener('click', () => {
    const isOpen = navigation.classList.contains('open');
    setMenuState(!isOpen);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navigation.classList.contains('open')) {
      setMenuState(false);
      menuToggle.focus();
    }
  });

  document.addEventListener('click', (event) => {
    if (
      navigation.classList.contains('open') &&
      !navigation.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      setMenuState(false);
    }
  });

  setMenuState(false);
}

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}
