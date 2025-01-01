// landingpage.js

document.addEventListener('DOMContentLoaded', function() {
    console.log('Landing page carregada');
  
    // Seleciona o botão com a classe 'cta-button' (Call to Action button)
    const ctaButton = document.querySelector('.cta-button');
  
    // Adiciona um evento de clique ao botão
    if (ctaButton) {
      ctaButton.addEventListener('click', function() {
        alert('Botão CTA clicado!');
      });
    }
  
    // Função para animar o botão ao passar o mouse por cima
    ctaButton.addEventListener('mouseover', function() {
      ctaButton.style.transform = 'scale(1.1)';
    });
  
    // Função para reverter a animação ao tirar o mouse de cima
    ctaButton.addEventListener('mouseout', function() {
      ctaButton.style.transform = 'scale(1)';
    });
  });