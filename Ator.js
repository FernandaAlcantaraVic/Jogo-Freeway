
//variáveis do ator
let xAtor=100;
let yAtor=370;
let colisao= false;
let meusPontos=0;


function mostraAtor(){
   image(imagemAtor,xAtor,yAtor,30,30);
}

function movimentaAtor(){
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
       yAtor+= 2;
    }
   
    
  }if(keyIsDown(UP_ARROW)){
    yAtor -=2;
  }if(keyIsDown(RIGHT_ARROW)){
    xAtor +=2;
  }if(keyIsDown(LEFT_ARROW)){
    xAtor -=2;
  }
}

function verificaColisao(){
  for(let i=0; i< imagemCarros.length; i++){
    colisao= collideRectCircle(xCarros[i], yCarros[i],comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
       
    if(colisao){
      yAtor=370;
      if(pontosMaiorQueZero()){
        somColisao.play();
          meusPontos-=1;
       
      }
    }
   
  }
}

function incluiPontos(){
  
  textAlign(CENTER);
  textSize(25);
  fill(color(0,255,255));
  text(meusPontos,width/5, 26);
  
}

function marcaPonto(){
  
  if(yAtor<15){
   somPonto.play();
   yAtor=370;
     meusPontos ++;
   
  }
}

function pontosMaiorQueZero(){
 return meusPontos>0;
  
}

function podeSeMover(){
  return yAtor< 370;
}
