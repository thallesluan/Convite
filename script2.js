const correctOrder = [
  "imagem1.jpg",
  "imagem2.jpg",
  "imagem3.jpg",
  "imagem4.jpg",
  "imagem5.jpg",
  "imagem6.jpg",
  "imagem7.jpg",
  "imagem8.jpg",
  "imagem9.jpg",
  "imagem10.jpg",
];

let userOrder = [];

document.addEventListener("DOMContentLoaded", () => {
  const imagesContainer = document.getElementById("images-container");

  // Carregar e embaralhar as imagens
  const shuffledImages = [...correctOrder].sort(() => Math.random() - 0.5);
  shuffledImages.forEach((image) => {
    const imgElement = document.createElement("img");
    imgElement.src = image;
    imgElement.alt = image;
    imgElement.addEventListener("click", () => selectImage(image, imgElement));
    imagesContainer.appendChild(imgElement);
  });
});

function selectImage(image, imgElement) {
  if (userOrder.length < correctOrder.length) {
    userOrder.push(image);
    imgElement.classList.add("correct");
    checkOrder();
  }
}

function checkOrder() {
  if (userOrder.length === correctOrder.length) {
    const retryButton = document.getElementById("retry-button");
    const prizeButton = document.getElementById("prize-button");

    if (userOrder.every((img, index) => img === correctOrder[index])) {
      prizeButton.style.display = "block";
    } else {
      retryButton.style.display = "block";
    }
  }
}

function resetGame() {
  userOrder = [];
  document
    .querySelectorAll(".images-container img")
    .forEach((img) => img.classList.remove("correct"));
  document.getElementById("retry-button").style.display = "none";
  document.getElementById("prize-button").style.display = "none";
}
