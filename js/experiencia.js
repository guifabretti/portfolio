const abas = document.querySelectorAll('.experiencia__abas li');
const secoes = document.querySelectorAll('.experiencia__descricao section');

// Adiciona o evento de clique a cada elemento <li>
abas.forEach((aba, index) => {
  aba.addEventListener('click', () => {
    // Remove a classe 'ativo' de todas as abas e seções
    abas.forEach((aba) => aba.classList.remove('ativo'));
    secoes.forEach((secao) => secao.classList.remove('ativo'));

    // Adiciona a classe 'ativo' à aba e seção correspondente
    aba.classList.add('ativo');
    secoes[index].classList.add('ativo');
  });
});
