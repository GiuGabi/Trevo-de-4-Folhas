let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};

// Fecha menu ao rolar
window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
};

ScrollReveal({ 
    reset: true,
    distance: '60px',
    duration: 2000,
    delay: 200 
  });
  
  ScrollReveal().reveal('.home .content, .heading', { origin: 'top' });
  ScrollReveal().reveal('.home .image, .btn', { origin: 'bottom' });
  ScrollReveal().reveal('.sobre-nos, .membros-container, .atividade-grid', { origin: 'right' });
  

// Swiper carrossel: Projeto
const swiper = new Swiper('.projeto-swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    spaceBetween: 30,
  });
  
  //Desaparecer header
  let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {

    header.classList.add('hide');
  } else {

    header.classList.remove('hide');
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
