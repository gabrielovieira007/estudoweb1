document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let pontos = 0;
    let erros = [];

    const q1 = document.querySelector('input[name="q1"]:checked');
    if (!q1) erros.push("Você não respondeu a pergunta 1!");
    else pontos += parseInt(q1.value);


    const q2 = document.querySelectorAll('input[name="q2"]:checked');
    if (q2.length < 2) erros.push("Marque ao menos 2 Shinigamis na pergunta 2.");
    else q2.forEach(x => pontos += parseInt(x.value));

    
    const q3 = document.querySelector('select[name="q3"]').value;
    if (q3 === "") erros.push("Selecione uma opção na pergunta 3!");
    else pontos += parseInt(q3);

    
    const q4 = document.querySelector('input[name="q4"]').value.trim().toLowerCase();
    if (q4 === "") erros.push("Responda a pergunta 4!");
    else if (q4 === "death note") pontos += 1;

  
    const q5 = document.querySelector('input[name="q5"]:checked');
    if (!q5) erros.push("Você não respondeu a pergunta 5!");
    else pontos += parseInt(q5.value);


    const resultado = document.getElementById("resultado");
    const mensagem = document.getElementById("mensagem");
    const feedback = document.getElementById("feedbackArea");

    resultado.classList.remove("d-none");

    if (erros.length > 0) {
        mensagem.innerHTML = "⚠ Corrija os erros antes de prosseguir:";
        feedback.innerHTML = "<ul>" + erros.map(e => `<li>${e}</li>`).join("") + "</ul>";
        return;
    }


    let texto = "";
    if (pontos === 7) {  
        texto = "📓✨ Você é digno do Death Note! Brilhante!";
    } else if (pontos >= 4) {
        texto = "😈 Você entende bastante sobre Death Note!";
    } else {
        texto = "🤔 Parece que o L precisa te investigar melhor...";
    }

    mensagem.innerHTML = `Sua pontuação foi: <strong>${pontos}/7</strong>`;
    feedback.innerHTML = `<p>${texto}</p>`;
});
