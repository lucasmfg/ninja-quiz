const correctAnswers = ["B", "B", "B", "B"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  // Previne de atualizar ao apertar submit.
  e.preventDefault();

  // Cria a pontuação inicial como zero.
  let score = 0;

  // Cria um vetor que armazena as respostas do usuário.
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  // Checa respostas do usuário. Realiza uma iteração checando cada resposta do usuário ao index exato das respostas corretas e adiciona a pontuação para cada resposta correta.
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });

  // Método que leva automaticamente para onde você decidir.
  scrollTo(0, 0);

  // Mostrar o resultado na tela
  result.classList.remove("d-none", "py-3");

  // Cria uma animação ao mostrar o resultado
  let output = 0;
  const timer = setInterval(() => {
    result.querySelector("span").textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});
