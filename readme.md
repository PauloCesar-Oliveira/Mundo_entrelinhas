Mundo Entre Linhas

    Mundo Entre Linhas é um site estático e responsivo dedicado a amantes da literatura. O projeto funciona como um catálogo de livros, permitindo aos usuários explorar recomendações de leitura separadas por gênero, ler sinopses e deixar avaliações interativas.


📚 Sobre o Projeto
    O Mundo Entre Linhas foi criado como um portal para entusiastas de livros. A ideia central é oferecer um espaço limpo, atraente e fácil de navegar onde os usuários podem descobrir novos títulos, ler sinopses e interagir com as obras através de um sistema de avaliação dinâmico.

    O site é estruturado por gêneros (como Romance, Terror, HQs) e cada página de gênero apresenta uma lista de livros recomendados, cada um com um link direto para compra e uma sinopse.

✨ Funcionalidades Principais
    Design Responsivo: O site se adapta a diferentes tamanhos de tela (desktop, tablet e mobile).

    Navegação por Gêneros: Menu dropdown que direciona o usuário para páginas dedicadas a cada gênero.

    Carrossel de Imagens: Um slider de destaques (controlado por botões de rádio HTML/CSS) para exibir banners.

    Cards de Livros: Listagem de livros em um formato de card, contendo:

    Imagem (com link para a página de compra, ex: Amazon).

    Título e Sinopse.

    Botão "Ler mais" para expandir a sinopse.

    Sistema de Avaliação Persistente: Um sistema de avaliação por estrelas avançado que calcula a média e o total de votos.

    Efeitos Visuais: Animação de corações caindo (via hearts.js) para criar um ambiente temático.

    Botão "Voltar ao Topo": Facilita a navegação em páginas longas.

💻 Tecnologias Utilizadas
    O projeto é construído inteiramente com tecnologias front-end:

    HTML5: Para a estrutura e semântica do conteúdo.

    CSS3: Para estilização, layout (Flexbox), responsividade e animações.

    JavaScript (ES6+): Para interatividade, manipulação do DOM e lógica do cliente.

🗂️ Estrutura de Pastas
    A estrutura do projeto é organizada para separar conteúdo, estilos, scripts e imagens, facilitando a manutenção.

    🚀 Como Rodar Localmente
    Este é um projeto estático, o que significa que não requer um servidor de backend ou processo de build.

    Clone o repositório (ou baixe os arquivos):

    Navegue até a pasta do projeto:

    Abra o index.html: Basta abrir o arquivo index.html (ou qualquer um dos outros arquivos .html dentro de /livros/ ou /quem_somos/) diretamente no seu navegador de preferência (Google Chrome, Firefox, etc.).

🛠️ Funcionalidades Detalhadas
    1. Sistema de Avaliação (ratings.js)
    Esta é a funcionalidade mais complexa do projeto. Ela permite que os usuários votem e vejam a média de avaliações de cada livro de forma independente entre as páginas.

    Persistência de Dados: As avaliações são salvas no localStorage do navegador. Isso significa que, mesmo que o usuário feche a aba ou o navegador, as avaliações permanecerão salvas.

    Chave Única por Livro: Para evitar que o "Livro A" da página de Romance compartilhe a mesma avaliação do "Livro A" da página de Terror, o script gera uma chave de armazenamento única. Ele captura o texto do <h2 class="book-title">, o converte para um formato "slug" (ex: um-experimento-de-amor-em-nova-york) e o usa como ID no localStorage.

    Cálculo de Média: O script não salva apenas a última avaliação. Ele armazena um array (lista) de todas as avaliações dadas para aquele livro (ex: [5, 4, 5, 3]).

    Exibição Dinâmica: A cada clique ou carregamento de página (evento DOMContentLoaded), o script:

    Procura por todos os elementos .book na página.

    Para cada livro, lê o array de avaliações correspondente no localStorage.

    Calcula o número total de votos (o length do array).

    Calcula a média das avaliações (soma dos valores / total de votos), exibindo com uma casa decimal.

    Atualiza o texto na tela (ex: "Média: 4.3 de 5 (4 avaliações)").

    Atualiza o visual das estrelas, preenchendo-as (adicionando a classe .active) com base na média arredondada.

2. Animação de Corações (hearts.js)
Implementado para páginas temáticas (como a de romance), este script cria uma animação de corações caindo.

    O script é executado após o carregamento da página (DOMContentLoaded).

    Ele verifica se o elemento <div class="hearts-container"> existe na página. Se não existir, o script não faz nada, evitando erros em outras páginas.

    Usando setInterval, ele cria dinamicamente novos elementos <div> com o texto '❤' em curtos intervalos.

    Cada coração recebe propriedades aleatórias de CSS (posição left, fontSize, animationDuration) para criar um efeito natural e variado.

    Os elementos são removidos do DOM após a animação (setTimeout) para evitar sobrecarga de memória e manter o desempenho do site.

3. Script Principal (script.js)
(Presumido, baseado na estrutura do HTML)

    Este arquivo é responsável pelas interações gerais do site:

    Carrossel: Controla a lógica de troca automática dos slides e a funcionalidade dos botões manuais.

    Botão "Ler Mais": Controla a exibição das sinopses completas, alternando o display do conteúdo oculto.

    Botão "Voltar ao Topo": Monitora o scroll da página para exibir o botão e executa a rolagem suave para o topo ao ser clicado.