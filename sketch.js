


function setup() {
  
  createCanvas(500, 400);
  trilhaSonora.loop();
}

function draw() {
  background(imagemEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicial();
  verificaColisao();
  incluiPontos();
  marcaPonto();
  
}



