// Botão
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};


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
 
//Esconder Header
 let lastScrollTop = 0;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Rolar para baixo
        header.classList.add('hide');
      } else {
        // Rolar para cima
        header.classList.remove('hide');
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

 
