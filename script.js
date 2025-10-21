
  const dropdownBtn = document.querySelector('.dropdown-btn');
  const dropdownContent = document.querySelector('.dropdown-content');

  dropdownBtn.addEventListener('click', (e) => {
    e.preventDefault();
    dropdownContent.classList.toggle('show');
  });

  // Fecha o menu se clicar fora
  window.addEventListener('click', (e) => {
    if (!e.target.matches('.dropdown-btn')) {
      dropdownContent.classList.remove('show');
    }
  });

  // --- CÓDIGO DO BOTÃO VOLTAR AO TOPO ---
const backToTopButton = document.getElementById("back-to-top-btn");

// Função que será executada quando o usuário rolar a página
const scrollFunction = () => {
    // Se o usuário rolar mais de 300 pixels para baixo
    if (window.scrollY > 300) {
        // Adiciona a classe 'show' para mostrar o botão
        if(backToTopButton) backToTopButton.classList.add("show");
    } else {
        // Remove a classe 'show' para esconder o botão
        if(backToTopButton) backToTopButton.classList.remove("show");
    }
};

// Adiciona um "ouvinte" que chama a função sempre que a página for rolada
window.addEventListener("scroll", scrollFunction);

function minhafuncao() {
        var x = document.getElementById("aparecer");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }


    function minhafuncao2() {
        var x = document.getElementById("aparecer2");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }


    function minhafuncao3() {
        var x = document.getElementById("aparecer3");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }


    function minhafuncao4() {
        var x = document.getElementById("aparecer4");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }


    function minhafuncao5() {
        var x = document.getElementById("aparecer5");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }


    function minhafuncao6() {
        var x = document.getElementById("aparecer6");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }

// --- CÓDIGO DO FORMULÁRIO DE CONTATO ---

// Seleciona o formulário e a mensagem de sucesso
const contactForm = document.querySelector('.contact-form');
const successMessage = document.getElementById('success-message');

// Adiciona um "ouvinte" para o evento de 'submit' (envio) do formulário
contactForm.addEventListener('submit', (event) => {
    // 1. Impede o comportamento padrão do formulário (que é recarregar a página)
    event.preventDefault();

    // 2. Esconde o formulário
    contactForm.style.display = 'none';

    // 3. Mostra a mensagem de sucesso adicionando a classe CSS
    successMessage.classList.add('show-message');
});

window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});


