document.addEventListener('DOMContentLoaded', function() {
  console.log('Página carregada');
});

// Controle do carrossel
const isDesktop = window.matchMedia('(min-width: 768px)').matches;

const wiperTrack = document.querySelector(".wiper-track");
const wipes = Array.from(wiperTrack.children);
const wipePrevBtn = document.querySelector(".wiper-button__right");
const wipeNextBtn = document.querySelector(".wiper-button__left");
const wipeWidth = wipes[0].getBoundingClientRect().width;

const arrowsBehaviour = (wipePrevBtn, wipeNextBtn, index) => {
  if (index === 0) {
    wipePrevBtn.classList.add("is-hidden");
    wipeNextBtn.classList.remove("is-hidden");
  } else if (index === wipes.length - 1) {
    wipePrevBtn.classList.remove("is-hidden");
    wipeNextBtn.classList.add("is-hidden");
  } else {
    wipePrevBtn.classList.remove("is-hidden");
    wipeNextBtn.classList.remove("is-hidden");
  }
};

const wipeSlide = (wiperTrack, activeSlide, nextSlide, targetIndex) => {
  wiperTrack.style.transform =
    "translateX(-" + (wipeWidth + 24) * (isDesktop ? targetIndex - 1 : targetIndex) + "px)";
  activeSlide.classList.remove("active-swipe");
  activeSlide.style.transform = "scale(1)";
  nextSlide.classList.add("active-swipe");
  nextSlide.style.transform = "scale(1.1)";
};

wipeNextBtn.addEventListener("click", (e) => {
  const activeSlide = wiperTrack.querySelector(".active-swipe");
  const nextSlide = activeSlide.nextElementSibling;
  const targetIndex = wipes.findIndex((slide) => slide === nextSlide);
  wipeSlide(wiperTrack, activeSlide, nextSlide, targetIndex);
  arrowsBehaviour(wipePrevBtn, wipeNextBtn, targetIndex);
});

wipePrevBtn.addEventListener("click", (e) => {
  const activeSlide = wiperTrack.querySelector(".active-swipe");
  const nextSlide = activeSlide.previousElementSibling;
  const targetIndex = wipes.findIndex((slide) => slide === nextSlide);
  wipeSlide(wiperTrack, activeSlide, nextSlide, targetIndex);
  arrowsBehaviour(wipePrevBtn, wipeNextBtn, targetIndex);
});

// Inicializar no segundo slide para desktop
const initialIndex = 0;
wipeSlide(wiperTrack, wipes[0], wipes[initialIndex], initialIndex);
arrowsBehaviour(wipePrevBtn, wipeNextBtn, initialIndex);

// Controle do formulário de contato
const form = document.querySelector("#contato form");

if (form) {
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Coleta os valores dos campos do formulário
    const nome = document.querySelector("#nome").value;
    const email = document.querySelector("#email").value;
    const mensagem = document.querySelector("#mensagem").value;

    // Simula o envio dos dados (aqui você pode substituir pelo envio para um backend)
    console.log("Dados enviados:");
    console.log({ nome, email, mensagem });

    // Mostra uma mensagem de sucesso
    const successMessage = document.createElement("div");
    successMessage.textContent = "Mensagem enviada com sucesso! Entraremos em contato em breve.";
    successMessage.style.backgroundColor = "#d4edda";
    successMessage.style.color = "#155724";
    successMessage.style.padding = "10px";
    successMessage.style.border = "1px solid #c3e6cb";
    successMessage.style.borderRadius = "5px";
    successMessage.style.marginTop = "10px";
    successMessage.style.textAlign = "center";

    // Insere a mensagem de sucesso antes do formulário
    form.parentNode.insertBefore(successMessage, form);

    // Limpa os campos do formulário
    form.reset();

    // Remove a mensagem após 5 segundos
    setTimeout(() => {
      successMessage.remove();
    }, 5000);
  });
}
