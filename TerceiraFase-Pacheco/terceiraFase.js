var segundaFase = parseInt( prompt('Sim = 1\n Não = 2'));

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
    if(segundaFase === 1)
    {
        document.write(`
        <body>
                <header class="header">
                    
                    <h1 class="titulo-principal">DevPlay</h1>

                </header>

                <main class="container-principal">

                    <p class="texto-pergunta">

                        Pacheco nunca fez tanto em tão pouco tempo, o pomodoro fez com que ele conseguisse até um tempo de folga. <br>
                        Pacheco quer ser o melhor dev do mundo, que programar tudo e todos, porém essas ideias <br>
                        são vagas, e constantemente tem se sentido frustrado, sem saber para onde ir e como pensar. <br>
                        Então decidi se isolar e passar por um longo período de meditação, <br>
                        nesse momento ele lembra dos ensinamentos de um monge dev que dizia sobre como organizar <br>
                        e planejar seus objetivos e suas ações, suas lembranças sobre o tema não estão claras, <br>
                        ele só consegue se lembrar que seus objetivos tem que ser: <br>
                        Específicos, mensuráveis, atingíveis, relevantes e temporais. <br>
                        Qual seria o nome dessa ferramenta? Meta Emart ou Meta Smart ?

                    </p>
                
                    <a class="botaoNav" href="../QuartaFase-Pacheco/index.html">Continue sua aventura</a>

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

fase (segundaFase)