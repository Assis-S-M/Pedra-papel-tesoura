let numJogadas = 10;
let pontosJogador = 0;
let pontosInimigo = 0;

//funcao para opção pedra do player
function escolhaPedra() {
    
    //Enquanto o número de jogadas for maior que 0, o comando não é interrompido e ainda é possivel realizar jogadas
    if (numJogadas > 0) {

        //escolha aleatoria do computador
        let resultado = Math.floor(Math.random() * 3 + 1);

        //criador de imagem da opção pedra no placar
        document.getElementById('mostrarJogador').innerHTML = "<img src='imagens/Rock.png'>";
        
        //Resultado caso a opção do computador seja pedra
        if (resultado == 1) {
            document.getElementById('mostrarInimigo').innerHTML = "<img src='imagens/Rock.png'>";
            document.getElementById('game-result').innerHTML = "Empate";

        } //Resultado caso a opção do computador seja papel
        else if (resultado == 2) {
            document.getElementById('mostrarInimigo').innerHTML = "<img src='imagens/Paper.png'>";
            document.getElementById('game-result').innerHTML = "Derrota";

        } //Resultado caso a opção do computador seja tesoura
        else if (resultado == 3) {
            document.getElementById('mostrarInimigo').innerHTML = "<img src='imagens/Scissors.png'>";
            document.getElementById('game-result').innerHTML = "Vitoria";
        } else {}
    }
}

//function para opção papel do player
function escolhaPapel() {

    //Enquanto o número de jogadas for maior que 0, o comando não é interrompido e ainda é possivel realizar jogadas
    if (numJogadas > 0) {

        //escolha aleatoria do computador
        let resultado = Math.floor(Math.random() * 3 + 1);

        //criador de imagem da opção pedra no placar
        document.getElementById('mostrarJogador').innerHTML = "<img src='imagens/Paper.png'>";
        
        //Resultado caso a opção do computador seja pedra
        if (resultado == 1) {
            document.getElementById('mostrarInimigo').innerHTML = "<img src='imagens/Rock.png'>";
            document.getElementById('game-result').innerHTML = "Vitoria";

        } //Resultado caso a opção do computador seja papel
        else if (resultado == 2) {
            document.getElementById('mostrarInimigo').innerHTML = "<img src='imagens/Paper.png'>";
            document.getElementById('game-result').innerHTML = "Empate";
            
        } //Resultado caso a opção do computador seja tesoura
        else if (resultado == 3) {
            document.getElementById('mostrarInimigo').innerHTML = "<img src='imagens/Scissors.png'>";
            document.getElementById('game-result').innerHTML = "Derrota";
        } else {}
    }
}

//function para escolha tesoura do player
function escolhaTesoura() {

    //Enquanto o número de jogadas for maior que 0, o comando não é interrompido e ainda é possivel realizar jogadas
    if (numJogadas > 0) {
      
        //escolha aleatoria do computador
        let resultado = Math.floor(Math.random() * 3 + 1);
        
        //criador de imagem da opção tesoura no placar
        document.getElementById('mostrarJogador').innerHTML = "<img src='imagens/Scissors.png'>";
        
        //Resultado caso a opção seja pedra
        if (resultado == 1) {
            document.getElementById('mostrarInimigo').innerHTML = "<img src='imagens/Rock.png'>";
            document.getElementById('game-result').innerHTML = "Derrota";

        } //Resultado caso a opção seja papel
        else if (resultado == 2) {
            document.getElementById('mostrarInimigo').innerHTML = "<img src='imagens/Paper.png'>";
            document.getElementById('game-result').innerHTML = "Vitoria";
            
        } //Resultado caso opção seja tesoura
        else if (resultado == 3) {
            document.getElementById('mostrarInimigo').innerHTML = "<img src='imagens/Scissors.png'>";
            document.getElementById('game-result').innerHTML = "Empate";
        } else {}
    }
}
