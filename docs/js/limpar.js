function limpar() {
    //enquanto o numero de jogadas for maior que zero, o comando não é interrompido
    if (numJogadas > 0) {
    numJogadas--;
      if (numJogadas > 0) {

      //Limpa as imagens da rodada anterior para dar espaço as novas
      document.getElementById('mostrarInimigo').innerHTML = "";
      document.getElementById('mostrarJogador').innerHTML = "";
      }else{}
    }
}

//comando recarregador de pagina
function Refresh() {
    window.location.reload();
}