document.getElementById("yesBtn").addEventListener("click", function () {
  // Redirecionamento para outra página quando o botão 'Sim' é clicado
  window.location.href = "jogo.html";
});

document.getElementById("noBtn").addEventListener("click", function () {
  const noBtn = document.getElementById("noBtn");
  const container = document.querySelector(".container");
  const containerWidth = container.offsetWidth;
  const containerHeight = container.offsetHeight;
  const buttonWidth = noBtn.offsetWidth;
  const buttonHeight = noBtn.offsetHeight;

  function getRandomPosition() {
    const x = Math.floor(Math.random() * (containerWidth - buttonWidth));
    const y = Math.floor(Math.random() * (containerHeight - buttonHeight));
    return [x, y];
  }

  const newPosition = getRandomPosition();
  noBtn.style.position = "absolute";
  noBtn.style.left = newPosition[0] + "px";
  noBtn.style.top = newPosition[1] + "px";
});
