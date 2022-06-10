//Calculo do resultado e mostrador de resultado final de vitoria, derrota ou empate
function calculoResultado(){

  //Variavel que pega o resultado dado pelas funções de escolhas
  let resultAnalise = document.getElementById('game-result').innerText;

  //Condição de vitoria do jogador
  if (resultAnalise == "Vitoria") {
    pontosJogador++;
    document.getElementById('j-contador').innerHTML = pontosJogador;
    
  } //Condição de derrota do jogador
  else if (resultAnalise == "Derrota"){
    pontosInimigo++;
    document.getElementById('c-contador').innerHTML = pontosInimigo;
  } else {}

    //Mostrador de resultado pós jogo  (quando as jogadas acabarem)
    if (numJogadas == 0) {

        //Condição de vitoria pós jogo
        if (pontosJogador > pontosInimigo) {
            document.getElementById('game-result').innerHTML = "Você ganhou";
            
        } //Condição de derrota pós jogo
        else if (pontosJogador < pontosInimigo) {
            document.getElementById('game-result').innerHTML = "Você perdeu";
            
        } //Condição de empate pós jogo
        else if (pontosJogador == pontosInimigo) {
            document.getElementById('game-result').innerHTML = "Você empatou";
        }else {}
    }else {}
    
    //Mostrador de numero restante de jogadas
    document.getElementById('turnos').innerText = numJogadas;
    
    //Alerta de jogo terminado, deleta botões e criador de botão reload
    if (numJogadas == "0") {

    //alerta de jogo terminado
    document.getElementById('novaPartida').innerHTML = "Clique no botão reload para uma nova partida";

    //deletador de botões de opção
    document.getElementById('moveEsquerda').innerHTML = "";
    document.getElementById('moveDeleta').innerHTML = "";
    document.getElementById('escolhaDeleta').innerHTML = "";

    //Criador de botão de reload
    document.getElementById('opcoesReload').innerHTML = "<button type='text' class='escolha'><p class='textoBtn'>Reload</p><img id='reloadImage' src='imagens/Reload.png' onclick='Refresh();'></button>";
    }else{}
}