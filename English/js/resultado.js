//Result calculation and final result display of win, lose or draw
function calculoResultado(){

  //Variable that takes the result given by the choice functions
  let resultAnalise = document.getElementById('game-result').innerText;

  //Player win condition
  if (resultAnalise == "Win") {
    pontosJogador++;
    document.getElementById('j-contador').innerHTML = pontosJogador;
    
  } //Player defeat condition
  else if (resultAnalise == "Lost"){
    pontosInimigo++;
    document.getElementById('c-contador').innerHTML = pontosInimigo;
  } else {}

    //Post game result display (when numJogadas = 0)
    if (numJogadas == 0) {

        //Post game win condition
        if (pontosJogador > pontosInimigo) {
            document.getElementById('game-result').innerHTML = "You win";
            
        } //Post game loss condition
        else if (pontosJogador < pontosInimigo) {
            document.getElementById('game-result').innerHTML = "You lose";
            
        } //Post game tie condition
        else if (pontosJogador == pontosInimigo) {
            document.getElementById('game-result').innerHTML = "You tied";
        }else {}
    }else {}
    
    //Remaining number of moves display
    document.getElementById('turnos').innerText = numJogadas;
    
    //Game over alert, delete buttons and reload button creator
    if (numJogadas == "0") {

    // game over alert
    document.getElementById('novaPartida').innerHTML = "Click the reload button for a new game";

    //choice buttons deleter
    document.getElementById('escolhaDeleta').innerHTML = "";

    //reload button creator
    document.getElementById('opcoesReload').innerHTML = "<button type='text' class='escolha'><p class='textoBtn'>Reload</p><img id='reloadImage' src='imagens/Reload.png' onclick='Refresh();'></button>";
    }else{}
}