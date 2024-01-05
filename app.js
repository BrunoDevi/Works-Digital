//MENU TAB -start
document.querySelector('.menu-button').addEventListener('click', () => { 
    var menu = document.querySelector('.menu');
    menu.classList.toggle('open-menu');
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

//VIDEO SETTINGS - start
const video = document.querySelector('.banner__video');
//video.play();
//VIDEO SETTINGS - end

//CONTADOR - start
const telaDeTempo = document.querySelector('.cronometro__telaContador');
let contador = 22320 //tempo em segundos

const contagemRegresiva = ()=>{
    if(contador <= 0){ // Executa ao final da contagem
        telaDeTempo.innerHTML = 'Tempo Encerrado'
    }
    
    contador -= 1; // Loop do temporizador
    displayTime()
}

temporizador = setInterval(contagemRegresiva, 1000); // Executa ao iniciar

function displayTime(){ // Mostra o contador na tela
    let tempo = new Date(contador * 1000);
    let tempoFormatado = tempo.toLocaleString('pt-Br', {hour: '2-digit', minute: '2-digit', second: '2-digit'});
    telaDeTempo.innerHTML = `${tempoFormatado}`;
}

displayTime(); //mantem o contador em display na tela
//CONTADOR - end

//FAQ config - start
const cardList = document.querySelectorAll('.FAQ__card__container')

for(let i = 0; i < cardList.length; i++){
    cardList[i].onclick = () => {
        let card = document.querySelector(`.FAQ__card__container--${i}`);
        let resposta = card.querySelector('.FAQ__card__resposta');
        let arrow = card.querySelector('.arrow_img');

        resposta.classList.toggle('hide');

        if(resposta.classList.contains('hide')){
            arrow.style.transform = 'scaleY(-1)'
        }else{
            arrow.style.transform = 'scaleY(1)'
        }

    }
}
//FAQ config - end

//MENU config-start
function scrollToSection(id){
    let section = document.getElementById(id);

    window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
    })
}
//MENU config - end