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

      // Espera o HTML ser todo carregado (DOM) antes de rodar o script
document.addEventListener('DOMContentLoaded', () => {

    // ---------------------------------------------------
    // --- NOVO SISTEMA DE AVALIAÇÃO COM MÉDIA (INÍCIO) ---
    // ---------------------------------------------------

    /**
     * Cria um "slug" (ID amigável) a partir de um texto.
     * Ex: "Um Experimento de Amor" vira "um-experimento-de-amor"
     */
    function createSlug(text) {
        if (!text) return '';
        return text.toString().toLowerCase()
            .normalize('NFD') // Separa acentos
            .replace(/[\u0300-\u036f]/g, '') // Remove acentos
            .replace(/\s+/g, '-') // Espaços por hífen
            .replace(/[^\w-]+/g, '') // Remove caracteres especiais
            .replace(/--+/g, '-') // Remove hífens duplicados
            .trim();
    }

    /**
     * Atualiza o visual das estrelas (pinta de dourado) com base na média.
     */
    function updateStarDisplay(starContainer, averageRating) {
        const stars = starContainer.querySelectorAll('.star');
        // Arredonda a média para a estrela mais próxima (ex: 4.3 vira 4, 4.8 vira 5)
        const roundedAverage = Math.round(averageRating); 

        stars.forEach(star => {
            const starValue = parseInt(star.dataset.value);
            // Pinta a estrela se o valor dela for menor ou igual à média arredondada
            star.classList.toggle('active', starValue <= roundedAverage);
        });
    }

    // Itera sobre CADA card de livro na página
    document.querySelectorAll('.book').forEach(book => {
        
        // 1. Encontra os elementos DENTRO de cada livro
        const titleElement = book.querySelector('.book-title');
        const starContainer = book.querySelector('.stars'); // <div class="stars">
        const averageEl = book.querySelector('.average-rating'); // <span class="average-rating">
        const totalEl = book.querySelector('.total-ratings'); // <span class="total-ratings">
        
        // Se o HTML do livro não tiver os elementos de avaliação corretos, pula este livro
        if (!titleElement || !starContainer || !averageEl || !totalEl) {
            return; 
        }

        const allStarsInThisBook = starContainer.querySelectorAll('.star');
        
        // 2. Cria a chave única para o localStorage
        const bookTitle = titleElement.textContent;
        // A chave agora guarda um ARRAY de avaliações
        const storageKey = 'bookRatingsArray_' + createSlug(bookTitle); 

        // 3. Carrega os dados (o array de avaliações) do localStorage
        let ratings = JSON.parse(localStorage.getItem(storageKey)) || [];
        
        /**
         * Função interna para calcular e exibir estatísticas
         */
        function updateStats() {
            let totalRatings = ratings.length;
            let sumRatings = ratings.reduce((acc, val) => acc + val, 0);
            let average = (totalRatings > 0) ? (sumRatings / totalRatings) : 0;

            // Atualiza o texto (Ex: "Média: 4.5 de 5 (10 avaliações)")
            averageEl.textContent = average.toFixed(1); // Média com 1 casa decimal
            totalEl.textContent = totalRatings;

            // Atualiza o visual das estrelas
            updateStarDisplay(starContainer, average);
        }

        // 4. Adiciona o clique para CADA estrela DENTRO deste livro
        allStarsInThisBook.forEach(star => {
            star.addEventListener('click', () => {
                const newValue = parseInt(star.dataset.value);

                // Adiciona a nova avaliação ao array
                ratings.push(newValue);
                
                // Salva o array ATUALIZADO no localStorage
                localStorage.setItem(storageKey, JSON.stringify(ratings));

                // Recalcula e atualiza tudo
                updateStats();
            });
        });

        // 5. Carrega a avaliação inicial assim que a página abre
        updateStats();
    });

});

// --- FILTRO DE PESQUISA DE LIVROS ---
const searchInput = document.getElementById("searchInput");
const books = document.querySelectorAll(".book");

searchInput.addEventListener("keyup", () => {
  const text = searchInput.value.toLowerCase();

  books.forEach((book) => {
    const title = book.querySelector(".book-title").textContent.toLowerCase();

    if (title.includes(text)) {
      book.style.display = "flex"; // mantém o layout original dos livros
    } else {
      book.style.display = "none";
    }
  });
});
