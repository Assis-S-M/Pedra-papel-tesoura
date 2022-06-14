//Obtendo variaveis do HTML
const Pedra = document.querySelector('#Pedra')
const Papel = document.querySelector('#Papel')
const Tesoura = document.querySelector('#Tesoura')
let ImagemJogador = document.querySelector('#imgPlayer')
let ImagemInimigo = document.querySelector('#imgEnemy')
let PontosJogador = document.querySelector('#j-contador')
let PontosInimigo = document.querySelector('#c-contador')
let Resultado = document.querySelector('#game-result')
let turnosRestantes = document.querySelector('#turnos')
let NovaPartida = document.querySelector('#novaPartida')
let MoveDeleta = document.querySelector('#moveDeleta')
let PontosPlayerDeleta = document.querySelector('#pontosPlayerDeleta')
let PontosEnemyDeleta = document.querySelector('#pontosEnemyDeleta')

//Variaveis para cálculo
let PlayerPoints = 0;
let EnemyPoints = 0;
let Turnos = 10;

//Função para atualizar placares e turnos restantes
function atualizarInfo() {
  PontosJogador.innerHTML = `${PlayerPoints}`;
  PontosInimigo.innerHTML = `${EnemyPoints}`;
  turnosRestantes.innerHTML = `${Turnos}`;
}

//Função de alerta e de nova partida
function alerta() {
  if (Turnos == 0) {
  MoveDeleta.innerHTML = "";
  NovaPartida.innerHTML = "<p style='text-align: center;'>Clique novamente em qualquer<br>opção para uma nova partida</p>";
  }
}

//Função de resultado final
function resultadoFinal() {
  if (Turnos == 0) {
   PontosPlayerDeleta.innerHTML = "";
   PontosEnemyDeleta.innerHTML = "";
   
   if (PlayerPoints > EnemyPoints) {
     Resultado.innerHTML = `Você venceu por: <br>${PlayerPoints} – ${EnemyPoints}`;
   } else if (PlayerPoints < EnemyPoints) {
     Resultado.innerHTML = `Você perdeu por: <br>${EnemyPoints} – ${PlayerPoints}`;
   } else {
     Resultado.innerHTML = `Você empatou por: <br>${EnemyPoints} – ${PlayerPoints}`;
   }
  }
}

//Evento de click da opção Pedra
Pedra.addEventListener("click", () => {
  if (Turnos > 0) {
    
  //Escolha aleatoria do PC
  let escolhaPc = Math.floor(Math.random() * 3 + 1);
  
  //Imagem da opção Pedra no placar
  ImagemJogador.src = "imagens/Rock.png";
  
  //Estrutra condicional de vitória, derrota, ou empate
  if (escolhaPc == 1) {
    ImagemInimigo.src = "imagens/Rock.png";
    Resultado.innerHTML = "Empate";
  } else if (escolhaPc == 2) {
    ImagemInimigo.src = "imagens/Paper.png";
    Resultado.innerHTML = "Derrota";
    EnemyPoints++;
  } else if (escolhaPc == 3) {
    ImagemInimigo.src = "imagens/Scissors.png";
    Resultado.innerHTML = "Vitória";
    PlayerPoints++;
  }
  
  //Diminuição de turnos e funções de atualizamento de informações,  alerta de nova partida e resultado final
  Turnos--;
  atualizarInfo();
  alerta();
  resultadoFinal();
  } else {
    window.location.reload();
  }
});

//Evento de click da opção Papel
Papel.addEventListener("click", () => {
  if (Turnos > 0) {
    
  //Escolha aleatoria do PC
  let escolhaPc = Math.floor(Math.random() * 3 + 1);
  
  //Imagem da opção Papel no placar
  ImagemJogador.src = "imagens/Paper.png";
  
  //Estrutura condicional de vitória, derrota ou empate
  if (escolhaPc == 1) {
    ImagemInimigo.src = "imagens/Rock.png";
    Resultado.innerHTML = "Vitória";
    PlayerPoints++;
  } else if (escolhaPc == 2) {
    ImagemInimigo.src = "imagens/Paper.png";
    Resultado.innerHTML = "Empate";
  } else if (escolhaPc == 3) {
    ImagemInimigo.src = "imagens/Scissors.png";
    Resultado.innerHTML = "Derrota";
    EnemyPoints++;
  }
  
  //Diminuição de turnos e funções de atualizamento de informações, alerta de nova partida e resultado final
  Turnos--;
  atualizarInfo();
  alerta();
  resultadoFinal();
  } else {
    window.location.reload();
  }
});

//Evento de click da opção Tesoura
Tesoura.addEventListener("click", () => {
  if (Turnos > 0) {
    
  //Escolha aleatoria do PC
  let escolhaPc = Math.floor(Math.random() * 3 + 1);
  
  //Imagem da opção Tesoura no placar
  ImagemJogador.src = "imagens/Scissors.png";
  
  //estrutura condicional de vitória, derrota, ou empate
  if (escolhaPc == 1) {
    ImagemInimigo.src = "imagens/Rock.png";
    Resultado.innerHTML = "Derrota";
    EnemyPoints++;
  } else if (escolhaPc == 2) {
    ImagemInimigo.src = "imagens/Paper.png";
    Resultado.innerHTML = "Vitória";
    PlayerPoints++;
  } else if (escolhaPc == 3) {
    ImagemInimigo.src = "imagens/Scissors.png";
    Resultado.innerHTML = "Empate";
  }
  
  //Diminuição de turnos e funções de atualizamento de informações, alerta de nova partida e resultado final
  Turnos--;
  atualizarInfo();
  alerta();
  resultadoFinal();
  } else {
    window.location.reload();
  }
});