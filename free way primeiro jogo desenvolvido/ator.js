//codigos do ator

let xAtor = 80;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor (){
  image(imagemDoAtor, 80, yAtor,30, 30);
}
  
  function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover())
    yAtor += 3;
  } 
}
//collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)

function verificaColisao(){
  for(let i = 0; i < imagemCarros.length; i = i + 1){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
     voltaPosicaoInicial();
     somDaColisao.play();
      if (pontosMaiorQueZero()){
          meusPontos -= 1;
        
    }
  }
  
}
}

function voltaPosicaoInicial (){
  yAtor = 366
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25)
  fill(color(0,0,128))
  text(meusPontos, width / 5, 28);
}

function marcaPonto(){
  if(yAtor < 15){
    meusPontos += 1
    voltaPosicaoInicial();
    somDoPonto.play();
  } 
}

function pontosMaiorQueZero(){
  return meusPontos > 0
}

function podeSeMover(){
  return yAtor < 366;
}