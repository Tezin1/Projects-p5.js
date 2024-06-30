  //variaveis da bolinha
  let xBolinha = 400;
  let yBolinha = 200;
  let diametro = 30;
  let raio = diametro / 2;
   
    //velocidade da bolinha
  let velocidadexBolinha = 9;
  let velocidadeyBolinha = 8;
  
    //variaveis da raquete
  let xRaquete = 5;
  let yRaquete = 150;
  let raqueteComprimento = 10;
  let raqueteAltura = 100;
  let colidiu = false;
  
  
   //variaveis raquete2
  let xRaquete2 = 785;
  let yRaquete2 = 150;
  let velocidadeyRaquete2 
  
   //Placar do jogo
  let meusPontos = 0;
  let pontosDoOponente = 0;
  
  //Sons do jogo
  let Raquetada;
  let ponto;
  let trilha;
  
  function preload() {
    trilha = loadSound("trilha.mp3");
    ponto = loadSound("ponto.wav");
    raquetada = loadSound("hard.wav");
    }
    
  
  
  function setup() {
    createCanvas(800,400);
    trilha.loop();
  }
  
  function draw() {
    background(0);
    mostraBolinha();
    movimentaBolinha();
    verificaColisaoBorda();
    mostraRaquete();
    movimentaMinhaRaquete();
    colisaoMinhaRaqueteBiblio()
    colisaoRaqueteOponenteBiblio();
    movimentaRaquete2();
    incluiPlacar();
    marcaPontos();
  }
  
  function mostraBolinha(){
     circle(xBolinha,yBolinha,diametro);
  }
  
  function movimentaBolinha(){
    xBolinha += velocidadexBolinha;
    yBolinha += velocidadeyBolinha;
  }
  
  function verificaColisaoBorda(){
     if (xBolinha + raio > width || xBolinha - raio < 0 ){
      velocidadexBolinha *= -1;
     }
    if (yBolinha + raio > height || yBolinha - raio < 0){
      velocidadeyBolinha *= -1;
    }
  }
  function mostraRaquete() {
      rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura);
      rect(xRaquete2, yRaquete2, raqueteComprimento, raqueteAltura)
  }
  
  function movimentaMinhaRaquete(){
    if (keyIsDown (UP_ARROW)) {
      yRaquete -= 10;
    }
      
      if (keyIsDown(DOWN_ARROW)){
        yRaquete += 10;
   }
  }
  function colisaoMinhaRaqueteBiblio() {
   colidiu =  collideRectCircle(xRaquete,yRaquete,raqueteComprimento,raqueteAltura,xBolinha,yBolinha,raio)
    if (colidiu) {
      velocidadexBolinha *= -1;
      raquetada.play();
      
    }
  }
  
  function colisaoRaqueteOponenteBiblio() {
   colidiu =  collideRectCircle(xRaquete2,yRaquete2,raqueteComprimento,raqueteAltura,xBolinha,yBolinha,raio)
    if (colidiu) {
      velocidadexBolinha *= -1;
      raquetada.play();
      }  
  }
    
    
  
  function movimentaRaquete2 (){
    if (keyIsDown (87)) {
      yRaquete2 -= 10;
    }
      
      if (keyIsDown(83)){
        yRaquete2 += 10;
  }
   }
  
  function incluiPlacar() {
    stroke(255);
    textSize(25);
    textAlign(CENTER);
    fill(color(148,0,211));
    rect(280,6,40,20);
    fill (255)
    text(meusPontos,300,25);
    fill(color(148,0,211));
    rect(480,6,40,20);
    fill (255);
    text(pontosDoOponente,500,25);
  }
  
  function marcaPontos() {
    if (xBolinha > 785) {
      meusPontos += 1;
      ponto.play();
    }
    if (xBolinha < 15) {
      pontosDoOponente += 1;
      ponto.play();
    } 
  }
  
  