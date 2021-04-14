var primeiraFase = parseInt( prompt("Sim = 1\n Não = 2"));

while(true){
    if(primeiraFase === 1 || primeiraFase ===2 ){
        break;        
    }
    else{
        alert ("O jogo só aceita resposta nos valores numéricos 1 e 2.");
        primeiraFase = parseInt( prompt("Sim = 1\n Não = 2"));
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
                Ufaaaaaaa! Imagina se escolhêssemos o seletor errado? Nenhuma estilização iria <br>
                carregar na página, seria frustrante. O próximo desafio de Cardoso é um projeto muito <br>
                ousado e robusto, então ela decidiu chamar seus amigos para ajuda-la, porém estamos <br>
                em pandemia e apesar de ser uma DevPlay ela também está sujeita a se contaminar com esse traiçoeiro vírus. <br>
                Ele decidiu que a ajuda dos amigos deveria acontecer com cada um na sua casa, fazendo <br>
                alterações no projeto da sua própria máquina, para a organização do projeto e tornar <br>
                essa experiência mais fácil para todos ele decidiu usar o Git. <br>
                O que seria o Git?


                
                
            </p>
        
            <a class="botaoNav" href="../TerceiraFase-Cardoso/index.html">Continue sua aventura</a>
        
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
                    Deseja continuar com o mesmo avatar?<br>
                    <a class = linkNav href="../PrimeiraFase-Cardoso/index.html">Volte ao primeiro desafio</a><br><br>
                    Se você preferir pode escolher outro jogador.<br>
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