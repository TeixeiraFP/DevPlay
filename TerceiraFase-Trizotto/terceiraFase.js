var segundaFase = parseInt( prompt('Fazer, acontecer e repetir = 1\n Deixa, rotina e recompensa = 2'));

while(true){
    if(segundaFase === 1 || segundaFase ===2 ){
        break;        
    }
    else{
        alert ("O jogo só aceita resposta nos valores numéricos 1 e 2.");
        segundaFase = parseInt( prompt("Trello = 1\n GitHub = 2"));
    }
}

function fase (segundaFase)
{
    if(segundaFase === 2)
    {
        
        document.write(`
        <body>
                <header class="header">
                        
                    <h1 class="titulo-principal">DevPlay</h1>

                </header>

                <main class="container-principal">

                    <p class="texto-pergunta">
                        Depois do livro a vida de Trizotto simplesmente mudou, ela conseguiu deixar <br>
                        hábitos ruins para trás. Ela entende que todo o domínio que ela tem <br>
                        na parte Tech só fara sentindo se também existir domínio sobre a parte soft. <br>
                        Trizotto já tem seu dia-a-dia organizado e consegue acompanhar tudo com seus novos hábitos, <br>
                        ela decide então dar um passo além e planejar seu futuro, pensando em objetivos e criando <br>
                        metas para conseguir alcança-los, qual seria uma boa ferramenta para ela organizar e pensar nessas metas? 


                        
                    </p>
            
                <a class="botaoNav" href="../QuartaFase-Trizotto/index.html">Continue sua aventura</a>

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
                    <a class = linkNav href="../PrimeiraFase-Trizotto/index.html">Volte ao primeiro desafio</a><br><br>
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

fase (segundaFase)