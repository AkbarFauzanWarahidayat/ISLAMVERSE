document.addEventListener('DOMContentLoaded', () => {
  const containerNav = document.querySelector('nav');

  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
      containerNav.style.backgroundColor = '#white';
    } else {
      containerNav.style.backgroundColor = 'rgba(255, 255, 255, 0.911)';
    }
  });

  getSurat();
});
