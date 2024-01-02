//MENU TAB -start
document.querySelector('.menu-button').addEventListener('click', () => { 
    var menu = document.querySelector('.menu');
    menu.classList.toggle('open-menu');

    window.addEventListener('scroll', () =>{
        if (window.scrollY > window.innerHeight / 4) {
            menu.classList.remove('open-menu');
        }
    })
})
//MENU TAB - end

//BOTÃO 'TOPO' - start
function Top() { // adiciona a funcão de voltar ao topo da pagina
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
var botaoTopo = document.querySelector('.botao-topo');

window.addEventListener('scroll', function() {
    // Verifica se a posição de rolagem é maior que a 1/4 da altura da janela
    if (window.scrollY > window.innerHeight / 4) {
        botaoTopo.style.opacity = 1;
    } else {
        botaoTopo.style.opacity = 0;
    }
});
//BOTÃO 'TOPO' - end

//CAROSSEL CONFIG - start
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    speed: 300,
    spaceBetween: 100,
    slidesPerView: 1,

    autoplay: {
        delay: 2000, // tempo em entre cada slide
        disableOnInteraction: false, // mantém o autoplay após a interação do usuário
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        // when window width is >= 1240px
        1040: {
          slidesPerView: 2,
          spaceBetween: 20
        }
      }
});
//CAROSSEL CONFIG - end


const video = document.querySelector('.banner__video');
video.play();