//variaveis do carro

let xCarros = [500, 600, 550, 600, 540, 600]
let yCarros = [40, 96, 148, 210, 270, 314];
let velocidadeCarros = [2.1, 3.3, 2.6, 5, 3.4, 2.7]
let comprimentoCarro = 55
let alturaCarro = 35

  
function mostraCarro(){
  for(let i = 0; i< imagemCarros.length; i++){
  image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
}
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i]; 
  }
}
  
function voltaPosicaodoCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    if(passouTodaTela(xCarros[i])){
      xCarros[i] = 600;
  }
  }
}

 function passouTodaTela(xCarros){
  return xCarros < - 50;
   
 }

