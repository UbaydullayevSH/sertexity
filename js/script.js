const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__menu');

burger.addEventListener('click', () => {
    menu.classList.toggle('active');
    burger.classList.toggle('active'); // 👈 ВАЖНО
});

const leftItems = document.querySelectorAll('.work__wrapper_card, .card, .sertexity__wrapper_card');
const rightItems = document.querySelectorAll('.mini-card, .starting__wrapper_card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2
});

// слева
leftItems.forEach(el => {
  el.classList.add('anim-left');
  observer.observe(el);
});

// справа
rightItems.forEach(el => {
  el.classList.add('anim-right');
  observer.observe(el);
});