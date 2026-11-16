// Filtro de projetos por categoria
const botoesFiltro = document.querySelectorAll('.btn-filtro');
const projetos = document.querySelectorAll('.item-projeto');

botoesFiltro.forEach((botao) => {
  botao.addEventListener('click', () => {
    botoesFiltro.forEach((b) => b.classList.remove('active'));
    botao.classList.add('active');

    const categoria = botao.getAttribute('data-categoria');

    projetos.forEach((projeto) => {
      if (categoria === 'todos' || projeto.getAttribute('data-categoria') === categoria) {
        projeto.classList.remove('d-none');
      } else {
        projeto.classList.add('d-none');
      }
    });
  });
});

// Mensagem de confirmação do formulário de contato
const formContato = document.getElementById('formContato');
const avisoEnvio = document.getElementById('avisoEnvio');

formContato.addEventListener('submit', (event) => {
  event.preventDefault();
  const nome = document.getElementById('nome').value;

  avisoEnvio.textContent = `Obrigado pelo contato, ${nome}! Sua mensagem foi registrada.`;
  avisoEnvio.classList.remove('d-none');
  formContato.reset();
});

