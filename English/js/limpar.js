//function to delete images from previous moves (the images would keep stacking in the span if not deleted)
function limpar() {
  
    //as long as the number of moves is greater than zero, the command is not interrupted
    if (numJogadas > 0) {
    numJogadas--;
      if (numJogadas > 0) {

      //Clears the images from the previous moves to make room for the new ones
      document.getElementById('mostrarInimigo').innerHTML = "";
      document.getElementById('mostrarJogador').innerHTML = "";
      }else{}
    }
}

//page reloader command
function Refresh() {
    window.location.reload();
  }