var primeiraFase = parseInt( prompt("Trello = 1\n GitHub = 2"));

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
                Trizotto agora só quer saber do Trello, ela conseguiu colocar todas as atividades <br>
                no app com o auxílio do Butler deixou o Trello muito interativo, chegando todos os <br>
                dias pela manhã em seu e-mail as atividades que deveria cumprir. Mesmo assim ela queria mais, <br>
                apesar de receber todas as informações por e-mail ela não tinha o hábito de abrir o e-mail <br>
                todos os dias e muito menos de entrar no Trello para fazer aquele checklist diário. <br>
                Seguindo o conselho de uma mentora ela leu o livro “O Poder do Hábito”, no livro ela percebeu que <br>
                o hábito é um loop formando de 3 componentes, quais seriam esses componentes?

                
                
            </p>
        
            <a class="botaoNav" href="../TerceiraFase-Trizotto/index.html">Continue sua aventura</a>
        
        </main>
        
        <footer>
            <div class="footer">

                <h3 class="texto-footer">Todos os direitos Reservados - DevPlay 2021</h3>
            
            </div>
            
        </footer>
    


</body>

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
                    <a class = linkNav href="../PrimeiraFase-Trizotto/index.html">Volte ao primeiro desafio</a><br><br>
                    Se você preferir pode escolher outro jogador.<br><br>
                    <a class = linkNav href="../Home/index.html">Volte ao início do jogo</a>
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