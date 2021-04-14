var terceiraFase = parseInt(prompt("Meta Emart = 1\n Meta Smart = 2"));

while(true){
    if(terceiraFase === 1 || terceiraFase ===2 ){
        break;        
    }
    else{
        alert ("O jogo só aceita resposta nos valores numéricos 1 e 2.");
        terceiraFase = parseInt( prompt("Meta Emart = 1\n Meta Smart = 2"));
    }
}

function fase (terceiraFase)
{
    if (terceiraFase === 2)
    {
        document.write(`
        <body>
    
        <header class="header">
            
            <h1 class="titulo-principal">DevPlay</h1>

        </header>

        <main class="container-principal">

            <p class="texto-campeao">
                Aeeeeeee, PARABÉÉÉNS!! <br><br>
            Você ajudou a Trizotto a dar seus primeiros passos para conquistar o mundo Dev, <br>
            sua jornada no jogo chegou ao FIM! Esperamos que assim como Trizotto você também <br>
            tenha aprendido um pouco sobre habilidades comportamentais e sobre o mundo Dev, <br>
            esse é só o começo, NÃO DESISTA!


                

            </p>
        
            <a class="botaoNav" href="../index.html">Volte ao início</a>

        </main>

        <footer>
            <div class="footer">

                <h3 class="texto-footer">Todos os direitos Reservados - DevPlay 2021</h3>
            
            </div>

        </footer>

    
</body>
        `)
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

fase(terceiraFase)