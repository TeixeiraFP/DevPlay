var segundaFase = parseInt( prompt("Repositório Online = 1\n Sistema de Versionamento de Projeto = 2"));

while(true){
    if(segundaFase === 1 || segundaFase ===2 ){
        break;        
    }
    else{
        alert ("O jogo só aceita resposta nos valores numéricos 1 e 2.");
        segundaFase = parseInt( prompt("Repositório Online = 1\n Sistema de Versionamento de Projeto = 2"));
    }
}

function fase (segundaFase)
{
    if(segundaFase === 2)
    {
        document.write (`
        <body>

        <header class="header">
            
            <h1 class="titulo-principal">DevPlay</h1>
        
        </header>
        
        <main class="container-principal">
        
            <p class="texto-pergunta">
                O Git tem ajudado muito no projeto, porém o que não está legal é a relação <br>
                de Cardoso com seus amigos, eles tem sempre opiniões diferentes o que vem gerando <br>
                um conflito  e até mesmo confrontos com sua equipe. Cardoso <br>
                como uma DevPlay experiente chamou todos para um bate papo online, nessa conversa <br>
                ela falou muito sobre CNV (Comunicação Não Violenta) e explicou para seus amigos <br>
                que a CNV possui quatro componentes importantes que devemos usar em um momento de conflito. <br>
                Quais são esses componentes? 
                
            </p>
        
            <a class="botaoNav" href="../QuartaFase-Cardoso/index.html">Continue sua aventura</a>
        
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
                    <a class = linkNav href="../PrimeiraFase-Cardoso/index.html">Volte ao primeiro desafio</a><br><br>
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
fase (segundaFase)