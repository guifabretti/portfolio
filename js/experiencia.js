// Selecione os elementos <li> e a <div> que contém as seções
const abas = document.querySelectorAll('.experiencia__abas li');
const secoes = document.querySelectorAll('.experiencia__descricao section');

// Adicione o evento de clique a cada elemento <li>
abas.forEach((aba, index) => {
  aba.addEventListener('click', () => {
    // Remova a classe 'ativo' de todas as abas e seções
    abas.forEach((aba) => aba.classList.remove('ativo'));
    secoes.forEach((secao) => secao.classList.remove('ativo'));

    // Adicione a classe 'ativo' à aba e seção correspondente
    aba.classList.add('ativo');
    secoes[index].classList.add('ativo');
  });
});
