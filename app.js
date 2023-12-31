document.querySelector('.menu-button').addEventListener('click', () => { //MENU TAB
    var menu = document.querySelector('.menu');
    menu.classList.toggle('open-menu');
})

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