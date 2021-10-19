const dino = document.querySelector('.dino');
const background = document.querySelector('.background');

let pulando = false;
let posicao = 0;

function soltarTecla(event) {
  if (event.keyCode === 32) {
    if(!pulando) {
    pular();
    }
  }
}

function pular() {
  pulando = true;

  let upInterval = setInterval(() => {
    if(posicao >= 150) {
      //dinossauro desce
      clearInterval(upInterval);

      let downInterval = setInterval(() => {
        if(posicao <= 0){
          clearInterval(downInterval);
          pulando = false;
        } else{
        posicao = posicao - 20;
        dino.style.bottom = posicao + 'px';
        }
      }, 20);

    } else {
      //dinossauro sobe
      posicao = posicao + 20;
      dino.style.bottom = posicao + 'px';
    }
  }, 20);
}

function criarCactus() {
  const cactus = document.createElement('div')
  let posicaoCactus = 1000;
  let aleatorio = Math.random() * 6000;

  cactus.classList.add('cactus');
  cactus.style.left = 1000 + 'px'
  background.appendChild(cactus);

  let leftInterval = setInterval(() => {
    if(posicaoCactus < -60){
      clearInterval(leftInterval);
      background.removeChild(cactus);

    } else if (posicaoCactus > 0 && posicaoCactus < 60 && posicao < 60) {
      //fim de jogo
      clearInterval(leftInterval);
      
      document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';

    } else {
      posicaoCactus = posicaoCactus - 10;
      cactus.style.left = posicaoCactus + 'px';
    }
  }, 20);

  setTimeout(criarCactus, aleatorio)
}


criarCactus();
document.addEventListener('keyup', soltarTecla);