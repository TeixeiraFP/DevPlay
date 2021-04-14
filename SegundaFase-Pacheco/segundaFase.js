var primeiraFase = parseInt( prompt("Sim = 1\n Não = 2"));     

while(true){
    if(primeiraFase === 1 || primeiraFase ===2 ){
        break;        
    }
    else{
        alert ("O jogo só aceita resposta nos valores numéricos 1 e 2.");
        primeiraFase = parseInt( prompt("Trello = 1\n GitHub = 2"));
    }
}


function fase (primeiraFase)
{
    if(primeiraFase === 1)
    {
        document.write (`
        
<body>

<header class="header">
    
    <h1 class="titulo-principal">DevPlay</h1>

</header>

<main class="container-principal">

    <p class="texto-pergunta">
        UFAAAAAAA! Pacheco fez a escolha correto e conseguiu criar a página, aqueles <br>
        animaizinhos não veem a hora de conseguir um lar. Porem Pacheco tem um problema, <br>
        mesmo com toda perspicácia de um DevPlay, Pacheco vem encontrando problemas para <br>
        conseguir otimizar seu tempo, ficando horas na frente do computador e não conseguindo se concentrar no projeto.<br>
        Após escutar um podcast decidi seguir uma das dicas que ouviu que era de usar o método <br>
        pomodoro para otimizar seu tempo e fazer com que o estude rendesse mais e melhor, será que foi uma decisão acertada? 

    </p>

    <a class="botaoNav" href="../TerceiraFase-Pacheco/index.html">Continue sua aventura</a>

</main>

<footer>
    <div class="footer">

        <h3 class="texto-footer">Todos os direitos Reservados - DevPlay 2021</h3>
        
    </div>

</footer>
        `);        
    }
    else
    {
        document.write(`
        <body>
     
        <header class="header">
            
            <h1 class="titulo-principal">DevPlay</h1>

        </header>

        <main class="container-principal-gameOver">

            
               
                    <h2 class="texto-gameOver-titulo">FIIIIIIM!</h2><br>
        
                    <P class="texto-gameOVer">
                        Infelizmente não foi dessa vez, mas você pode tentar novamente, vamos começar novamente? <br>
                    </P><br><br>
        
                    <nav class="navegacao">
                    Você que escolhe: <br><br>
                    Deseja continuar com o mesmo avatar?<br><br>
                    <a class = linkNav href="../PrimeiraFase-Pacheco/index.html">Volte ao primeiro desafio</a><br><br>
                    Se você preferir pode escolher outro jogador.<br><br>
                    <a class = linkNav href="../index.html">Volte ao início do jogo</a>
                    </nav> 

            
        
            

        </main>

        <footer>
            <div class="footer">

                <h3 class="texto-footer">Todos os direitos Reservados - DevPlay 2021</h3>
        
            </div>

        </footer>

    
            
</body>

        `);
    }

}
fase (primeiraFase)