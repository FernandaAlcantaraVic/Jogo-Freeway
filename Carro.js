
//códigos dos carros
let yCarros= [40,100,150,210,270,320];
let velocidadesCarros= [2,3,5,4,2,3.4];
let xCarros= [600,600,600,600,600,600];
let comprimentoCarro=50;
let alturaCarro= 40;

function mostraCarro(){
  let i;
  for(i=0; i<imagemCarros.length; i++){
    image(imagemCarros[i],xCarros[i],yCarros[i],comprimentoCarro,alturaCarro);
    
  }
 
}


function movimentaCarro(){
  let i;
  for(i=0; i<imagemCarros.length; i++ ){
    xCarros[i] -=velocidadesCarros[i];
  }
  
}

function voltaPosicaoInicial(){
  let i;
  
  for(i=0; i<imagemCarros.length; i++){
       if(passouTodaTela(xCarros[i])){
        xCarros[i]= 600;
        }
  }
  
}

function passouTodaTela(xCarros){
  return xCarros< -50;
}