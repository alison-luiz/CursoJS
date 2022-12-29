function myTimer() {
  const timerSeconds = document.querySelector(".timer"); // Variavel ref. a div do meu HTML
  let segundos = 0;
  let timer;

  function getTimer(seg) {
    const data = new Date(seg * 1000);
    return data.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "GMT",
    });
  }

  function startTimer() {
    timer = setInterval(function () {
      segundos++;
      timerSeconds.innerHTML = getTimer(segundos);
    }, 1000);
  }

  // Evento global de 'click' em todos os elementos da pagina
  document.addEventListener("click", function (e) {
    const element = e.target; // Salvando em uma variavel o elemento que foi clicado na pagina
    if (element.classList.contains("zerar")) {
      // Se o taget clicado contiver a classe 'zerar' ele vai executar os comandos
      timerSeconds.classList.remove("pause");
      timerSeconds.classList.remove("start");
      timerSeconds.innerHTML = "00:00:00";
      clearInterval(timer);
      segundos = 0;
    }
    if (element.classList.contains("pausar")) {
      // Se o taget clicado contiver a classe 'pausar' ele vai executar os comandos
      timerSeconds.classList.add("pause");
      timerSeconds.classList.remove("start");
      clearInterval(timer);
    }
    if (element.classList.contains("iniciar")) {
      // Se o taget clicado contiver a classe 'iniciar' ele vai executar os comandos
      timerSeconds.classList.remove("pause");
      timerSeconds.classList.add("start");
      clearInterval(timer);
      startTimer();
    }
  });
}

myTimer()
