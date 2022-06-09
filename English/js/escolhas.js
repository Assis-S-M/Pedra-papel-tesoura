let numJogadas = 10;
let pontosJogador = 0;
let pontosInimigo = 0;

//function for player Rock choice
function escolhaPedra() {
    
    //As long as the number of moves is greater than 0, the command is not interrupted and moves are still possible.
    if (numJogadas > 0) {

        //random computer pick
        let resultado = Math.floor(Math.random() * 3 + 1);

        //scoreboard Rock option image maker
        document.getElementById('mostrarJogador').innerHTML = "<img src='imagens/Rock.png'>";
        
        //Result if the computer option is Rock
        if (resultado == 1) {
            document.getElementById('mostrarInimigo').innerHTML = "<img src='imagens/Rock.png'>";
            document.getElementById('game-result').innerHTML = "A tie";

        } //Result if the computer option is paper
        else if (resultado == 2) {
            document.getElementById('mostrarInimigo').innerHTML = "<img src='imagens/Paper.png'>";
            document.getElementById('game-result').innerHTML = "Lost";

        } //Result if the computer option is scissors
        else if (resultado == 3) {
            document.getElementById('mostrarInimigo').innerHTML = "<img src='imagens/Scissors.png'>";
            document.getElementById('game-result').innerHTML = "Win";
        } else {}
    }
}

//function for player Paper choice
function escolhaPapel() {

    
    // As long as the number of moves is greater than 0, the command is not interrupted and moves are still possible.
    if (numJogadas > 0) {

        //random computer pick
        let resultado = Math.floor(Math.random() * 3 + 1);

        //scoreboard Paper option image maker
        document.getElementById('mostrarJogador').innerHTML = "<img src='imagens/Paper.png'>";
        
        //Result if the computer option is Rock
        if (resultado == 1) {
            document.getElementById('mostrarInimigo').innerHTML = "<img src='imagens/Rock.png'>";
            document.getElementById('game-result').innerHTML = "Win";

        } //Result if the computer option is paper
        else if (resultado == 2) {
            document.getElementById('mostrarInimigo').innerHTML = "<img src='imagens/Paper.png'>";
            document.getElementById('game-result').innerHTML = "A tie";
            
        } //Result if the computer option is scissors
        else if (resultado == 3) {
            document.getElementById('mostrarInimigo').innerHTML = "<img src='imagens/Scissors.png'>";
            document.getElementById('game-result').innerHTML = "Lost";
        } else {}
    }
}

//function for player Scissors choice
function escolhaTesoura() {


    //As long as the number of moves is greater than 0, the command is not interrupted and moves are still possible.
    if (numJogadas > 0) {
      
        //random computer pick
        let resultado = Math.floor(Math.random() * 3 + 1);
        
        //scoreboard scissors option image maker
        document.getElementById('mostrarJogador').innerHTML = "<img src='imagens/Scissors.png'>";
        
        //Result if the option is Rock
        if (resultado == 1) {
            document.getElementById('mostrarInimigo').innerHTML = "<img src='imagens/Rock.png'>";
            document.getElementById('game-result').innerHTML = "Lost";

        } //Result if the option is paper
        else if (resultado == 2) {
            document.getElementById('mostrarInimigo').innerHTML = "<img src='imagens/Paper.png'>";
            document.getElementById('game-result').innerHTML = "Win";
            
        } //Result if option is scissors
        else if (resultado == 3) {
            document.getElementById('mostrarInimigo').innerHTML = "<img src='imagens/Scissors.png'>";
            document.getElementById('game-result').innerHTML = "A tie";
        } else {}
    }
}
