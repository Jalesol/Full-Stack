document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('button');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      button.classList.add('is-clicked');
      setTimeout(() => button.classList.remove('is-clicked'), 120);
    });
  });

  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach((link) => {
    link.addEventListener('mouseover', () => {
      link.style.opacity = '1';
    });

    link.addEventListener('mouseout', () => {
      link.style.opacity = '0.9';
    });
  });
});
