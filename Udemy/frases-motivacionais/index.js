function gerarFraseMotivacional() {
        
        const frases = [
          "É importante agradecer pelo hoje sem nunca desistir do amanhã!",
          "Em busca do ótimo não se faz o bom.",
          "A ideia é nunca perder a motivação para subir cada degrau rumo ao sucesso, por mais difícil que seja. E também não esquecer de agradecer pelas lições aprendidas em cada etapa da jornada.",
          "Apreciando cada passo, mas já sonhando com as próximas conquistas!",
          "Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas, acima de tudo, seja você sempre.",
          "Quem cultiva gratidão é capaz de realizar sonhos que parecem inalcançáveis!",
          "Se expressarmos gratidão pelo que temos, teremos mais pelo que expressar gratidão.",
          "Desejar algo maior pra sua vida não significa que você está insatisfeito com o que tem.",
          "Agradeço todos os dias pela minha vida, por tudo o que conquistei até aqui. E tenho fé de que o futuro me reserva realizações ainda maiores!",
          "Só tenho a agradecer a cada um dos desafios que me trouxeram até aqui, que me fizeram crescer e aprender tantas coisas!"
        ];

        const numeroAleatorio = Math.floor(Math.random() * 10);
        const frase = frases[numeroAleatorio];

        document.getElementById('frase').innerHTML = frase;
        
      }